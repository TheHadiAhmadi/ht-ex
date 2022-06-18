<script>
  import uniqid from "uniqid";
  const id = uniqid();
  let show = false;
</script>

<!-- The button to open modal -->
<label for={id} class="btn btn-wide modal-button">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" {id} class="modal-toggle" bind:checked={show} />
{#if show}
  <div class="modal backdrop-filter backdrop-blur-sm">
    <div class="modal-box relative w-11/12 max-w-5xl">
      <label for={id} class="btn btn-sm btn-circle absolute right-2 top-2"
        >✕</label
      >
      <slot />
    </div>
  </div>
{/if}
