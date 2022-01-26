import DoctorRobotNeck from "./characters/DoctorRobotNeck";

const characters = [
    DoctorRobotNeck
];


const getCharacter = code => {
    const character = characters.find(c => c.player.code.toUpperCase() == code.toUpperCase());
    return character;
};


export default {
    getCharacter
};


/*

#F72585
#B5179E
#7209B7
#560BAD
#480CA8
#3A0CA3
#3F37C9
#4361EE
#4895EF
#4CC9F0

#FFBE0B
#FB5607
#FF006E
#8338EC
#3A86FF

https://www.youtube.com/watch?v=D1-Diutxw9Y

*/