export function intermingle<T>(a: T[]) {
  for (let i = a.length; i > 1;) {
    --i;
    const r = Math.floor(Math.random() * i);
    [a[r], a[i]] = [a[i], a[r]];
  }
}
