/**
 * Sinh đúng 1.000.000 câu hỏi (kèm đáp án), chia ĐỀU 16 luồng × 62.500 câu.
 * id % 16 = luồng; floor(id / 16) = chỉ số trong luồng → 16 lĩnh vực đan xen
 * đều tuyệt đối: mọi đoạn 16 id liên tiếp đều đủ 16 lĩnh vực.
 *
 * Các luồng kiến thức (L0-L9) sinh từ bảng dữ liệu thật trong domains.mjs +
 * knowledge/situation.mjs, mỗi mục dựng 3 dạng câu: hỏi mở, đúng-sai đúng,
 * đúng-sai sai → pool = N_mục × 3, lặp chu kỳ khi vượt pool.
 * Các luồng toán-lịch-đo (L10-L15) có pool lớn, duy nhất trong 62.500.
 *
 *   L0  Tổng hợp     — 179 câu viết tay (kiến thức + ứng xử)
 *   L1  Lịch sử      — 58 sự kiện × 3 dạng
 *   L2  Địa lý       — 86 nước (thủ đô) + 62 địa danh × 3 dạng
 *   L3  Khoa học     — 60 nguyên tố × 2 + 32 câu hóa/cơ học viết tay
 *   L4  Tự nhiên     — 58 fact môi trường-sinh vật × 3 dạng
 *   L5  Quân sự      — 49 fact quân sự-quốc phòng × 3 dạng
 *   L6  Kinh tế      — 49 khái niệm kinh tế × 3 dạng
 *   L7  Văn hóa      — 70 di sản-phong tục × 3 dạng
 *   L8  Thể thao     — 58 môn-sự kiện-vận động viên × 3 dạng
 *   L9  Thông tin    — 59 công nghệ-an ninh mạng × 3 dạng + 50 đời sống
 *   L10 So sánh      — a < b? (duy nhất)
 *   L11 Nhân chia    — a × b, a ÷ b (duy nhất)
 *   L12 Số học       — tính chất số (duy nhất)
 *   L13 Lịch         — ngày → thứ (duy nhất)
 *   L14 Cộng trừ     — a + b, a - b (duy nhất)
 *   L15 Đo lường     — đổi đơn vị (duy nhất)
 */
import { KNOWLEDGE } from "../data/knowledge.mjs";
import { SITUATION } from "../data/situation.mjs";
import { TAG_COLORS } from "../data/corpus.mjs";
import {
  HISTORY_FACTS, MILITARY_FACTS, ECONOMY_FACTS, CULTURE_FACTS,
  SPORT_FACTS, NATURE_FACTS, TECH_FACTS, LIFE_FACTS, GEO_FACTS,
} from "../data/domains.mjs";

export { TAG_COLORS };
export const TOTAL = 1_000_000;
const GROUPS = 16;
const PER_GROUP = TOTAL / GROUPS; // 62.500

/* ================= Dữ liệu nền giữ lại từ bản 8 luồng ================= */

