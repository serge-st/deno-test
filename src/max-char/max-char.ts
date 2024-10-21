export function maxChar(s: string): string {
  const elMap = new Map<string, number>();

  if (s.length === 0)
    throw new Error("string must be at least 1 character long");

  s.split("").forEach((c) => {
    const currentKey = elMap.get(c);

    elMap.set(c, currentKey ? currentKey + 1 : 1);
  });

  const maxCh = Math.max(...elMap.values());

  const result = [...elMap].find(([_key, val]) => val === maxCh);

  if (!result) throw new Error("unexpected error");

  return result[0];
}
