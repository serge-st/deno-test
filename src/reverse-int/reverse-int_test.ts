import { assertEquals } from "@std/assert/equals";
import { reverseInt } from "./reverse-int.ts";

Deno.test("reverseInt test", () => {
  assertEquals(reverseInt(15), 51);
  assertEquals(reverseInt(981), 189);
  assertEquals(reverseInt(500), 5);
  assertEquals(reverseInt(-15), -51);
  assertEquals(reverseInt(-90), -9);
});
