<script>
    export let name;
    export let tagline;
</script>


<div class="container">
    <div class="name-container section-container">
        <div class="preName">You are</div>
        <div class="name">{name}</div>
        <div class="tagline">{tagline}</div>
    </div>
    
</div>


<style>
    .container {
        font-weight: 600;
    }

    .section-container {
        padding: 10px;
    }

    .preName {
        font-size: 6.5em;
    }

    .name {
        font-size: 14em;
    }

    .tagline {
        font-size: 5em;
    }
</style>