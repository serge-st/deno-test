export function steps(levels: number): string[] {
  return Array.from(
    { length: levels },
    (_, i) => "#".repeat(i + 1) + " ".repeat(levels - (i + 1))
  );
}
