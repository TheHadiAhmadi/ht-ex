
<script>
    export let value;
    let className;
    export {className as class};
</script>

<pre contenteditable bind:textContent={value} class="mockup-code {className}"/>

