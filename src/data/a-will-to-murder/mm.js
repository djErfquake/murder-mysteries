// import DoctorRobotNeck from "./characters/DoctorRobotNeck";

const characters = [
    // DoctorRobotNeck
];


const getCharacter = code => {
    const character = characters.find(c => c.player.code.toUpperCase() == code.toUpperCase());
    return character;
};


export default {
    getCharacter
};


/*
#ef476f
#ffd166
#06d6a0
#118ab2
#073b4c

*/