const CAPITALS = [
  ["Nhật Bản", "Tokyo", "đô lớn nhất thế giới về vùng đô thị"],
  ["Pháp", "Paris", "thành phố ánh sáng"],
  ["Đức", "Berlin", "cột Brandenburg"],
  ["Ý", "Roma", "đấu trường Colosseum"],
  ["Tây Ban Nha", "Madrid", "bảo tàng Prado"],
  ["Bồ Đào Nha", "Lisbon", "tháp Belem"],
  ["Hà Lan", "Amsterdam", "kênh đào vòng cung"],
  ["Bỉ", "Brussels", "trụ sở EU"],
  ["Thụy Sĩ", "Bern", "không phải Zurich"],
  ["Áo", "Vienna", "cung điện Schönbrunn"],
  ["Thụy Điển", "Stockholm", "được xây trên 14 đảo"],
  ["Na Uy", "Oslo", "phần thưởng Nobel hòa bình"],
  ["Đan Mạch", "Copenhagen", "tượng Nàng Tiên Cá"],
  ["Phần Lan", "Helsinki", "vịnh Baltic"],
  ["Iceland", "Reykjavik", "thủ đô cực Bắc thế giới"],
  ["Ireland", "Dublin", "cửa hàng bia Guinness"],
  ["Anh", "London", "Thames và Big Ben"],
  ["Hy Lạp", "Athens", "đền Parthenon"],
  ["Thổ Nhĩ Kỳ", "Ankara", "không phải Istanbul"],
  ["Nga", "Moscow", "Kremlin"],
  ["Ukraina", "Kyiv", "dòng Dnepr"],
  ["Ba Lan", "Warsaw", "khu phố cổ được UNESCO"],
  ["Séc", "Prague", "cầu Charles"],
  ["Hungary", "Budapest", "hai bờ Danube"],
  ["Rumani", "Bucharest", "Cung Quốc hội"],
  ["Bulgaria", "Sofia", "núi Vitosha"],
  ["Serbia", "Belgrade", "hợp lưu sông Sava-Danube"],
  ["Croatia", "Zagreb", "biển Adriatic"],
  ["Úc", "Canberra", "không phải Sydney"],
  ["New Zealand", "Wellington", "thành phố gió"],
  ["Canada", "Ottawa", "không phải Toronto"],
  ["Mỹ", "Washington D.C.", "nhà trắng"],
  ["Mexico", "Mexico City", "đô lớn nhất châu Mỹ"],
  ["Brazil", "Brasília", "thành phố quy hoạch hình máy bay"],
  ["Argentina", "Buenos Aires", "tango"],
  ["Chile", "Santiago", "dãy Andes vây quanh"],
  ["Peru", "Lima", "quốc gia của Machu Picchu"],
  ["Colombia", "Bogotá", "cao nguyên Andes"],
  ["Venezuela", "Caracas", "thác Angel cao nhất thế giới"],
  ["Ecuador", "Quito", "giữa xích đạo"],
  ["Bolivia", "Sucre", "La Paz là trụ sở chính phủ"],
  ["Nam Phi", "Pretoria", "3 thủ đô hành pháp/lập pháp/tư pháp"],
  ["Ai Cập", "Cairo", "sông Nile"],
  ["Maroc", "Rabat", "không phải Casablanca"],
  ["Algeria", "Algiers", "bờ Địa Trung Hải"],
  ["Tunisia", "Tunis", "di tích Carthage"],
  ["Libya", "Tripoli", "biển Địa Trung Hải"],
  ["Nigeria", "Abuja", "không phải Lagos"],
  ["Kenya", "Nairobi", "vườn quốc gia trong lòng thành phố"],
  ["Ethiopia", "Addis Ababa", "trụ sở Liên minh châu Phi"],
  ["Ghana", "Accra", "bờ vịnh Guinea"],
  ["Senegal", "Dakar", "cuối hành trình Dakar Rally cũ"],
  ["Tanzania", "Dodoma", "Kilimanjaro thuộc nước này"],
  ["Uganda", "Kampala", "hồ Victoria"],
  ["Mozambique", "Maputo", "Ấn Độ Dương"],
  ["Angola", "Luanda", "từng là thuộc địa Bồ Đào Nha"],
  ["Zimbabwe", "Harare", "thác Victoria"],
  ["Trung Quốc", "Bắc Kinh", "Tử Cấm Thành"],
  ["Hàn Quốc", "Seoul", "sông Hàn"],
  ["Bắc Triều Tiên", "Bình Nhưỡng", "sông Đại Đồng"],
  ["Ấn Độ", "New Delhi", "cổng Ấn Độ"],
  ["Pakistan", "Islamabad", "thành phố quy hoạch mới"],
  ["Bangladesh", "Dhaka", "sông Buriganga"],
  ["Sri Lanka", "Sri Jayawardenepura Kotte", "Colombo là trung tâm thương mại"],
  ["Thái Lan", "Bangkok", "Chao Phraya"],
  ["Việt Nam", "Hà Nội", "Hồ Gươm"],
  ["Lào", "Viêng Chăn", "Pha That Luong"],
  ["Campuchia", "Phnom Penh", "hợp lưu Mekong-Tonle Sap"],
  ["Myanmar", "Naypyidaw", "thủ đô mới từ 2005"],
  ["Malaysia", "Kuala Lumpur", "tháp đôi Petronas"],
  ["Singapore", "Singapore", "thành phố-quốc gia"],
  ["Indonesia", "Jakarta", "quốc đảo lớn nhất"],
  ["Philippines", "Manila", "vịnh Manila"],
  ["Brunei", "Bandar Seri Begawan", "vương quốc dầu mỏ"],
  ["Mông Cổ", "Ulaanbaatar", "thủ đô lạnh nhất thế giới"],
  ["Kazakhstan", "Astana", "đổi tên nhiều lần"],
  ["Uzbekistan", "Tashkent", "Con đường tơ lụa"],
  ["Iran", "Tehran", "dãy Alborz"],
  ["Iraq", "Baghdad", "sông Tigris"],
  ["Saudi Arabia", "Riyadh", "thủ đô dầu mỏ"],
  ["Israel", "Jerusalem", "tranh chấp ba tôn giáo"],
  ["Jordan", "Amman", "gần thành cổ Petra"],
  ["Syria", "Damascus", "thủ đô cổ nhất còn ở"],
  ["Lebanon", "Beirut", "Địa Trung Hải"],
  ["Afghanistan", "Kabul", "thung lũng Hindu Kush"],
  ["Nepal", "Kathmandu", "chân Everest"],
  ["Bhutan", "Thimphu", "chỉ số hạnh phúc quốc gia"],
  ["Maldives", "Malé", "quốc đảo Ấn Độ Dương"],
];

