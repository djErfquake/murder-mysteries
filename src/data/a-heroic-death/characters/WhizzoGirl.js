/*
smart, not suited for action, evil

An industrial accident left this qualified doctor with the neck of a robot. He’s the brains behind the group, and more involved with the planning side of the missions than the actual groundwork. He’s Captain Amazing!’s Second-in-Command. 

Superpower – He can rotate his neck 360 degrees and extend it by up to 3 meters, which allows him to see over things, but isn’t that great for crime-fighting. Hence the largely supportive role he plays in missions.
*/

const name = `WhizzoGirl`;
const tagline = `Longstanding Team Member`;
const seen = {
    seeYourself: `very media-savvy and a ‘proper’ superhero.`,
    othersSeeYou: `A very girly superhero – not very clever.`
};
const background = [
    `You are WhizzoGirl and you’re a lot more intelligent than anybody gives you credit for. But you don’t mind – playing the role of ‘dumb girl’ puts people off their guard. So you act as ditzy and as giggly as possible, while secretly planning your rise to glory…`,
    `You and Captain Amazing! are the only superheroes who seem to understand that being a superhero is not just about fighting, like some common thug – it’s really about providing hope for all the poor downtrodden people in CityVille. Just look at today’s papers: only you and Captain Amazing! have made it in there. The others don’t even get a mention – what good is fighting evil if nobody else knows about it?`,
    `Both you and Captain Amazing! agree that the rest of the squad is holding you back. Together, the two of you would make an ideal superhero team. You don’t need the rest of the squad – the Captain can do the actual crime-fighting, while you can look good in front of the cameras. So you and Captain Amazing! have decide to leave the squad and strike out on your own. You’ve not told anyone yet – Captain Amazing! will decide the best time to tell the rest of the squad.`,
    `The main problem right now is that you’re all trapped in the base together. The “world in danger” warning light is flashing, and you and Captain Amazing! need to deal with the peril (whatever it is) as soon as possible. If you don’t, the people of CityVille may lose faith in you and Captain Amazing! and you can’t have that at this crucial stage! You really need to help find the computer startup code to unlock the base.`,
    `Bernard’s death is a bit of a mystery, though – although you don’t see why it should remain much of a mystery for long. Everyone knows that Shaman can talk to the dead. Shaman helped you contact the spirit of your dead hamster only last week; it was a very moving experience. Bernard’s spirit should be able to say how he died – mystery solved! InvisoGirl doesn’t believe in the occult, and keeps telling you it’s all a big fraud: but she’s totally wrong.`,
    `There’s another thing you want from Shaman (before you leave the squad). You’ve lived here in the base ever since you lost your parents, as a small child. You have vague memories of them (they were named Delilah and Amiability Finkle – your real name is Charity Finkle), but you can’t  remember very much, as you were very young when you last saw them. Maybe Shaman would have a Firewater vision for you? You remember a big fire at your house, and you think they both died in it – but who started the fire?`,
    `As part of your plan to go it alone with Captain Amazing!, you plan to discredit the other squad members and make them leave CityVille. You might even try and pin Bernard’s death on someone, if you think it will get them kicked out of the group! You’ve got a terrible hangover though, and you’re sure you’d be able to remember something about what happened to Bernard if you could only cure it…`,
    `Also you despise Bloody Mary and have been conducting a secret hate-campaign against her, writing nasty letters on your least favorite yellow notepaper. You’ve been secretly delighted when she’s complained furiously about it to everyone. You always act dumb though, so hopefully she won’t suspect you’d be devious enough!`
];
const goals = [
    { name: `Cure your hangover`, description: [`You can’t remember anything about last night – you think your hangover is to blame. If you can get rid of your hangover, you might be able to remember something about last night.` ]},
    { name: `Discredit the squad`, description: [`Find ways to discredit the other superheroes so that they have to leave the squad.` ]},
    { name: `Make sure that Shaman tries to contact Bernard’s spirit`, description: [`That ought to help find out what happened to poor Bernard – and if you can prove it was someone you don’t like, then even better! Maybe you can persuade Shaman to pin the blame on someone like Bloody Mary, regardless of who actually did it.` ]},
    { name: `Help find the code`, description: [`You can’t leave the base and save the world while you are stuck here in the base. So you need to help find the emergency startup code. It could be a public relations nightmare if you don’t escape in time!` ]},
    { name: `Uncover your past`, description: [`Speak to Shaman about learning about your past through a Firewater vision.` ]},
    { name: `Hatemail`, description: [`Make sure Bloody Mary doesn’t find out you sent it.` ]}
];
const others = [
    { name: `Captain Amazing!`, description: [`You won’t hear a bad word said about the Captain – he’s your closest friend and you always agree with him. Also, he is the only other person who knows your secret identity.`] },
    { name: `Shaman`, description: [`You’re really interested in the occult and you have a lot of respect for Shaman, who is always full of dignity and is clearly very talented. You believe in Shaman’s abilities, and hate the small-minded people (like InvisoGirl) who cast doubt on things they don’t fully understand.`] },
    { name: `Bloody Mary`, description: [`You hate Bloody Mary because she thinks she’s so much better than you. She patronizes you all the time.`] },
    { name: `Miguel`, description: [`Miguel is the cleaner, from Spain or somewhere. As English isn’t his first language, it’s best if you speak slowly and loudly to him so that he understands.`]},
    { name: `The Russian`, description: [`You’ve always had a talent for spotting journalists, even when they’re in disguise. ‘The Russian’ is actually a Parisian journalist known as ‘Red Sunset’. You’re not planning to tell anyone about it just yet, though, as The Russian might be an ally who will help you dig up dirt on the others!`]}
];

const tips = [
    `Persuade Shaman to have a Firewater vision about your parents’ death, and to contact Bernard’s spirit.`,
    `Talk to Captain Amazing! and The Russian about your plan to discredit the others and see if they’ll help you.`
];

// const abilities = [
//     { name: `Examine`, uses: -1, description: [`You have the knowledge and skills to examine a corpse and ascertain a cause and time of death. You may or may not choose to make the results public knowledge.`]},
//     { name: `Analyze`, uses: -1, description: [`Your robotic neck has many useful gadgets installed, including one that can tell you if a liquid is contaminated, and if so, what the contaminants are.`]},
//     { name: `Mind-Control-Ray`, uses: 5, description: [`From your neck you can shoot a ray which makes your victim either show you their Secret, give you an Item at random or perform a minor task for you (your choice). Takes fifteen minutes to recharge after use.`]},
// ];

const information = {
    secret: `You’ve been sending anonymous hatemail to Bloody Mary.`,
    information: `InvisoGirl is determined to prove that Shaman is a fraud.`
};

const player = {
    person: `Carolyn`,
    code: `PANDA`
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