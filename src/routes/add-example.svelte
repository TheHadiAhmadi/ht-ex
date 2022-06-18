<script>
  import { onMount } from "svelte";

  let tags = [];
  let selectedTag = null;
  let selectedAttribute = null;
  let code = "";
  let loading = true;
  $: attributes =
    selectedTag !== null ? tags[parseInt(selectedTag)]?.attributes : [];

  $: attributeDes =
    selectedAttribute !== null
      ? tags[parseInt(selectedTag)]?.attributes.filter(
          (a) => a.name === selectedAttribute
        )[0]?.description
      : "";

  let tagsWithoutExamples = [];
  $: attributesWithoutExamples = attributes
    .filter((attribute) => !attribute.examples.length)
    .map((attribute) => attribute.name);
  async function fetchData() {
    console.log("loading tags");
    const response = await fetch(window.location.origin + "/api");
    const result = await response.json();
    tags = result;
    console.log(tags);
    console.log("loaded");
    tagsWithoutExamples = tags
      .filter((tag) => {
        let haveExamples = true;
        tag.attributes.forEach((attribute) => {
          if (attribute.examples.length == 0) {
            haveExamples = false;
          }
        });
        return !haveExamples;
      })
      .map((tag) => tag.tag);
    console.log(tagsWithoutExamples);
    loading = false;
  }
  onMount(fetchData);

  async function onSubmit() {
    const tag = tags[parseInt(selectedTag)].tag;
    const attr = selectedAttribute;
    const content = code;
    const resp = await fetch(`/api/${tag}/${attr}/examples`, {
      method: "POST",
      body: JSON.stringify({
        content,
      }),
    }).then((res) => res.json());
    alert("Tda Saved!!");
    fetchData();
    code = "";
    console.log(resp);
  }
</script>

<div class="w-screen min-h-screen flex justify-center items-center">
  {#if loading}
    <div class="btn loading shadow-xl">Loading...</div>
  {:else}
    <form
      class="card bg-neutral text-neutral-content shadow-xl m-4 w-9/12 md:w-6/12"
      on:submit|preventDefault={onSubmit}
    >
      <div class="card-body">
        <h2 class="card-title">Add Example 👀</h2>
        <select
          name="tag"
          class="select select-bordered w-full text-gray-200"
          bind:value={selectedTag}
        >
          <option value="" disabled selected hidden> select tag 👀 </option>
          {#each tags as tag, i (tag.id)}
            <option
              value={`${i}`}
              class={tagsWithoutExamples.includes(tag.tag)
                ? "bg-red-400"
                : "bg-green-400"}
            >
              {tag.tag}

              {tagsWithoutExamples.includes(tag.tag)
                ? " (missing examples 👀)"
                : " (examples complete 😃)"}
            </option>
          {/each}
        </select>

        <select
          name="attr"
          class="select select-bordered w-full  text-gray-200"
          bind:value={selectedAttribute}
        >
          <option value="" disabled selected hidden>
            select attribute 👀
          </option>
          {#each attributes as attr (attr.id)}
            <option
              value={attr.name}
              class={attributesWithoutExamples.includes(attr.name)
                ? "bg-red-400"
                : "bg-green-400"}
            >
              {attr.name}
              {attributesWithoutExamples.includes(attr.name)
                ? " (missing examples 👀)"
                : " (examples complete 😃)"}
            </option>
          {/each}
        </select>
        <div class="text-sm">
          {@html attributeDes === undefined
            ? tags[parseInt(selectedTag)].description
            : attributeDes}
        </div>

        <textarea
          required
          placeholder="write code here"
          class="textarea textarea-bordered"
          name="content"
          bind:value={code}
        />

        <iframe
          srcdoc={code}
          src="https://bing.com/"
          width="100%"
          height="200"
          title="coed"
          class="border-2 border-green-200 bg-white"
        />
        <button class="btn btn-accent" type="submit">Submit</button>
      </div>
    </form>
  {/if}
</div>
