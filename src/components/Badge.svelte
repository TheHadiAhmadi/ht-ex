<script>
  export let number;
</script>

{#if number}
<span class="absolute top-0 right-0 pb-0.5 transform translate-x-1/2 -translate-y-1/4 -mt-1 w-5 h-5 bg-red-500 rounded-full text-white font-bold shadow-xl">
    <span class="w-full h-full flex items-center justify-center">{number}</span >
</span>
{/if}
