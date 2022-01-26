<script>
    import Header from '../Header.svelte';

    export let background;
</script>


<div class="container">
    <Header header="Background" />
    {#each background as item}
    <p>{item}</p>
    {/each}
</div>


<style>
    .container {
        background-color: #480CA8;
        color: #fff;
        border-radius: 15px;
        margin: 15px;
        padding-left: 25px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        padding: 15px
    }

    .container:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    p {
        font-size: 1.5em;
    }
</style>