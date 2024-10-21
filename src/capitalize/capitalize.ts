export function capitalize(inputString: string): string {
  return inputString
    .split(/\s/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}
