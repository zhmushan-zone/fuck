import { readLines } from "https://deno.land/std@v0.37.1/io/bufio.ts";
import { intermingle } from "./util.ts";
const { stdin } = Deno;

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

intermingle(a);

const ans = a.slice(0, 4);

// console.log(ans);

let times = 6;
console.log(
  `我随机生成了四个互不重复的数字 **** (0-9), 请你尝试猜测这些数字(你有${times}次输入机会)`
);
for await (let line of readLines(stdin)) {
  line = line.trim();
  if (line.length != 4) continue;
  let A = 0,
    B = 0;
  for (let i = 0; i < ans.length; ++i) {
    if (line[i] === String(ans[i])) ++A;
    else if (line.includes(String(ans[i]))) ++B;
  }
  console.log(
    `${A}A${B}B (${A}个数字位置匹配, ${B}个数字存在但位置不正确!), 你还有${--times}次输入机会`
  );

  if (A === 4) {
    console.log("猜对");
    break;
  }
  if (!times) break;
}

console.log("答案: ", ans);
