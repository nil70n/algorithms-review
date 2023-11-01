export default function binary_search(
  haystack: number[],
  needle: number,
): boolean {
  let lo: number = 0;
  let hi: number = haystack.length - 1;

  do {
    const mi: number = Math.trunc(lo + (hi - lo) / 2);
    const curr = haystack[mi];

    if (curr === needle) {
      return true;
    }

    if (curr > needle) {
      hi = mi;
    } else {
      lo = mi + 1;
    }
  } while (hi > lo);

  return false;
}
