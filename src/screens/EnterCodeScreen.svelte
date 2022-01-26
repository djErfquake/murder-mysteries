<script>
    import EnterCode from '../components/EnterCode.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const gotCharacter = e => {
        dispatch('gotCharacter', e.detail);
    }
</script>

<div>
    <EnterCode on:gotCharacter={gotCharacter}></EnterCode>
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