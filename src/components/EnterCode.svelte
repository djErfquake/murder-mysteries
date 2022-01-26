<script>
    import Button from './Button.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let code;
    let error = null;

    function inputClicked() {
        error = null;
    }

    function codeEntered() {
        fetchCharacter();
    }

    const fetchCharacter = async () => {
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

</script>


<div class="code-entry">
    <div class="instructions">Enter your code to view your character's details</div>
    <div class="code">
        <input placeholder="CODE" type="text" bind:value={code} on:click={inputClicked}/>
    </div>
    <div class="button" on:click={codeEntered}>
        <Button text="ENTER"></Button>
    </div>
    {#if error}
    <div class="error">{error}</div>    
    {/if}
</div>


<style>
    input {
        border: none;
        border-bottom: 4px solid #FFBE0B;
        padding-left: 8px;
        font-size: 1.5em;
        width: 70%;
        margin: 10px;
    }

    input:focus {
        outline: none;
    }

    .code-entry {
        width: 60vw;
        font-size: 4em;
        color: #fff;
    }

    .code {
        
        /* border-color: #4CC9F0;
        border-radius: 10px; */
        background-color: #4CC9F0;
        margin-bottom: 20px;
        border-radius: 0 0 10px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .instructions {
        border-radius: 10px 10px 0 0;
        background-color: #FF006E;
        padding: 15px;
        text-transform: uppercase;
        font-weight: 600;
    }

    .error {
        margin-top: 15px;
    }
</style>