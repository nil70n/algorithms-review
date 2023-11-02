export default function quick_sort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const pvt: number = arr[0];
  const sml: number[] = [];
  const grt: number[] = [];

  for (let i = 1; i <= arr.length; ++i) {
    const val: number = arr[i];
    if (val > pvt) {
      grt.push(val);
    } else if (val) {
      sml.push(val);
    }
  }

  return quick_sort(sml).concat([pvt]).concat(quick_sort(grt));
}
