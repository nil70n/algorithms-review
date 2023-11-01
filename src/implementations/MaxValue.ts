export default function max_value(arr: number[], curr: number | null): number {
  if (curr == null) {
    curr = -1;
  }
  
  if (!arr.length) {
    return curr;
  }

  let next: number | undefined = arr.pop();

  if (next === undefined) {
    next = 1;
  }

  return max_value(arr, curr > next ? curr : next);
}
