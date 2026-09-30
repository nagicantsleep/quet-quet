/**
 * Seed: dump kho câu hỏi ra data/.
 *
 *   node scripts/seed.mjs                → 1.000.000 câu (NDJSON, ~250MB)
 *   node scripts/seed.mjs --limit 1000   → chỉ 1000 câu đầu
 *   node scripts/seed.mjs --handwritten  → 179 câu viết tay (NDJSON nhỏ)
 *
 * Dòng: {"id":0,"tag":"...","q":"...?","a":"..."}
 */
import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";

const args = process.argv.slice(2);
const handwritten = args.includes("--handwritten");
const limitIdx = args.indexOf("--limit");
const limitArg = limitIdx >= 0 ? Number(args[limitIdx + 1]) : null;

let TOTAL, questionAt, TAG_COUNTS;
if (handwritten) {
  const corpus = await import("../src/data/corpus.mjs");
  TOTAL = corpus.QUESTIONS.length;
  TAG_COUNTS = corpus.TAG_COUNTS;
  questionAt = i => corpus.QUESTIONS[i];
} else {
  ({ TOTAL, questionAt, TAG_COUNTS } = await import("../src/lib/million.mjs"));
}
const limit = Math.min(limitArg ?? TOTAL, TOTAL);

await mkdir(new URL("../data/", import.meta.url), { recursive: true });
const outPath = new URL(handwritten ? "../data/questions-handwritten.ndjson" : "../data/questions-1m.ndjson", import.meta.url);
const ws = createWriteStream(outPath);

const t0 = Date.now();
for (let i = 0; i < limit; i++) {
  const { tag, q, a } = questionAt(i);
  ws.write(JSON.stringify({ id: i, tag, q, a }) + "\n");
  if ((i + 1) % 250_000 === 0) console.log(`${((i + 1) / 1000).toFixed(0)}k câu…`);
}
ws.end();
await new Promise((res, rej) => { ws.on("finish", res); ws.on("error", rej); });

console.log(`Xong ${limit.toLocaleString("vi-VN")} câu → ${outPath.pathname} trong ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (!handwritten) console.log("Theo tag:", JSON.stringify(TAG_COUNTS));
