export function reverseInt(n: number): number {
  const string = n.toString();
  const isNegative = string.includes("-"); // best to use Math.sign(), it returns 1 or -1 depending on the sign of the integer

  const reversed =
    (isNegative ? "-" : "") +
    string
      .split("")
      .filter((c) => c !== "-")
      .reverse()
      .join("");
  return Number(reversed);
}
