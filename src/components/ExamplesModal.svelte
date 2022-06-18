<script>
  import Modal from "./Modal.svelte";
  import {
    Button,
    Icon,
    TabContent,
    TabPane,
    Table,
    TableHeader,
    TableRow,
    TextArea,
    Cell,
  } from "@ubeac/svelte-components";
  import AddExample from "../routes/add-example.svelte";
  export let tag;

  let dirty = [];

  let adding = false;
  let newExample = {};

  function addNewExample() {
    adding = true;
    console.log("new Example");
  }
  async function add(attribute) {
    adding = false;
    const res = await fetch(`/api/${tag.tag}/${attribute.name}/examples`, {
      method: "POST",
      body: JSON.stringify({ cotent: newExample.content }),
    }).then((res) => res.json());

    if (res.status === 200) {
      attribute.examples = [...attribute.examples, res.body];
    }
  }

  async function updateExample(attribute, id) {
    console.log("update example " + id);
    const res = await fetch(
      `/api/${tag.tag}/${attribute.name}/examples/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ content: newExample.content }),
      }
    ).then((res) => res.json());
  }

  function setDirty(id) {
    dirty = [...dirty, id];
  }
</script>

<Modal>
  <h3 class="text-lg font-bold">Examples</h3>

  <TabContent class="w-full border border-black" boxed vertical>
    {#each tag.attributes as attribute}
      <TabPane class="w-full" name={attribute.name}>
        <!-- {JSON.stringify(attribute.examples)} -->
        <Table>
          <TableHeader slot="header">
            <Cell>Code</Cell>
            <Cell>Output</Cell>
            <Cell class="w-0">
              {#if adding}
                <Button
                  on:click={() => {
                    adding = false;
                    newExample = {};
                  }}>Cancel</Button
                >
              {:else}
                <Button on:click={addNewExample}>
                  <Icon icon="mdi:plus" />
                  Add
                </Button>
              {/if}
            </Cell>
          </TableHeader>

          {#each attribute.examples as example}
            <TableRow>
              <Cell>
                <textarea
                  on:input={() => setDirty(example.id)}
                  class="w-full min-h-24 textarea textarea-bordered"
                  bind:value={example.content}
                />
              </Cell>
              <Cell>
                <div class="w-full" innerHTML={example.content} />
              </Cell>
              <Cell>
                <Button
                  on:click={() => updateExample(attribute, example.id)}
                  disabled={!dirty.includes(example.id)}>Update</Button
                >
              </Cell>
            </TableRow>
          {/each}
          {#if adding}
            <TableRow>
              <Cell>
                <textarea
                  class="w-full min-h-24 textarea textarea-bordered"
                  bind:value={newExample.content}
                />
              </Cell>
              <Cell>
                <div class="w-full" innerHTML={newExample.content} />
              </Cell>
              <Cell>
                <Button on:click={() => add(attribute)}>
                  <Icon icon="mdi:plus" />

                  Add
                </Button>
              </Cell>
            </TableRow>
          {/if}
        </Table>
      </TabPane>
    {/each}
  </TabContent>
</Modal>