const ELEMENTS = [
  ["hydrogen", "H"], ["helium", "He"], ["lithium", "Li"], ["beryllium", "Be"],
  ["boron", "B"], ["carbon", "C"], ["nitrogen", "N"], ["oxygen", "O"],
  ["fluorine", "F"], ["neon", "Ne"], ["sodium", "Na"], ["magnesium", "Mg"],
  ["aluminium", "Al"], ["silicon", "Si"], ["phosphorus", "P"], ["sulfur", "S"],
  ["chlorine", "Cl"], ["argon", "Ar"], ["potassium", "K"], ["calcium", "Ca"],
  ["titanium", "Ti"], ["chromium", "Cr"], ["manganese", "Mn"], ["iron", "Fe"],
  ["cobalt", "Co"], ["nickel", "Ni"], ["copper", "Cu"], ["zinc", "Zn"],
  ["arsenic", "As"], ["bromine", "Br"], ["silver", "Ag"], ["tin", "Sn"],
  ["iodine", "I"], ["xenon", "Xe"], ["tungsten", "W"], ["platinum", "Pt"],
  ["gold", "Au"], ["mercury", "Hg"], ["lead", "Pb"], ["radon", "Rn"],
  ["krypton", "Kr"], ["antimony", "Sb"], ["tellurium", "Te"], ["selenium", "Se"],
  ["gallium", "Ga"], ["germanium", "Ge"], ["indium", "In"], ["thallium", "Tl"],
  ["bismuth", "Bi"], ["polonium", "Po"], ["astatine", "At"], ["radium", "Ra"],
  ["actinium", "Ac"], ["thorium", "Th"], ["uranium", "U"], ["plutonium", "Pu"],
  ["hafnium", "Hf"], ["rhenium", "Re"], ["osmium", "Os"], ["iridium", "Ir"],
];

/* ================= Công cụ ================= */

function numToVi(n) {
  const D = DIGITS_VI;
  if (n < 10) return D[n];
  if (n < 100) {
    const d = Math.floor(n / 10), u = n % 10;
    if (d === 1) return u === 0 ? "mười" : u === 5 ? "mười lăm" : "mười " + D[u];
    const tens = D[d] + " mươi";
    if (u === 0) return tens;
    if (u === 1) return tens + " mốt";
    if (u === 5) return tens + " lăm";
    return tens + " " + D[u];
  }
  if (n < 1000) {
    const h = Math.floor(n / 100), r = n % 100;
    const head = D[h] + " trăm";
    if (r === 0) return head;
    if (r < 10) return head + " lẻ " + D[r];
    return head + " " + numToVi(r);
  }
  const t = Math.floor(n / 1000), r = n % 1000;
  const head = t === 1 ? "một nghìn" : numToVi(t) + " nghìn";
  if (r === 0) return head;
  if (r < 100) return head + " không trăm " + numToVi(r);
  return head + " " + numToVi(r);
}
const DIGITS_VI = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

