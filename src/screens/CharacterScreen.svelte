<script>
    import Name from '../components/Character/Name.svelte';
    import SeenAs from '../components/Character/SeenAs.svelte';
    import Background from '../components/Character/Background.svelte';
    import Goals from '../components/Character/Goals.svelte';
    import Others from '../components/Character/Others.svelte';

    export let character;
</script>


<div class="character">
    <Name name={character.name} tagline={character.tagline} />
    <SeenAs seenAs={character.seen} />
    <Background background={character.background} />
    <Goals goals={character.goals} />
    <Others others={character.others} />
</div>


<style>
    .character {
        margin: auto;
        width: 80%;
        padding: 0;

        background-color: #fdfdfd;
        box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.5), 0 0px 0 1px rgba(10, 10, 10, 0.02);

        border-radius: 13px;

        margin-top: 10vh;
        margin-bottom: 5vh;
        padding-bottom: 15px;
    }
</style>