export function shuffle(arr: Array<any>) {
  const shuffled = [...arr];
  let m = shuffled.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = shuffled[m];
    shuffled[m] = shuffled[i];
    shuffled[i] = t;
  }
  return shuffled;
}
