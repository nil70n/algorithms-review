function search(
  haystack: number[],
  lo: number,
  hi: number,
  needle: number,
): boolean {
  const mi: number = Math.trunc(lo + (hi - lo) / 2);
  const curr = haystack[mi];

  if (curr === needle) {
    return true;
  }

  if (lo >= hi) {
    return false;
  }

  return curr > needle
    ? search(haystack, lo, mi, needle)
    : search(haystack, mi + 1, hi, needle);
}

export default function recursive_binary_search(
  haystack: number[],
  needle: number,
): boolean {
  return search(haystack, 0, haystack.length - 1, needle);
}
