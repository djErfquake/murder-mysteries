<script>
    import Header from '../Header.svelte';

    export let goals;
</script>


<div class="container">
    <Header header="Goals" />
    {#each goals as goal}
        <div class="sub-header">{goal.name}</div>
        {#each goal.description as item}
            <p>{item}</p>
        {/each}
    {/each}
</div>


<style>
    .container {
        background-color: #560BAD;
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

    .sub-header {
        font-weight: 700;
        font-size: 2em;
        text-transform: uppercase;
        margin-top: 25px;
    }

    p {
        font-size: 1.5em;
        margin-top: 5px;
    }
</style>