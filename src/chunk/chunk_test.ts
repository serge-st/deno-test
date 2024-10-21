import { assertEquals } from "@std/assert/equals";
import { chunk } from "./chunk.ts";

Deno.test("chunk test", () => {
  assertEquals<number[][]>(chunk([1, 2, 3, 4], 2), [
    [1, 2],
    [3, 4],
  ]);

  assertEquals<number[][]>(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);

  assertEquals<number[][]>(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3), [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]);

  assertEquals<number[][]>(chunk([1, 2, 3, 4, 5], 4), [[1, 2, 3, 4], [5]]);

  assertEquals<number[][]>(chunk([1, 2, 3, 4, 5], 10), [[1, 2, 3, 4, 5]]);
});
