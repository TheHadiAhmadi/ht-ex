<script>
  import AttributesModal from "./AttributesModal.svelte";
  export let tag;
</script>

<tr class="hover:bg-gray-700 cursor-pointer transition-all duration-300">
  <td class="text-center">
    {tag.tag}
  </td>
  <td class="p-4">
    {tag?.description ?? "No description"}
  </td>
  <td>
    <AttributesModal {tag} />
  </td>
  <td class="p-4">
    <button class="btn  btn-wide shadow-xl"> Examples </button>
  </td>
</tr>
