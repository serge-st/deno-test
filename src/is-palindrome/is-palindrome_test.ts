import { assertEquals } from "@std/assert/equals";
import { isPalindrome } from "./is-palindrome.ts";

Deno.test("isPalindrome test", () => {
  assertEquals<boolean>(isPalindrome("aba"), true);
  assertEquals<boolean>(isPalindrome("hello"), false);
});
