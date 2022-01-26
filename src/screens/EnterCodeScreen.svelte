<script>
    import EnterCode from '../components/EnterCode.svelte';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    const gotCharacter = e => {
        dispatch('gotCharacter', e.detail);
    }
</script>

<div class="modal">
    <EnterCode on:gotCharacter={gotCharacter}></EnterCode>
</div>

<style>

    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;

        background: rgba(0, 0, 0, 0.66);

        display: flex;
        justify-content: center;
        align-items: center;
    }


</style>