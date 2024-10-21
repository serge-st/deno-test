import { assertEquals } from "@std/assert/equals";
import { capitalize } from "./capitalize.ts";

Deno.test("capitalize test", () => {
  assertEquals(capitalize(""), "");

  assertEquals(capitalize("oneword"), "Oneword");

  assertEquals(capitalize("a short sentence"), "A Short Sentence");

  assertEquals(capitalize("a lazy fox"), "A Lazy Fox");

  assertEquals(capitalize("look, it is working!"), "Look, It Is Working!");
});
