export default function quick_sort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr;
  }

  const pvt = arr[0];
  const sml = [];
  const grt = [];

  for (let i = 1; i <= arr.length; ++i) {
    const val = arr[i];
    if (val > pvt) {
      grt.push(val);
    } else if (val < pvt) {
      sml.push(val);
    }
  }

  return quick_sort(sml).concat([pvt]).concat(quick_sort(grt));
}
