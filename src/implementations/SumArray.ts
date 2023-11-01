export default function sum_array(arr: number[]): number {
  if (!arr.length) {
    return 0;
  }

  let nextVal: number | undefined = arr.pop();
  if (nextVal === undefined) {
    nextVal = 0;
  }
  
  return nextVal + sum_array(arr);
}
