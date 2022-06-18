<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let example;
</script>

<textarea
  on:focus={() => {
    dispatch("codeEditorFocused");
  }}
  spellcheck="false"
  autocomplete="on"
  on:input={(e) => {
    dispatch("codeEditorChanged", e.target.value);
  }}
  bind:value={example.content}
  class="mockup-code focus:outline-none focus:ring focus:border-green-500  p-4 pt-8 max-w-md h-3/6 "
/>