function toRoman(n) {
  const table = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"],
    [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let out = "", x = n;
  for (const [v, s] of table) { while (x >= v) { out += s; x -= v; } }
  return out;
}

function weekdayOf(y, m, d) { return new Date(Date.UTC(y, m - 1, d)).getUTCDay(); }
const WD_VI = ["Chủ Nhật", "thứ Hai", "thứ Ba", "thứ Tư", "thứ Năm", "thứ Sáu", "thứ Bảy"];
const MONTH_LEN = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeap(y) { return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0; }

const CONVERSIONS = [
  { big: "km", small: "m", f: 1000 }, { big: "m", small: "cm", f: 100 },
  { big: "kg", small: "g", f: 1000 }, { big: "tấn", small: "kg", f: 1000 },
  { big: "lít", small: "ml", f: 1000 }, { big: "giờ", small: "phút", f: 60 },
  { big: "phút", small: "giây", f: 60 }, { big: "ngày", small: "giờ", f: 24 },
  { big: "tuần", small: "ngày", f: 7 }, { big: "m", small: "mm", f: 1000 },
];
const CONV_PRETTY = { km: "ki-lô-mét", m: "mét", cm: "xăng-ti-mét", mm: "mi-li-mét",
  kg: "ki-lô-gam", g: "gam", tấn: "tấn", lít: "lít", ml: "mi-li-lít",
  giờ: "giờ", phút: "phút", giây: "giây", ngày: "ngày", tuần: "tuần" };

/** Giữ nguyên văn bản: không lowercase tự động (tên riêng Việt). */
function lower(s) {
  return s.charAt(0) + s.slice(1);
}

/** Sinh 3 dạng câu từ 1 fact [subject, statement, note]:
 *  mode 0: hỏi mở → trả statement
 *  mode 1: đúng-sai với phát biểu ĐÚNG (đúng cặp subject-statement)
 *  mode 2: đúng-sai với phát biểu SAI (cặp subject-statement lệch của mục khác) */
function fact3(tag, facts, i, fmt) {
  const n = facts.length;
  const idx = i % n, mode = Math.floor(i / n) % 3;
  const [s, st, note] = facts[idx];
  if (mode === 0) return fmt.open(tag, s, st, note);
  if (mode === 1) return fmt.tf(tag, s, st, note, true);
  // mode 2: ghép lệch subject của mục này với statement của mục khác → phát biểu SAI
  const j = (idx + 7) % n;
  return fmt.tf(tag, s, facts[j][1], facts[j][2], false);
}

/* ================= 16 luồng ================= */

// L0 — Tổng hợp: viết tay xoay vòng
const HANDWRITTEN = [...KNOWLEDGE, ...SITUATION];
function handwrittenQ(i) { return HANDWRITTEN[i % HANDWRITTEN.length]; }

// L1 — Lịch sử: [năm, sự kiện, chi tiết]
const HISTORY_FMT = {
  open: (tag, s, st, note) => ({ tag: "Lịch sử", q: `Năm ${s} đánh dấu sự kiện gì?`, a: `${st} — ${note}.` }),
  tf: (tag, s, st, note, truth) => ({ tag: "Lịch sử", q: `Năm ${s}, ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
};
function historyQ(i) {
  return fact3("Lịch sử", HISTORY_FACTS, i, HISTORY_FMT);
}

// L2 — Địa lý: thủ đô + địa danh Việt Nam-thế giới
function geographyQ(i) {
  const CAP3 = CAPITALS.length * 2;
  if (i % 2 === 0) {
    // nửa câu: thủ đô (2 dạng)
    const k = Math.floor(i / 2) % CAP3;
    const c = CAPITALS[k % CAPITALS.length];
    const mode = Math.floor(k / CAPITALS.length);
    const [country, capital, hint] = c;
    if (mode === 0) return { tag: "Địa lý", q: `Thủ đô của ${country} là gì?`, a: `${capital} — ${hint}.` };
    const wrong = CAPITALS[(k + 7) % CAPITALS.length][1];
    return { tag: "Địa lý", q: `Thủ đô của ${country} là ${wrong}, đúng hay sai?`, a: `Sai — thủ đô của ${country} là ${capital} (${hint}).` };
  }
  const j = Math.floor(i / 2);
  return fact3("Địa lý", GEO_FACTS, j, {
    open: (tag, s, st, note) => ({ tag, q: `${s} nổi tiếng về điều gì?`, a: `${st} — ${note}.` }),
    tf: (tag, s, st, note, truth) => ({ tag, q: `${s} — ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
  });
}

// L3 — Khoa học: nguyên tố hóa học + câu khoa học viết tay (KNOWLEDGE lọc tag Khoa học/Y tế/Kiến thức)
const SCI_HAND = HANDWRITTEN.filter(q => ["Khoa học", "Y tế", "Kiến thức"].includes(q.tag));
const ELE3 = ELEMENTS.length * 3;
function scienceQ(i) {
  if (i % 3 === 0) {
    const k = Math.floor(i / 3) % ELE3;
    const e = ELEMENTS[k % ELEMENTS.length];
    const mode = Math.floor(k / ELEMENTS.length);
    const [name, sym] = e;
    if (mode === 0) return { tag: "Khoa học", q: `Ký hiệu hóa học của ${name} là gì?`, a: `${sym} — ký hiệu hóa học quốc tế.` };
    if (mode === 1) return { tag: "Khoa học", q: `Ký hiệu hóa học của ${name} là ${sym}, đúng hay sai?`, a: `Đúng — ${name} có ký hiệu ${sym}.` };
    const wrong = ELEMENTS[(k + 5) % ELEMENTS.length][1];
    return { tag: "Khoa học", q: `Ký hiệu hóa học của ${name} là ${wrong}, đúng hay sai?`, a: `Sai — ${wrong} là của nguyên tố khác; ${name} có ký hiệu ${sym}.` };
  }
  return SCI_HAND[Math.floor(i / 3) % SCI_HAND.length];
}

// L4 — Tự nhiên & môi trường
function natureQ(i) {
  return fact3("Tự nhiên", NATURE_FACTS, i, {
    open: (tag, s, st, note) => ({ tag, q: `Về ${s}: điều nào đúng?`, a: `${st} — ${note}.` }),
    tf: (tag, s, st, note, truth) => ({ tag, q: `${s}: ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
  });
}

// L5 — Quân sự & Quốc phòng
function militaryQ(i) {
  return fact3("Quân sự", MILITARY_FACTS, i, {
    open: (tag, s, st, note) => ({ tag, q: `${s} là gì?`, a: `${st} — ${note}.` }),
    tf: (tag, s, st, note, truth) => ({ tag, q: `${s}: ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
  });
}

// L6 — Kinh tế
function economyQ(i) {
  return fact3("Kinh tế", ECONOMY_FACTS, i, {
    open: (tag, s, st, note) => ({ tag, q: `Thuật ngữ kinh tế "${s}" nghĩa là gì?`, a: `${st} — ${note}.` }),
    tf: (tag, s, st, note, truth) => ({ tag, q: `${s}: ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
  });
}

// L7 — Văn hóa
function cultureQ(i) {
  return fact3("Văn hóa", CULTURE_FACTS, i, {
    open: (tag, s, st, note) => ({ tag, q: `Văn hóa: ${s} là gì?`, a: `${st} — ${note}.` }),
    tf: (tag, s, st, note, truth) => ({ tag, q: `${s}: ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
  });
}

// L8 — Thể thao
function sportQ(i) {
  return fact3("Thể thao", SPORT_FACTS, i, {
    open: (tag, s, st, note) => ({ tag, q: `Thể thao: ${s} là gì / ai?`, a: `${st} — ${note}.` }),
    tf: (tag, s, st, note, truth) => ({ tag, q: `${s}: ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
  });
}

// L9 — Thông tin (công nghệ) + đời sống/xã hội
const LIFE_HALF = Math.ceil(LIFE_FACTS.length / 2);
function techQ(i) {
  if (i % 2 === 0) {
    return fact3("Thông tin", TECH_FACTS, Math.floor(i / 2), {
      open: (tag, s, st, note) => ({ tag, q: `Công nghệ: ${s} là gì?`, a: `${st} — ${note}.` }),
      tf: (tag, s, st, note, truth) => ({ tag, q: `${s}: ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
    });
  }
  return fact3("Đời sống", LIFE_FACTS, Math.floor(i / 2) + LIFE_FACTS.length * 100, {
    open: (tag, s, st, note) => ({ tag, q: `Đời sống: ${s} là gì?`, a: `${st} — ${note}.` }),
    tf: (tag, s, st, note, truth) => ({ tag, q: `${s}: ${st}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${note}.` }),
  });
}

// L10 — So sánh số
function compareQ(i) {
  const inv = i % 2;
  const pair = Math.floor(i / 2);
  const a = 1 + (pair % 250), b = 1 + Math.floor(pair / 250);
  const truth = a < b;
  const op = inv ? ">" : "<";
  return { tag: "So sánh", q: `${a} ${op} ${b}, đúng hay sai?`, a: `${(inv ? !truth : truth) ? "Đúng" : "Sai"} — thật ra ${a} ${truth ? "<" : ">"} ${b}.` };
}

// L11 — Nhân chia
function mulDivQ(i) {
  const inv = i % 2;
  const pair = Math.floor(i / 2);
  const kind = pair % 2;
  const p2 = Math.floor(pair / 2);
  if (kind === 0) {
    const a = 1 + (p2 % 177), b = 1 + Math.floor(p2 / 177);
    const prod = a * b;
    if (inv) {
      const wrong = prod + (prod > 10 ? (a % 7) - 3 : 1);
      return { tag: "Nhân chia", q: `${a} × ${b} = ${wrong}, đúng hay sai?`, a: `Sai — ${a} × ${b} = ${prod}.` };
    }
    return { tag: "Nhân chia", q: `${a} × ${b} = ?`, a: `${prod}.` };
  }
  const b = 2 + (p2 % 177), q = 2 + Math.floor(p2 / 177);
  const a = b * q;
  if (inv) {
    const wrong = q + 1;
    return { tag: "Nhân chia", q: `${a} ÷ ${b} = ${wrong}, đúng hay sai?`, a: `Sai — ${a} ÷ ${b} = ${q} (vì ${b} × ${q} = ${a}).` };
  }
  return { tag: "Nhân chia", q: `${a} ÷ ${b} = ?`, a: `${q} — vì ${b} × ${q} = ${a}.` };
}

// L12 — Số học
function isPrime(n) {
  if (n < 2) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) if (n % i === 0) return false;
  return true;
}
const NUM_KINDS = ["prime", "even", "square", "cube", "mult3", "mult5"];
const NUM_PRED = {
  prime: { test: isPrime, label: "là số nguyên tố", not: "không phải số nguyên tố", why: "chỉ chia hết cho 1 và chính nó" },
  even: { test: n => n % 2 === 0, label: "là số chẵn", not: "là số lẻ", why: "" },
  square: { test: n => { const r = Math.round(Math.sqrt(n)); return r * r === n; }, label: "là số chính phương", not: "không phải số chính phương", why: "bình phương của một số nguyên" },
  cube: { test: n => { const r = Math.round(Math.cbrt(n)); return r * r * r === n; }, label: "là số lập phương", not: "không phải số lập phương", why: "lập phương của một số nguyên" },
  mult3: { test: n => n % 3 === 0, label: "chia hết cho 3", not: "không chia hết cho 3", why: "" },
  mult5: { test: n => n % 5 === 0, label: "chia hết cho 5", not: "không chia hết cho 5", why: "" },
};
function numQ(i) {
  const digit = i % 62_500;                    // 0..62.499 (đủ 62.5k duy nhất)
  const kind = NUM_KINDS[i % NUM_KINDS.length];
  const p = NUM_PRED[kind];
  const vi = numToVi(digit);
  const truth = p.test(digit);
  return { tag: "Số học", q: `Số ${digit} (${vi}) ${p.label}, đúng hay sai?`, a: `${truth ? "Đúng" : "Sai"} — ${digit} ${truth ? p.label : p.not}${p.why && truth ? " (" + p.why + ")" : ""}.` };
}

// L13 — Lịch vạn niên
const CAL_START_YEAR = 1600;
const CAL_POOL = 292_194;
function calQ(i) {
  const n = i % CAL_POOL;
  let day = n, year = CAL_START_YEAR;
  while (true) {
    const len = isLeap(year) ? 366 : 365;
    if (day < len) break;
    day -= len; year++;
  }
  let month = 0, acc = 0;
  for (let m = 0; m < 12; m++) {
    const ml = m === 1 && isLeap(year) ? 29 : MONTH_LEN[m];
    if (day < acc + ml) { month = m; break; }
    acc += ml;
  }
  const dom = day - acc + 1;
  const wd = weekdayOf(year, month + 1, dom);
  return { tag: "Lịch vạn niên", q: `Ngày ${dom}/${month + 1}/${year} là thứ mấy?`, a: `${WD_VI[wd]} — theo lịch Gregory.` };
}

// L14 — Cộng trừ
function addSubQ(i) {
  const inv = i % 2;
  const pair = Math.floor(i / 2);
  const opIdx = pair % 2;
  const p2 = Math.floor(pair / 2);
  const a = 1 + (p2 % 177), b = 1 + Math.floor(p2 / 177);
  const o = ["+", "-"][opIdx];
  const solve = opIdx === 0 ? a + b : a - b;
  if (inv) {
    const wrong = solve + (solve > 10 ? (a % 7) - 3 : 1);
    return { tag: "Cộng trừ", q: `${a} ${o} ${b} = ${wrong}, đúng hay sai?`, a: `Sai — ${a} ${o} ${b} = ${solve}.` };
  }
  return { tag: "Cộng trừ", q: `${a} ${o} ${b} = ?`, a: `${solve}.` };
}

// L15 — Đo lường
const MEASURE_MAX = 3125; // 10 cặp × 2 hướng × 3125 giá trị = 62.500 duy nhất
function measureQ(i) {
  const n = i; // < 62.500 → duy nhất
  const c = CONVERSIONS[n % CONVERSIONS.length];
  const dir = Math.floor(n / CONVERSIONS.length) % 2;
  const val = Math.floor(n / (CONVERSIONS.length * 2)) + 1;
  const B = CONV_PRETTY[c.big], S = CONV_PRETTY[c.small];
  const v = val.toLocaleString("vi-VN"), r = (val * c.f).toLocaleString("vi-VN");
  if (dir === 0) {
    return { tag: "Đo lường", q: `${v} ${c.big} bằng bao nhiêu ${c.small}?`, a: `${r} ${c.small} — 1 ${B} = ${c.f.toLocaleString("vi-VN")} ${S}.` };
  }
  return { tag: "Đo lường", q: `${r} ${c.small} bằng bao nhiêu ${c.big}?`, a: `${v} ${c.big} — 1 ${B} = ${c.f.toLocaleString("vi-VN")} ${S}.` };
}

/* ================= 16 luồng ================= */
const STREAMS = [
  handwrittenQ, // 0
  historyQ,     // 1
  geographyQ,   // 2
  scienceQ,     // 3
  natureQ,      // 4
  militaryQ,    // 5
  economyQ,     // 6
  cultureQ,     // 7
  sportQ,       // 8
  techQ,        // 9
  compareQ,     // 10
  mulDivQ,      // 11
  numQ,         // 12
  calQ,         // 13
  addSubQ,      // 14
  measureQ,     // 15
];

/** Metadata 16 luồng: tên hiển thị, mô tả, icon, tag chủ đạo — cho UI chọn chủ đề. */
export const STREAM_META = [
  { name: "Tổng hợp",    desc: "Kiến thức + ứng xử viết tay",  icon: "✦", tags: null },
  { name: "Lịch sử",     desc: "Sự kiện Việt Nam & thế giới",  icon: "⌛", tags: ["Lịch sử"] },
  { name: "Địa lý",      desc: "Thủ đô, địa danh, sông núi",   icon: "🗺", tags: ["Địa lý"] },
  { name: "Khoa học",    desc: "Hóa học, vật lý, cơ thể",      icon: "⚗", tags: ["Khoa học"] },
  { name: "Tự nhiên",    desc: "Môi trường, động thực vật",    icon: "🌿", tags: ["Tự nhiên"] },
  { name: "Quân sự",     desc: "Quốc phòng, binh chủng",       icon: "🛡", tags: ["Quân sự"] },
  { name: "Kinh tế",     desc: "Tiền tệ, thị trường, đầu tư",  icon: "📈", tags: ["Kinh tế"] },
  { name: "Văn hóa",     desc: "Phong tục, di sản, ẩm thực",   icon: "🏮", tags: ["Văn hóa"] },
  { name: "Thể thao",    desc: "Môn thể thao, vận động viên",  icon: "⚽", tags: ["Thể thao"] },
  { name: "Thông tin",   desc: "Công nghệ, an ninh mạng",      icon: "💻", tags: ["Thông tin", "Công nghệ", "Đời sống"] },
  { name: "So sánh",     desc: "a < b, a > b",                 icon: "⚖", tags: ["So sánh"] },
  { name: "Nhân chia",   desc: "Phép nhân và chia",            icon: "✖", tags: ["Nhân chia"] },
  { name: "Số học",      desc: "Nguyên tố, chính phương...",   icon: "#️⃣", tags: ["Số học"] },
  { name: "Lịch vạn niên", desc: "Ngày nào là thứ mấy?",       icon: "📅", tags: ["Lịch vạn niên"] },
  { name: "Cộng trừ",    desc: "Phép cộng và trừ",             icon: "➕", tags: ["Cộng trừ"] },
  { name: "Đo lường",    desc: "Đổi đơn vị km, kg, phút",      icon: "📏", tags: ["Đo lường"] },
];

/** Lấy `count` câu ngẫu nhiên chỉ từ luồng `g` (Fisher-Yates ảo trên 62.5k id của luồng). */
export function sampleFromStream(g, count, seed = 20260930) {
  const rand = mulberry32(seed);
  const swaps = new Map();
  const out = [];
  for (let i = 0; i < Math.min(count, PER_GROUP); i++) {
    const j = i + Math.floor(rand() * (PER_GROUP - i));
    const vi = swaps.has(i) ? swaps.get(i) : i;
    const vj = swaps.has(j) ? swaps.get(j) : j;
    swaps.set(i, vj);
    swaps.set(j, vi);
    out.push({ id: vj * GROUPS + g, ...STREAMS[g](vj) });
  }
  return out;
}

/** id ∈ [0, TOTAL) → { tag, q, a }. Tất định, 16 luồng đan xen đều tuyệt đối. */
export function questionAt(id) {
  if (!Number.isInteger(id) || id < 0 || id >= TOTAL) {
    throw new RangeError(`id phải là số nguyên trong [0, ${TOTAL}), nhận: ${id}`);
  }
  const g = id % GROUPS;
  const j = Math.floor(id / GROUPS);
  return STREAMS[g](j);
}

export const TAG_COUNTS = (() => {
  const counts = {};
  const probe = 3200;
  for (let g = 0; g < GROUPS; g++) {
    const tally = {};
    for (let j = 0; j < Math.min(probe, PER_GROUP); j++) {
      const { tag } = STREAMS[g](j);
      tally[tag] = (tally[tag] || 0) + 1;
    }
    for (const [tag, c] of Object.entries(tally)) {
      counts[tag] = (counts[tag] || 0) + Math.round((c / probe) * PER_GROUP);
    }
  }
  return counts;
})();

function mulberry32(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Lấy `count` câu ngẫu nhiên không lặp theo id (Fisher-Yates ảo). */
export function sampleQuestions(count, seed = 20260930) {
  const rand = mulberry32(seed);
  const swaps = new Map();
  const out = [];
  for (let i = 0; i < Math.min(count, TOTAL); i++) {
    const j = i + Math.floor(rand() * (TOTAL - i));
    const vi = swaps.has(i) ? swaps.get(i) : i;
    const vj = swaps.has(j) ? swaps.get(j) : j;
    swaps.set(i, vj);
    swaps.set(j, vi);
    out.push({ id: vj, ...questionAt(vj) });
  }
  return out;
}
