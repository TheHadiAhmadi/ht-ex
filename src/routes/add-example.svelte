<script>
  import { onMount } from "svelte";

  let tags = [];
  let selectedTag = null;
  let selectedAttribute = null;
  let code = "";
  $: attributes =
    selectedTag !== null ? tags[parseInt(selectedTag)]?.attributes : [];

  onMount(async () => {
    console.log("loading tags");
    const response = await fetch(window.location.origin + "/api");
    const result = await response.json();
    tags = result;
    console.log("loaded");
  });

  async function onSubmit({ target }) {
    const tag = target.tag.value;
    const attr = target.attr.value;
    const content = target.content.value;
    const resp = await fetch(`/api/${tag}/${attr}/examples`, {
      method: "POST",
      body: JSON.stringify({
        content,
      }),
    }).then((res) => res.json());
    console.log(resp);
  }
</script>

<form
  class="card border border-primary m-4"
  on:submit|preventDefault={onSubmit}
>
  <div class="card-body">
    <h2 class="card-title">Add Example</h2>
    {selectedTag}
    {selectedAttribute}
    <select name="tag" class="form-control" bind:value={selectedTag}>
      {#each tags as tag, i (tag.id)}
        <option value={`${i}`}>{tag.tag}</option>
      {/each}
    </select>

    <select name="attr" class="form-control" bind:value={selectedAttribute}>
      {#each attributes as attr (attr.id)}
        <option value={attr.name}>{attr.name}</option>
      {/each}
    </select>

    <label required class="form-control">
      <span class="label-text">content:</span>
      <textarea
        required
        class="textarea textarea-bordered"
        name="content"
        bind:value={code}
      />
    </label>
    <iframe
      srcdoc={code}
      src="https://bing.com/"
      width="100%"
      height="200"
      title="coed"
      class="border-2 border-green-200 bg-white"
    />
    <button class="btn" type="submit">Submit</button>
  </div>
</form>
