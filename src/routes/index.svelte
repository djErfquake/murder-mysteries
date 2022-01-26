<script>
    import EnterCode from '../screens/EnterCodeScreen.svelte';

    let character = null;

    const gotCharacter = e => {
        character = e.detail;
        console.log("index gotCharacter", character);
    }

</script>

<div>
    {#if character}
    <div>Character's name is {character.name}</div>
    {:else}
    <EnterCode on:gotCharacter={gotCharacter}></EnterCode>
    {/if}
</div>

<style>
    :global(body) {
        /* background-color: #ededed;
        background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm20 0a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM10 37a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm10-17h20v20H20V20zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%23073b4c' fill-opacity='0.17' fill-rule='evenodd'/%3E%3C/svg%3E"); */
        background-color: #0d0d0d;
    
        margin: 0;
        font-family: 'Poppins', Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #333;
    }

</style>