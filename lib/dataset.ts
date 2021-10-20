import { ThemeProvider } from "@emotion/react";

export const asc = (data: number[]) => data.sort((a, b) => a - b);
export const sum = (data: number[]) => data.reduce((a, b) => a + b, 0);

export class Dataset {
  data: number[];
  unique: number[];
  cache: {
    modes?: number[];
    q1?: number;
    median?: number;
    q3?: number;
    mean?: number;
    min?: number;
    max?: number;
    range?: number;
    iqr?: number;
    variance?: number;
    stdev?: number;
    frequencies: { [key: number]: number };
  };

  constructor(data: number[]) {
    this.data = data.sort((a, b) => a - b);
    this.unique = Array.from(new Set(this.data));
    this.cache = {
      frequencies: {},
    };
  }

  modes() {
    if (this.cache.modes) return this.cache.modes;

    const frequency: { [index: number]: number } = {};
    let maxFreq = 0;
    const modes: number[] = [];

    for (const num of this.data) {
      frequency[num] = (frequency[num] ?? 0) + 1;
      if (!(frequency[num] > maxFreq)) continue;
      maxFreq = frequency[num];
    }

    for (const [num, freq] of Object.entries(frequency)) {
      if (freq !== maxFreq) continue;
      //@ts-ignore
      modes.push(num);
    }

    this.cache.modes = modes;
    return this.cache.modes;
  }

  mean() {
    if (this.cache.mean) return this.cache.mean;
    this.cache.mean = sum(this.data) / this.data.length;
    return this.cache.mean;
  }

  q1() {
    if (this.cache.q1) return this.cache.q1;

    const half = Math.floor(this.data.length / 2);
    const slice = this.data.slice(0, half);
    const sliceHalf = Math.floor(slice.length / 2);

    this.cache.q1 =
      slice.length % 2
        ? slice[sliceHalf]
        : (slice[sliceHalf - 1] + slice[sliceHalf]) / 2.0;
    return this.cache.q1;
  }

  median() {
    if (this.cache.median) return this.cache.median;

    const half = Math.floor(this.data.length / 2);

    this.cache.median =
      this.data.length % 2
        ? this.data[half]
        : (this.data[half - 1] + this.data[half]) / 2.0;

    return this.cache.median;
  }

  q3() {
    if (this.cache.q3) return this.cache.q3;

    const half = Math.floor(this.data.length / 2);
    const slice = this.data.slice(
      this.data.length % 2 ? half + 1 : half,
      this.data.length
    );
    const sliceHalf = Math.floor(slice.length / 2);

    this.cache.q3 =
      slice.length % 2
        ? slice[sliceHalf]
        : (slice[sliceHalf - 1] + slice[sliceHalf]) / 2.0;

    return this.cache.q3;
  }

  range() {
    if (this.cache.range) return this.cache.range;
    this.cache.range = this.max() - this.min();
    return this.cache.range;
  }

  min() {
    if (this.cache.min) return this.cache.min;
    this.cache.min = Math.min(...this.data);
    return this.cache.min;
  }

  max() {
    if (this.cache.max) return this.cache.max;

    this.cache.max = Math.max(...this.data);
    return this.cache.max;
  }

  iqr() {
    if (this.cache.iqr) return this.cache.iqr;
    this.cache.iqr = this.q3() - this.q1();
    return this.cache.iqr;
  }

  variance() {
    if (this.cache.variance) return this.cache.variance;
    const mean = this.mean();
    this.cache.variance =
      sum(this.data.map((val) => (val - mean) ** 2)) / this.data.length;
    return this.cache.variance;
  }

  stdev() {
    if (this.cache.stdev) return this.cache.stdev;
    this.cache.stdev = this.variance() ** 0.5;
    return this.cache.stdev;
  }

  count(num: number) {
    if (this.cache.frequencies[num]) return this.cache.frequencies[num];
    this.cache.frequencies[num] = this.data.filter((val) => val === num).length;
    return this.cache.frequencies[num];
  }
}
