<script>
  export let handleCodeChange;
  export let examples;
  export let code;

  $: handleCodeChange(code);
</script>

<div class="w-6/12 space-y-6 px-5 py-2 overflow-y-scroll">
  <pre
    contenteditable
    bind:textContent={code}
    class="mockup-code focus:outline-none focus:ring focus:border-green-500  p-4 pt-8 max-w-md h-36 "
  />

  {#each examples as example}
    <pre
      contenteditable
      bind:textContent={example.code}
      class="mockup-code focus:outline-none focus:ring focus:border-green-500  p-4 pt-8 max-w-md h-3/6 "
    />
  {/each}

  {#each examples as example}
    <pre
      contenteditable
      bind:textContent={example.code}
      class="mockup-code focus:outline-none p-4 pt-8 max-w-md "
    />
  {/each}
</div>
