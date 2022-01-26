<script>
    export let seenAs;
</script>


<div class="container">
    <div class="seen-section">
        <div class="header">How you see yourself</div>
        <p>{seenAs.seeYourself}</p>
    </div>
    <div class="seen-section">
        <div class="header">How others see you</div>
        <p>{seenAs.othersSeeYou}</p>
    </div>
</div>


<style>
    .container {
        background-color: #3A0CA3;
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

    .header {
        font-size: 2.5em;
        font-weight: 700;
    }

    p {
        font-size: 1.5em;
        margin-top: 5px;
    }
</style>