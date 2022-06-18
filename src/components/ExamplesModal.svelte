<script>
  import Modal from "./Modal.svelte";
  import CodeEditor from "./CodeEditor.svelte";
  export let tag;
  let activeAttribute = "";
  let code = `<${tag.tag}></${tag.tag}>`;
  function handleCodeChange(_code) {
    code = _code;
  }
  tag.examples = [
    {
      attribute: "href",
      code: `
      <a href=\"#\">
        <slot></slot>
      </a>
    `,
    },
    {
      attribute: "href",
      code: `
      <a href=\"#\">
        <slot></slot>
      </a>
    `,
    },
  ];
</script>

<Modal>
  <h3 class="text-lg font-bold">Examples</h3>
  <div
    class={`flex flex-row h-96 overflow-hidden ${
      tag.attributes.length > 0 ? "justify-between" : "justify-evenly"
    }`}
  >
    <!-- {JSON.stringify(tag)} -->
    {#if tag.attributes.length > 0}
      <ul class="flex flex-col items-center px-4 overflow-y-scroll w-2/12">
        {#each tag.attributes as attribute (attribute.name)}
          <li class="w-full text-center py-3">
            <button
              class={`btn w-full ${
                activeAttribute === attribute.name ? "btn-primary" : ""
              }`}
              on:click={() => {
                activeAttribute = attribute.name;
              }}
            >
              {attribute.name}
            </button>
          </li>
        {/each}
      </ul>
    {/if}
    
      <CodeEditor examples={tag.examples} {code} {handleCodeChange} />
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
  </div>
</Modal>
