import { assertEquals } from "@std/assert/equals";
import { hexToRGB } from "./hex-to-rgb.ts";
import type { RGB } from "./rgb.type.ts";
import { assertThrows } from "@std/assert/throws";

Deno.test("hexToRGB test", () => {
  assertThrows(() => {
    hexToRGB("#a");
  });

  assertEquals<RGB>(hexToRGB("#AAA"), { r: 170, g: 170, b: 170 } as RGB);

  assertEquals<RGB>(hexToRGB("#FF9933"), { r: 255, g: 153, b: 51 } as RGB);
});
