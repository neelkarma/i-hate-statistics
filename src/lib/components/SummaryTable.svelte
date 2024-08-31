<script>
  import FrequencyOf from "$lib/components/FrequencyOf.svelte";
  import { dataset } from "$lib/data.svelte";
</script>

<table>
  <tbody>
    <tr>
      <th>5-Point Summary</th>
      <td class="w-full">
        {dataset.min}, {dataset.q1}, {dataset.median}, {dataset.q3}, {dataset.max}
      </td>
    </tr>
    <tr>
      <th>Mean</th>
      <td>
        {dataset.mean}
      </td>
    </tr>
    <tr>
      <th>Range</th>
      <td>
        {dataset.range}
      </td>
    </tr>
    <tr>
      <th title="Interquartile Range">IQR</th>
      <td>
        {dataset.iqr}
      </td>
    </tr>
    <tr>
      <th>Dataset Size</th>
      <td>
        {dataset.size}
      </td>
    </tr>
    <tr>
      <th>Mode(s)</th>
      <td>
        {dataset.modes.join(", ")}
      </td>
    </tr>
    <tr>
      <th>Sorted Dataset</th>
      <td>
        {dataset.data.join(", ")}
      </td>
    </tr>
    <tr>
      <th>Population Variance</th>
      <td>
        {dataset.populationVariance}
      </td>
    </tr>
    <tr>
      <th>Population Standard Deviation</th>
      <td>
        {dataset.populationStdev}
      </td>
    </tr>
    <tr>
      <th>Sample Variance</th>
      <td>
        {dataset.sampleVariance}
      </td>
    </tr>
    <tr>
      <th>Sample Standard Deviation</th>
      <td>
        {dataset.sampleStdev}
      </td>
    </tr>
    <tr>
      <th>Sum</th>
      <td>
        {dataset.sum}
      </td>
    </tr>
    <FrequencyOf />
  </tbody>
</table>
