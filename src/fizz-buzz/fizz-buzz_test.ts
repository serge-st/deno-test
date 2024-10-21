import { assertEquals } from "@std/assert/equals";
import { fizzBuzz } from "./fizz-buzz.ts";
import { assertInstanceOf } from "@std/assert/instance-of";

Deno.test("fizzBuzz test", () => {
  assertInstanceOf(fizzBuzz(15), Array);

  assertEquals<(string | number)[]>(fizzBuzz(15), [
    1,
    2,
    "fizz",
    4,
    "buzz",
    "fizz",
    7,
    8,
    "fizz",
    "buzz",
    11,
    "fizz",
    13,
    14,
    "fizzbuzz",
  ]);

  assertEquals<number>(fizzBuzz(12).length, 12);
});
