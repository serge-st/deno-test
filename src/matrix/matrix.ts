export function matrix(n: number): number[][] {
  const result: number[][] = Array.from({ length: n }, () => []);

  let count = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startColumn = 0;
  let endColumn = n - 1;

  while (count <= Math.pow(n, 2)) {
    for (let i = startColumn; i <= endColumn; i++) {
      result[startRow][i] = count;
      count += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i++) {
      result[i][endRow] = count;
      count += 1;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i--) {
      result[endRow][i] = count;
      count += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i--) {
      result[i][startColumn] = count;
      count += 1;
    }
    startColumn += 1;
  }

  return result;
}

matrix(3);
