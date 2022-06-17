<script>
    import AttributesTable from "./AttributesTable.svelte";
    export let tag ;
</script>

<tr class="align-top">
    <td class="text-center">
        {tag.tag}
    </td>
    <td>
        {tag?.description ?? 'No description'}
    </td>
    <!-- <td>
        <AttributesTable attributes={tag.attributes?.localAttributes} />
    </td> -->
    <td>
        <button>
            Atrribute Details
        </button>
    </td>
    <td>
        <button>
            Examples
        </button>
    </td>
</tr>