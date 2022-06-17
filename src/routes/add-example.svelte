<script>

    async function onSubmit({target}) {
        const tag = target.tag.value
        const attr = target.attr.value
        const content = target.content.value
        const resp = await fetch(`/api/${tag}/${attr}/examples`, {
            method: "POST",
            body: JSON.stringify({
                content
            })
        }).then(res => res.json())
        console.log(resp)
    }

</script>

<form class="card border border-primary m-4" on:submit|preventDefault={onSubmit}>
    <div class="card-body">
        <h2 class="card-title">Add Example</h2>

    <label required class="form-control">
        <span class="label-text">tag</span>
         <input required placeholder="a" class="input input-bordered" name="tag"/>
    </label>
    <label required class="form-control">
        <span class="label-text">attribute</span>

        <input required placeholder="href" class="input input-bordered" name="attr"/>
    </label>
    <label required class="form-control">
        <span class="label-text">content:</span>
        <textarea required placeholder='<a href="https://google.com">Google</a>' class="textarea textarea-bordered" name="content"/>
    </label>
    <button class="btn" type="submit">Submit</button>
</div>

</form>