export function pyramid(steps: number): string[] {
  const baseSize = steps + (steps - 1);

  return Array.from({ length: steps }, (_, i) => {
    const startPadding = steps + i;
    return "#"
      .repeat(i + 1 + i)
      .padStart(startPadding)
      .padEnd(baseSize);
  });
}
