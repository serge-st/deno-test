import { assertEquals } from "@std/assert/equals";
import { pyramid } from "./pyramind.ts";

Deno.test("pyramid test", () => {
  assertEquals(pyramid(2), [" # ", "###"]);
  assertEquals(pyramid(3), ["  #  ", " ### ", "#####"]);
  assertEquals(pyramid(4), ["   #   ", "  ###  ", " ##### ", "#######"]);
});
