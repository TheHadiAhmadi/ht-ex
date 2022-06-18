<script>
  import { onMount } from "svelte";
  import Modal from "./Modal.svelte";
  import CodeEditor from "./CodeEditor.svelte";
  export let tag;
  let attributes = [];
  let activeAttributeIndex = 0;
  let activeExampleIndex = 0;

  onMount(() => {
    attributes = tag.attributes;
  });

  $: activeAttribute = attributes[activeAttributeIndex]?.name;
  $: code =
    attributes[activeAttributeIndex]?.examples[activeExampleIndex]?.content;
  $: examples = attributes[activeAttributeIndex]?.examples;

  function handleAttributesClick(i) {
    activeAttributeIndex = i;
    activeExampleIndex = 0;
    examples = attributes[i].examples;
  }
</script>

<Modal>
  <div
    class={`flex flex-row h-96 overflow-hidden item-start ${
      attributes.length > 0 ? "justify-between" : "justify-evenly"
    }`}
  >
    {#if attributes.length > 0}
      <ul class="flex flex-col items-center px-4 overflow-y-scroll w-3/12">
        <h3 class="text-center pt-2">Attributes</h3>
        {#each attributes as attribute, i (attribute.name + i)}
          <li class="w-full text-center py-3">
            <button
              on:click={() => handleAttributesClick(i)}
              class={`btn w-full text-xs ${
                activeAttribute === attribute.name ? "btn-primary" : ""
              }`}
            >
              {attribute.name}
            </button>
          </li>
        {/each}
      </ul>
      <div class="w-5/12  space-y-6 px-5 pb-2 overflow-y-scroll">
        <h3 class="text-center pt-2">Examples</h3>
        {#if examples.length > 0}
          {#each examples as example, i (example.id)}
            <CodeEditor
              {example}
              on:codeEditorFocused={(e) => (activeExampleIndex = i)}
              on:codeEditorChanged={(e) => {
                console.log("changed");
                examples[activeExampleIndex].content = e.detail;
                code = e.detail;
              }}
            />
          {/each}
        {:else}
          <p class="text-center">No examples</p>
        {/if}
      </div>

      <div class=" overflow-hidden rounded-xl w-4/12">
        <h3 class="text-center pt-2">Result</h3>
        <div class="p-4">
          <iframe
            width="100%"
            srcdoc={code}
            src="https://bing.com/"
            class="w-full h-80 bg-white rounded-xl"
            title="example"
          />
        </div>
      </div>
    {:else}
      no code
    {/if}
  </div>
</Modal>
