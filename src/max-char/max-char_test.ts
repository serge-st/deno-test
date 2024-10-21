import { assertEquals } from "@std/assert/equals";
import { maxChar } from "./max-char.ts";

Deno.test("maxChar test", () => {
  assertEquals(maxChar("abccccc"), "c");
  assertEquals(maxChar("apple 1231111111"), "1");
});
