// export function anagrams(s1: string, s2: string): boolean {
//   if (s1.length === 0 || s2.length === 0)
//     throw new Error("strings must be at least 1 character long");

//   const ALLOWED_CHARS = "abcdefghijklmnopqrstwxyz";

//   const processString = (string: string): Map<string, number> => {
//     const sMap = new Map<string, number>();

//     string
//       .toLowerCase()
//       .split("")
//       .forEach((c) => {
//         if (!ALLOWED_CHARS.includes(c)) return;
//         const currentKey = sMap.get(c);
//         sMap.set(c, currentKey ? currentKey + 1 : 1);
//       });

//     return sMap;
//   };

//   const s1Map = processString(s1);
//   const s2Map = processString(s2);

//   if (s1Map.size !== s2Map.size) return false;

//   return !Array.from(s1Map.keys()).some(
//     (key) => s1Map.get(key) !== s2Map.get(key)
//   );
// }

export function anagrams(s1: string, s2: string): boolean {
  const cleanString = (s: string) =>
    s
      .toLowerCase()
      .replaceAll(/[^a-z]/g, "")
      .split("")
      .sort()
      .join("");

  return cleanString(s1) === cleanString(s2);
}
