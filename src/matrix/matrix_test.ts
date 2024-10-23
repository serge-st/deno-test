import { assertEquals } from "@std/assert/equals";
import { matrix } from "./matrix.ts";

Deno.test("matrix test", () => {
  assertEquals(matrix(2), [
    [1, 2],
    [4, 3],
  ]);

  assertEquals(matrix(3), [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5],
  ]);

  assertEquals(matrix(4), [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7],
  ]);
});
