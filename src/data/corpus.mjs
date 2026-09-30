/**
 * Kho câu hỏi: kiến thức (có đáp án) + ứng xử tình huống (có gợi ý).
 * Cả hai dùng chung format { tag, q, a } — a hiển thị sau khi quẹt.
 */
import { KNOWLEDGE } from "./knowledge.mjs";
import { SITUATION } from "./situation.mjs";

export const TAG_COLORS = {
  // kiến thức
  "Khoa học":   "#8AB4D8",
  "Lịch sử":    "#C9A27E",
  "Địa lý":     "#6FD3A8",
  "Văn hóa":    "#F0955C",
  "Công nghệ":  "#5BC8E8",
  "Y tế":       "#F0907A",
  "Xã hội":     "#B39DDB",
  "Giao thông": "#8FA8F5",
  "Môi trường": "#5ECBB8",
  "Kiến thức":  "#C4A7F5",
  // ứng xử
  "Ứng xử":     "#F58A8E",
  "Công sở":    "#C39BEF",
  "Gia đình":   "#A8D8D2",
  "Bạn bè":     "#7FD8C9",
  "An toàn":    "#F07167",
  "Tiêu dùng":  "#F5C46B",
  "Học tập":    "#7FE3B8",
  // luồng sinh (million.mjs)
  "Tự nhiên":     "#95D5B2",
  "Quân sự":      "#B0A8B9",
  "Kinh tế":      "#FFD97D",
  "So sánh":      "#F0C987",
  "Nhân chia":    "#9AD0EC",
  "Cộng trừ":     "#B8E0A8",
  "Số học":       "#E8A8C6",
  "Lịch vạn niên":"#D8C39A",
  "Đo lường":     "#A8C8E8",
  "Số La Mã":     "#C8B8E0",
};

export const QUESTIONS = [...KNOWLEDGE, ...SITUATION];

// Kiểm tra dữ liệu ngay khi nạp (build fail sớm nếu thêm câu lỗi)
const seen = new Map();
for (const [i, item] of QUESTIONS.entries()) {
  if (!item || typeof item.q !== "string" || !item.q.trim()) {
    throw new Error(`Câu #${i} rỗng hoặc sai kiểu`);
  }
  if (!item.q.includes("?")) {
    throw new Error(`Câu #${i} thiếu dấu ?: ${item.q}`);
  }
  if (typeof item.a !== "string" || item.a.trim().length < 5) {
    throw new Error(`Câu #${i} thiếu đáp án/gợi ý: ${item.q}`);
  }
  if (!TAG_COLORS[item.tag]) {
    throw new Error(`Câu #${i} tag lạ "${item.tag}": ${item.q}`);
  }
  const dup = seen.get(item.q);
  if (dup !== undefined) {
    throw new Error(`Câu #${i} trùng #${dup}: ${item.q}`);
  }
  seen.set(item.q, i);
}

export const TAG_COUNTS = QUESTIONS.reduce((acc, { tag }) => {
  acc[tag] = (acc[tag] || 0) + 1;
  return acc;
}, {});

export const TOTAL = QUESTIONS.length;
