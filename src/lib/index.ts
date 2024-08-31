export function parseInput(input: string): number[] {
  return input
    .split(/[\s,]+/)
    .filter((val) => val.length)
    .map(parseFloat);
}

export function dataIsValid(data: number[]) {
  return data.length && !data.some(isNaN);
}

export function sum(data: number[]) {
  return data.reduce((cur, acc) => cur + acc, 0);
}

export function mean(data: number[]) {
  return sum(data) / data.length;
}

export function range(data: number[]) {
  return Math.max(...data) - Math.min(...data);
}

export function debounce(fn: Function, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}
