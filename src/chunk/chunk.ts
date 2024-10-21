// export function chunk(arr: number[], chunkLength: number): number[][] {
//   const result: number[][] = [];

//   let chunk: number[] = [];

//   arr.forEach((el) => {
//     if (chunk.length < chunkLength) {
//       chunk.push(el);
//     } else {
//       result.push(chunk);
//       chunk = [];
//       chunk.push(el);
//     }
//   });

//   result.push(chunk);

//   return result;
// }

export function chunk(arr: number[], chunkLength: number): number[][] {
  const result: number[][] = [];
  while (arr.length > 0) {
    result.push(arr.splice(0, chunkLength));
  }

  return result;
}
