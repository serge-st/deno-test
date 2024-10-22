import type { RGB } from "./rgb.type.ts";

export function hexToRGB(hexString: string): RGB {
  const hexPattern = /^\#([a-fA-F0-9]{3}){1,2}$/;
  if (!hexPattern.test(hexString)) throw new Error("Invalid hex code");

  let hex = hexString.replace("#", "");

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  const [r, g, b] = hex.match(/.{2}/g)!.map((hex) => parseInt(hex, 16));

  return { r, g, b };
}
