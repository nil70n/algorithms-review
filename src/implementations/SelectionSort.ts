function getMinor(arr: number[], lastMin: number): number {
  let minIdx: number = -1;

  for (let i = 0; i < arr.length; ++i) {
    if (
      (arr[i] < arr[minIdx] || minIdx === -1) &&
      (arr[i] > arr[lastMin] || lastMin === -1)
    ) {
      minIdx = i;
    }
  }

  return minIdx;
}

export default function selection_sort(arr: number[]): number[] {
  const result: number[] = [];
  let lastSeen: number = -1;

  for (let i = 0; i < arr.length; ++i) {
    lastSeen = getMinor(arr, lastSeen);
    result.push(arr[lastSeen]);
  }

  return result;
}
