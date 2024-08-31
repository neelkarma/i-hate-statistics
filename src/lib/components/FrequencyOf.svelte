<script lang="ts">
  import { dataset } from "$lib/data.svelte";

  let value = $state(0);
</script>

<tr>
  <th class="flex gap-2 items-center">
    <span>Frequency Of</span>
    <input type="number" bind:value class="font-mono" />
  </th>
  <td>{dataset.frequencies.get(value) ?? 0}</td>
</tr>
