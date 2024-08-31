<script lang="ts">
  import { debounce } from "$lib";
  import { dataset } from "$lib/data.svelte";
  import { pushState } from "$app/navigation";
  import CFDT from "$lib/components/CFDT.svelte";
  import SummaryTable from "$lib/components/SummaryTable.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let inputEl: HTMLInputElement;

  $effect(() => {
    const searchParams = new URLSearchParams(location.search);
    const encodedInput = searchParams.get("i");
    if (encodedInput) {
      const input = decodeURIComponent(encodedInput);
      inputEl.value = input;
      dataset.input = input;
    }
  });

  const handleInput = debounce(() => {
    const input = inputEl.value;
    dataset.input = input;

    const newUrl =
      window.location.origin +
      window.location.pathname +
      "?" +
      new URLSearchParams({ i: input }).toString();
    pushState(newUrl, {});
  }, 500);

  $inspect(dataset);
</script>

<div class="p-8 flex flex-col gap-6">
  <div class="flex flex-col gap-3">
    <h1 class="text-xl font-bold">I Hate Statistics</h1>
    <input
      type="text"
      bind:this={inputEl}
      oninput={handleInput}
      class="font-mono"
      placeholder="1, 2, 3, 4, ..."
    />
  </div>

  {#if dataset.isValid}
    <div class="flex flex-col gap-3">
      <h2 class="text-lg font-bold">Summary</h2>
      <SummaryTable />
    </div>
    <div class="flex flex-col gap-3">
      <h2 class="text-lg font-bold">Cumulative Frequency Distribution Table</h2>
      <CFDT />
    </div>
  {:else}
    Please enter a set of numbers, separated by commas and/or spaces in the
    input above.
  {/if}
  <Footer />
</div>
