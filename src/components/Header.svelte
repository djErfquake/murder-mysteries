<script>
    export let header;
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:900i&display=swap" rel="stylesheet">
</svelte:head>


<div>{header}</div>


<style>
    div {
        text-align: center;
        font-family: 'Montserrat', sans-serif;

        font-weight: 700;
        font-size: 3em;
        text-transform: uppercase;

        letter-spacing:0.1em;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        text-shadow: 3px 3px #ff1f8f, 8px 8px #000000;
        /* text-shadow: 4px 4px #FFBE0B, 10px 10px #000000; */
    }
</style>