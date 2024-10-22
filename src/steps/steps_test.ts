import { assertEquals } from "@std/assert/equals";
import { steps } from "./steps.ts";

Deno.test("steps test", () => {
  assertEquals(steps(3), ["#  ", "## ", "###"]);

  assertEquals(steps(2), ["# ", "##"]);

  assertEquals(steps(4), ["#   ", "##  ", "### ", "####"]);
});
