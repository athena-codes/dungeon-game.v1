const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const handleFirstQuestion = (name) => {
    rl.question(`𝚘𝚔𝚊𝚢, ${name} 𝚊𝚛𝚎 𝚢𝚘𝚞 𝚛𝚎𝚊𝚍𝚢?`, handleSecondQuestion)
}

const handleSecondQuestion = (name) => {
    rl.question(`${name}, 𝚠𝚘𝚞𝚕𝚍 𝚢𝚘𝚞 𝚕𝚒𝚔𝚎 𝚝𝚘 𝚎𝚗𝚝𝚎𝚛?`, enterDungeon)
}

const enterDungeon = (input) => {
    if (input === "yes") {
        console.log("𝚕𝚎𝚝'𝚜 𝚋𝚎𝚐𝚒𝚗...")
    } else {
        console.log("𝚕𝚘𝚘𝚔𝚜 𝚕𝚒𝚔𝚎 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚗𝚘 𝚌𝚑𝚘𝚒𝚌𝚎")
    }
}

rl.question(`     ᗯ E ᒪ ᑕ O ᗰ E  T O  T ᕼ E  ᗪ ᑌ ᑎ G E O ᑎ ԅ(◉ ෴ ◉ ԅ)
        𝚎𝚗𝚝𝚎𝚛 𝚙𝚕𝚊𝚢𝚎𝚛 𝚗𝚊𝚖𝚎 𝚝𝚘 𝚋𝚎𝚐𝚒𝚗...`, handleFirstQuestion)
