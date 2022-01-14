<script>
    let character = null;
    let error = null;

    const getCharacter = async code => {
        error = null;
        const res = await fetch(`character/${code}`);
        if (res.ok) {
            character = await res.json();
        }
        else {
            error = "Invalid Code";
        }
    }
</script>

<div>
    {#if character}
    <div>Character's name is {character.name}</div>
    {:else}
    <div on:click={() => getCharacter('WHALE')}>Click Here!</div>
    {/if}
    {#if error}
    {error}
    {/if}
</div>