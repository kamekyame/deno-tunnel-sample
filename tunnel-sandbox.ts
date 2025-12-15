import { Sandbox } from "jsr:@deno/sandbox";

await using sandbox = await Sandbox.create();

const result = await sandbox.eval(`
  const a = 1;
  const b = 2;
  a + b;
`);
console.log("result:", result);
