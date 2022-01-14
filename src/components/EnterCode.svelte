<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let code;

    function codeEntered() {
        dispatch('codeEntered', code);
    }
</script>


<div class="box">
    <div class="instructions">Enter your code to view your character's details</div>
    <div class="code-entry">
        <input placeholder="CODE" type="text" bind:value={code}/>
        <div class="button" on:click={codeEntered}>ENTER</div>
    </div>
</div>


<style>
    input {
        border: none;
        border-bottom: 4px solid #073b4c;
        padding-left: 8px;
        font-size: 1.5em;
        width: 70%;
        margin: 0 5px;
    }

    input:focus {
        outline: none;
    }

    .box {
        width: 60vw;
        border-color: #073b4c;
        border-radius: 10px;
        background-color: #118ab2;
        color: #fff;
        font-size: 4em;
    }

    .instructions {
        border-radius: 10px 10px 0 0;
        background-color: #073b4c;
        padding: 15px;
    }
</style>