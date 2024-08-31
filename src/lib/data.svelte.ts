function medianOf(arr: number[]) {
  const mid = Math.floor(arr.length / 2);
  return arr.length % 2 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
}

function sumOf(arr: number[]) {
  return arr.reduce((cur, acc) => acc + cur, 0);
}

class Dataset {
  input = $state("");

  unsorted = $derived(
    this.input
      .split(/[\s,]+/)
      .filter((val) => val.length)
      .map(parseFloat),
  );

  unique = $derived(Array.from(new Set(this.unsorted)).sort((a, b) => a - b));
  data = $derived(this.unsorted.sort((a, b) => a - b));
  size = $derived(this.unsorted.length);
  isValid = $derived(this.unsorted.length > 1 && !this.unsorted.some(isNaN));
  sum = $derived(sumOf(this.unsorted));
  max = $derived(this.data[this.data.length - 1]);
  min = $derived(this.data[0]);
  range = $derived(this.max - this.min);
  mean = $derived(this.sum / this.unsorted.length);

  frequencies = $derived.by(() => {
    const frequencies = new Map<number, number>();
    for (const val of this.unsorted) {
      frequencies.set(val, (frequencies.get(val) ?? 0) + 1);
    }
    return frequencies;
  });

  modes = $derived.by(() => {
    let maxFreq = 1;
    let modes: number[] = [];
    for (const [val, freq] of this.frequencies.entries()) {
      if (freq > maxFreq) {
        maxFreq = freq;
        modes = [val];
      } else if (freq === maxFreq) {
        modes.push(val);
      }
    }
    return modes;
  });

  median = $derived(medianOf(this.data));

  q1 = $derived.by(() => {
    const mid = Math.floor(this.data.length / 2);
    const leftHalf = this.data.slice(0, mid);
    return medianOf(leftHalf);
  });

  q3 = $derived.by(() => {
    const mid = Math.floor(this.data.length / 2);
    const rightHalf = this.data.slice(
      this.data.length % 2 ? mid + 1 : mid,
      this.data.length,
    );
    return medianOf(rightHalf);
  });

  iqr = $derived(this.q3 - this.q1);

  populationVariance = $derived(
    sumOf(this.unsorted.map((val) => (val - this.mean) ** 2)) /
      this.unsorted.length,
  );

  sampleVariance = $derived(
    sumOf(this.unsorted.map((val) => (val - this.mean) ** 2)) /
      (this.unsorted.length - 1),
  );

  populationStdev = $derived(Math.sqrt(this.populationVariance));
  sampleStdev = $derived(Math.sqrt(this.sampleVariance));

  constructor() {
    this.input = "";
  }
}

export const dataset = new Dataset();
