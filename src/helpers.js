export function snakeString(str) {
  const arr = str.split(" ");
  if (arr.length === 1) return arr[0].toLowerCase();
  return arr.map((x) => x.toLowerCase()).join("-");
}
