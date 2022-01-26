/*
smart, not suited for action, evil

An industrial accident left this qualified doctor with the neck of a robot. He’s the brains behind the group, and more involved with the planning side of the missions than the actual groundwork. He’s Captain Amazing!’s Second-in-Command. 

Superpower – He can rotate his neck 360 degrees and extend it by up to 3 meters, which allows him to see over things, but isn’t that great for crime-fighting. Hence the largely supportive role he plays in missions.
*/

const name = `Doctor Robot-Neck`;
const tagline = `Second-in-Command`;
const seen = {
    seeYourself: `The brains behind the group.`,
    othersSeeYou: `Very serious, but usually quite genial too.`
};
const background = [
    `You are Doctor Robot-Neck, Captain Amazing!’s second-in-command. You’re a fountain of knowledge on most academic subjects, but slightly absent-minded when it comes to the more practical, everyday aspects of life. (Thank goodness you’ve had Bernard to handle that kind of thing!) You’re generally quite harmless though.`,
    `Well, that’s not entirely true, as you have a secret past that you’d rather didn’t come to light. Your name was Amiability Finkle, and back when genetic engineering was popular you used to experiment on people and animals (all in the name of science of course, but the public never understands). You had a secret laboratory on the outskirts of CityVille where you were conducting half-human half-animal experiments.`,
    `Then, ten years ago, it all went wrong when one of them escaped – the creature now known as the supervillain ReptoMan! When he escaped he took his revenge by “experimenting” on you – and leaving you with the neck of a robot so you’d be a freak too. You told people it was an industrial accident, as you didn’t want to admit the truth.`,
    `Soon after that, ReptoMan started terrorising CityVille. One day, he ordered his second-in-command The Doom Lord to set fire to your house while you were at the lab. Your wife Delilah didn’t survive the blaze, and your young daughter Charity was left motherless. That’s when you knew you had to stop ReptoMan. It quickly became an obsession.`,
    `You changed your name to Doctor Robot-Neck and joined Captain Amazing!’s squad. You moved your laboratory into the squad’s base before the Doom Lord could burn that down too, and you have been trying to engineer ReptoMan’s capture ever since. Now that he has finally been caught, you feel that you have repaid your debt to society and plan to retire to Hawaii with your life savings. You’d have liked to get The Doom Lord too, but you’ve never been able to track him down.`,
    `Your daughter Charity came with you to the squad: to make sure she was eligible, you exposed her to special radiation in your lab to make her fly, and changed her name to WhizzoGirl. She was too young to remember it all, and doesn’t know she is even related to you – you don’t feel she’d be safe if ReptoMan or The Doom Lord found out she was your daughter.`,
    `Puss-in-Boots is another of your experiments. Puss escaped from the lab as a kitten fifteen years ago, before your ‘accident’, so hopefully shouldn’t recognize you. As none of the other kittens in the litter survived, you wouldn’t be surprised if Puss is out for revenge. So obviously you keep your true identity to yourself.`,
    `Since joining the squad you’ve kept up the experiments (although you don’t experiment on animal-human hybrids any more, of course). You’ve been working on a way to solve global warming (which ReptoMan has been accelerating, as reptiles like hot climates) using a small rocket-launched satellite. You had planned to launch the satellite last night, after the party, but things haven’t really worked out.`,
    `You could still launch the satellite from within the base (even though it’s locked down), but you have two slight problems. The first is that the satellite appears to have gone missing. The second is that the duct in the ceiling of the lounge that you could launch the satellite through has a grate over it, which would need to be opened first – but it's too high to reach, even with your extendable neck…`,
    `As for last night’s party, it’s clear to you that everyone has been drugged: as everyone appears to have a hangover, and nobody can remember much about last night. Clearly you need to apply some scientific rigor into finding out what happened last night (including what happened to poor Bernard, what happened to the computer and what happened to your satellite). It would be a lot easier if you didn’t also have a hangover!`
];
const goals = [
    { name: `Last Night`, description: [`Find out what happened last night – apply some scientific thinking to the problem.` ]},
    { name: `The computer code`, description: [`Find the code that will restart the computer so that you can unlock the base, leave and retire to Hawaii with your life savings.` ]},
    { name: `Incriminating evidence`, description: [`Find your satellite and use it to reverse global warming.` ]},
    { name: `Look after Charity`, description: [`Protect and help your daughter Charity at all costs, even above your own goals. Don’t let anyone know you’re her father – it’s just too dangerous to risk.` ]},
];
const others = [
    { name: `WhizzoGirl`, description: [`WhizzoGirl is also your daughter Charity Finkle, but she doesn’t know that you’re her father. You’re surprised at how little she’s turned out like you: she’s empty-headed and not much use in a fight, being more interested in clothes, makeup and fame. But she is your daughter and you love her regardless.`] },
    { name: `Captain Amazing!`, description: [`The Captain has proved very useful in getting ReptoMan incarcerated, and you are pleased with him much as you would be with a dog who has just done a neat trick. He is also very useful in drawing attention away from you, as he always steals the limelight.`] },
    { name: `Shaman`, description: [`As you are a man of science, you’re not sure about Shaman’s claims to be able to talk to the dead. Perhaps that claim can be tested on Bernard. If it works, it might even reveal something about Bernard’s unfortunate death.`] },
    { name: `Bloody Mary`, description: [`Bloody Mary is brutish and uncultured, but a reliable team member and quite intelligent. One of her famous potions might help you remember what happened last night.`] },
    { name: `S.`, description: [`S. is a new member of the squad and only joined yesterday. It seems suspicious that Bernard died on the day that S. joined the squad.`]}
];

const tips = [
    `Ask Bloody Mary to make you a hangover cure, to help you remember what happened last night.`,
    `Have a look at Bernard’s body for clues.`
];

// const abilities = [
//     { name: `Examine`, uses: -1, description: [`You have the knowledge and skills to examine a corpse and ascertain a cause and time of death. You may or may not choose to make the results public knowledge.`]},
//     { name: `Analyze`, uses: -1, description: [`Your robotic neck has many useful gadgets installed, including one that can tell you if a liquid is contaminated, and if so, what the contaminants are.`]},
//     { name: `Mind-Control-Ray`, uses: 5, description: [`From your neck you can shoot a ray which makes your victim either show you their Secret, give you an Item at random or perform a minor task for you (your choice). Takes fifteen minutes to recharge after use.`]},
// ];

const information = {
    secret: `Your real name is Amiability Finkle, and you created ReptoMan!`,
    information: `Puss-in-Boots appears to be the result of the same sort of genetic manipulation that created ReptoMan.`
};

const player = {
    person: `Calvin`,
    code: `WHALE`
};

export default {
    player,
    name,
    tagline,
    seen,
    background,
    goals,
    others,
    tips,
    // abilities,
    information
};