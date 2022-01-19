<script>
    import EnterCode from '../components/EnterCode.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let character = null;
    let error = null;

    const getCharacter = async code => {
        error = null;
        const res = await fetch(`character/${code}`);
        if (res.ok) {
            let character = await res.json();
            dispatch('gotCharacter', character);
        }
        else {
            error = "Invalid Code";
        }
    }

    const codeEntered = e => {
        getCharacter(e.detail);
    }
</script>

<div>
    {#if !character}
    <EnterCode on:codeEntered={codeEntered}></EnterCode>
    {/if}
    {#if error}
    {error}
    {/if}
</div>

<style>
    :global(body) {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>