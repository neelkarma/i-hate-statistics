<script lang="ts">
  import { dataset } from "$lib/data.svelte";

  let rows = $derived.by(() => {
    const rows = [];
    let cf = 0;
    for (const x of dataset.unique) {
      const f = dataset.frequencies.get(x)!;
      cf += f;
      rows.push([x, f, f * x, cf, (cf / dataset.size) * 100]);
    }
    return rows;
  });
</script>

<table>
  <thead>
    <tr>
      <th title="Score">x</th>
      <th title="Frequency">f</th>
      <th>fx</th>
      <th title="Cumulative Frequency">cf</th>
      <th title="Cumulative Percentage (%)">cp (%)</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as [x, f, fx, cf, cp]}
      <tr>
        <td>{x}</td>
        <td>{f}</td>
        <td>{fx}</td>
        <td>{cf}</td>
        <td title={cp.toString()}>{cp.toFixed(2)}</td>
      </tr>
    {/each}
  </tbody>
</table>
