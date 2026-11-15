import { spawn } from "node:child_process";

const child = spawn(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["next", "dev", "-p", "3000", "-H", "0.0.0.0"],
  { stdio: "inherit" }
);

child.on("exit", (code) => {
  process.exit(code ?? 0);
});
