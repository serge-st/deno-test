export function fizzBuzz(length: number): (string | number)[] {
  if (length <= 0) throw new Error("Length must be greater than 0");

  const transformer = (n: number) => {
    if (n % 5 === 0 && n % 3 === 0) return "fizzbuzz";
    if (n % 5 === 0) return "buzz";
    if (n % 3 === 0) return "fizz";
    return n;
  };

  return Array.from({ length }, (_, i) => transformer(i + 1));
}
