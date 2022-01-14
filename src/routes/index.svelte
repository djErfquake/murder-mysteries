<script>
    import { browser } from '$app/env'

    import EnterCode from '../components/EnterCode.svelte';

    let character = null;
    let code = null;
    let error = null;
    if (browser) document.body.classList.toggle('center', true);

    const getCharacter = async code => {
        error = null;
        const res = await fetch(`character/${code}`);
        if (res.ok) {
            character = await res.json();
            if (browser) document.body.classList.toggle('center', false);
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
    {#if character}
    <div>Character's name is {character.name}</div>
    {:else}
    <EnterCode on:codeEntered={codeEntered}></EnterCode>
    {/if}
    {#if error}
    {error}
    {/if}
</div>

<style>
    :global(body) {
        background-color: #ededed;
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23073b4c' fill-opacity='0.17' fill-rule='evenodd'/%3E%3C/svg%3E");
    }

    .center {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>