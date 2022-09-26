const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const ac = new AbortController();
const signal = ac.signal;

const players =  {
     player1: "trixie",
     player2: "hunter"
 }

const controls = ['r', 'l', 'y', 'n']
let playerArr = Object.values(players)


const handleFirstQuestion = (name) => {
    rl.question(`𝙴𝚗𝚝𝚎𝚛 𝚝𝚑𝚎 𝚍𝚞𝚗𝚐𝚎𝚘𝚗 𝚊𝚗𝚍 𝚖𝚎𝚎𝚝 𝚢𝚘𝚞𝚛 𝚏𝚊𝚝𝚎

                     𝚠𝚒𝚕𝚕 𝚢𝚘𝚞 𝚖𝚊𝚔𝚎 𝚒𝚝 𝚝𝚘 𝚝𝚑𝚎 𝚘𝚝𝚑𝚎𝚛 𝚜𝚒𝚍𝚎?

                     𝚜𝚎𝚎𝚒𝚗𝚐 𝚝𝚑𝚒𝚜 𝚜𝚢𝚖𝚋𝚘𝚕 𝚖𝚎𝚊𝚗𝚜 𝚝𝚘 𝚙𝚛𝚎𝚜𝚜 '𝚎𝚗𝚝𝚎𝚛' 𝚝𝚘 𝚌𝚘𝚗𝚝𝚒𝚗𝚞𝚎
                                      →
                                       𝚐𝚘 𝚊𝚑𝚎𝚊𝚍, 𝚝𝚛𝚢`, { signal }, handleSecondQuestion)
}


const handleSecondQuestion = (input) => {
    rl.question(`𝙲𝚑𝚘𝚘𝚜𝚎 𝚢𝚘𝚞𝚛 𝚙𝚕𝚊𝚢𝚎𝚛...
                             ${players.player1}
                             𝚘𝚛
                             ${players.player2}

                             𝙴𝚗𝚝𝚎𝚛 𝚌𝚑𝚘𝚒𝚌𝚎: `, (choice) => {
        if (choice === playerArr[0]) {
            rl.question(`${choice} 𝚒𝚜 𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎.

     𝚢𝚘𝚞 𝚏𝚒𝚛𝚜𝚝 𝚍𝚎𝚜𝚌𝚎𝚗𝚍 𝚊𝚗 𝚎𝚎𝚛𝚒𝚕𝚢 𝚌𝚘𝚗𝚜𝚝𝚛𝚞𝚌𝚝𝚎𝚍 𝚠𝚘𝚘𝚍𝚎𝚗 𝚜𝚝𝚊𝚒𝚛𝚌𝚊𝚜𝚎,
     𝚌𝚛𝚎𝚊𝚔𝚒𝚗𝚐 𝚠𝚒𝚝𝚑 𝚎𝚊𝚌𝚑 𝚜𝚝𝚎𝚙 𝚘𝚗 𝚝𝚑𝚎 𝚠𝚊𝚢 𝚍𝚘𝚠𝚗

                      ￣￣┗┓
                      ￣￣￣┗┓
                      ￣￣￣￣┗┓
                      ￣￣￣￣￣┗┓  → `  , handleThirdQuestion)
        }
        if (choice === playerArr[1]) {
            rl.question(`${choice} 𝚒𝚜 𝚢𝚘𝚞𝚛 𝚗𝚊𝚖𝚎.

        𝚢𝚘𝚞 𝚏𝚒𝚛𝚜𝚝 𝚍𝚎𝚜𝚌𝚎𝚗𝚍 𝚊𝚗 𝚎𝚎𝚛𝚒𝚕𝚢 𝚌𝚘𝚗𝚜𝚝𝚛𝚞𝚌𝚝𝚎𝚍 𝚠𝚘𝚘𝚍𝚎𝚗 𝚜𝚝𝚊𝚒𝚛𝚌𝚊𝚜𝚎,
        𝚌𝚛𝚎𝚊𝚔𝚒𝚗𝚐 𝚠𝚒𝚝𝚑 𝚎𝚊𝚌𝚑 𝚜𝚝𝚎𝚙 𝚘𝚗 𝚝𝚑𝚎 𝚠𝚊𝚢 𝚍𝚘𝚠𝚗

                      ￣￣┗┓
                      ￣￣￣┗┓
                      ￣￣￣￣┗┓
                      ￣￣￣￣￣┗┓  →`, handleFourthQuestionH)

        } else if (choice !== playerArr[0] || playerArr[1]) {
            rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚙𝚕𝚊𝚢𝚎𝚛 𝚗𝚊𝚖𝚎 →
            `, handleSecondQuestion)
        }
   })
}


const handleThirdQuestion = (input) => {
    rl.question(`𝙰𝚏𝚝𝚎𝚛 𝚖𝚊𝚔𝚒𝚗𝚐 𝚢𝚘𝚞𝚛 𝚠𝚊𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚋𝚘𝚝𝚝𝚘𝚖 𝚘𝚏 𝚝𝚑𝚎 𝚜𝚝𝚊𝚒𝚛𝚌𝚊𝚜𝚎, 𝚢𝚘𝚞 𝚌𝚘𝚖𝚎 𝚝𝚘 𝚊 𝚍𝚎𝚊𝚍𝚜𝚝𝚘𝚙.
                 𝚈𝚘𝚞𝚛 𝚌𝚑𝚘𝚒𝚌𝚎𝚜 𝚊𝚛𝚎 𝚝𝚘 𝚎𝚒𝚝𝚑𝚎𝚛 𝚝𝚞𝚛𝚗 𝚛𝚒𝚐𝚑𝚝 𝚘𝚛 𝚕𝚎𝚏𝚝.

      𝙲𝚑𝚘𝚘𝚜𝚎 𝚢𝚘𝚞𝚛 𝚙𝚊𝚝𝚑 𝚞𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜:   𝚛𝚒𝚐𝚑𝚝: r   𝚕𝚎𝚏𝚝:  l
                           `, (input) => {
        if (input === controls[0]) {
            rl.question(`𝚈𝚘𝚞 𝚠𝚊𝚕𝚔 𝚗𝚘 𝚖𝚘𝚛𝚎 𝚝𝚑𝚊𝚗 𝚊 𝚏𝚎𝚠 𝚜𝚝𝚎𝚙𝚜 𝚋𝚎𝚏𝚘𝚛𝚎 𝚛𝚎𝚊𝚌𝚑𝚒𝚗𝚐 𝚊 𝚍𝚘𝚘𝚛

            𝚈𝚘𝚞 𝚝𝚞𝚛𝚗 𝚝𝚑𝚎 𝚑𝚊𝚗𝚍𝚕𝚎 𝚊𝚗𝚍 𝚠𝚊𝚕𝚔 𝚝𝚑𝚛𝚘𝚞𝚐𝚑.. →

            `, handleSixthQuestionT)
        }
        if (input === controls[1]) {
            rl.question(`𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚊 𝚕𝚘𝚗𝚐 𝚑𝚊𝚕𝚕𝚠𝚊𝚢, 𝚜𝚘 𝚍𝚊𝚛𝚔 𝚝𝚑𝚎𝚛𝚎 𝚒𝚜 𝚗𝚘 𝚎𝚗𝚍 𝚒𝚗 𝚜𝚒𝚐𝚑𝚝.
                         𝚈𝚘𝚞 𝚙𝚛𝚘𝚌𝚎𝚎𝚍 𝚍𝚘𝚠𝚗 𝚒𝚝, 𝚞𝚗𝚜𝚞𝚛𝚎 𝚘𝚏 𝚠𝚑𝚊𝚝 𝚝𝚘 𝚎𝚡𝚙𝚎𝚌𝚝 →
                                                                    `, handleSeventhQuestionT)
        }
        else if (input !== controls[0] || controls[1]) {
             rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍, 𝚎𝚒𝚝𝚑𝚎𝚛 r 𝚘𝚛 l →
`, handleThirdQuestion)
        }
    })
 }


const handleFourthQuestionT = (name) => {
    rl.question(`𝙰𝚏𝚝𝚎𝚛 𝚖𝚊𝚔𝚒𝚗𝚐 𝚢𝚘𝚞𝚛 𝚠𝚊𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚋𝚘𝚝𝚝𝚘𝚖 𝚘𝚏 𝚝𝚑𝚎 𝚜𝚝𝚊𝚒𝚛𝚌𝚊𝚜𝚎, 𝚢𝚘𝚞 𝚌𝚘𝚖𝚎 𝚝𝚘 𝚊 𝚍𝚎𝚊𝚍𝚜𝚝𝚘𝚙.
                 𝚈𝚘𝚞𝚛 𝚌𝚑𝚘𝚒𝚌𝚎𝚜 𝚊𝚛𝚎 𝚝𝚘 𝚎𝚒𝚝𝚑𝚎𝚛 𝚝𝚞𝚛𝚗 𝚛𝚒𝚐𝚑𝚝 𝚘𝚛 𝚕𝚎𝚏𝚝.

      𝙲𝚑𝚘𝚘𝚜𝚎 𝚢𝚘𝚞𝚛 𝚙𝚊𝚝𝚑 𝚞𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜:   𝚛𝚒𝚐𝚑𝚝: r   𝚕𝚎𝚏𝚝:  l
                           `, (input) => {
        if (input === controls[0]) {
            rl.question(`𝚈𝚘𝚞 𝚠𝚊𝚕𝚔 𝚗𝚘 𝚖𝚘𝚛𝚎 𝚝𝚑𝚊𝚗 𝚊 𝚏𝚎𝚠 𝚜𝚝𝚎𝚙𝚜 𝚋𝚎𝚏𝚘𝚛𝚎 𝚛𝚎𝚊𝚌𝚑𝚒𝚗𝚐 𝚊 𝚍𝚘𝚘𝚛

            𝚈𝚘𝚞 𝚝𝚞𝚛𝚗 𝚝𝚑𝚎 𝚑𝚊𝚗𝚍𝚕𝚎 𝚊𝚗𝚍 𝚠𝚊𝚕𝚔 𝚝𝚑𝚛𝚘𝚞𝚐𝚑.. →

            `, handleSixthQuestionT)
        }
        if (input === controls[1]) {
            rl.question(`
              𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚊 𝚕𝚘𝚗𝚐 𝚑𝚊𝚕𝚕𝚠𝚊𝚢, 𝚜𝚘 𝚍𝚊𝚛𝚔 𝚝𝚑𝚎𝚛𝚎 𝚒𝚜 𝚗𝚘 𝚎𝚗𝚍 𝚒𝚗 𝚜𝚒𝚐𝚑𝚝.
                         𝚈𝚘𝚞 𝚙𝚛𝚘𝚌𝚎𝚎𝚍 𝚍𝚘𝚠𝚗 𝚒𝚝, 𝚞𝚗𝚜𝚞𝚛𝚎 𝚘𝚏 𝚠𝚑𝚊𝚝 𝚝𝚘 𝚎𝚡𝚙𝚎𝚌𝚝. → `, handleSeventhQuestionT)
        }
        else if (input !== controls[0] || controls[1]) {
            rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍, 𝚎𝚒𝚝𝚑𝚎𝚛 r 𝚘𝚛 l →
`, handleThirdQuestion)
        }
    })
}
const handleFourthQuestionH = (name) => {
    rl.question(`𝙰𝚏𝚝𝚎𝚛 𝚖𝚊𝚔𝚒𝚗𝚐 𝚢𝚘𝚞𝚛 𝚠𝚊𝚢 𝚝𝚘 𝚝𝚑𝚎 𝚋𝚘𝚝𝚝𝚘𝚖 𝚘𝚏 𝚝𝚑𝚎 𝚜𝚝𝚊𝚒𝚛𝚌𝚊𝚜𝚎, 𝚢𝚘𝚞 𝚌𝚘𝚖𝚎 𝚝𝚘 𝚊 𝚍𝚎𝚊𝚍𝚜𝚝𝚘𝚙.
                 𝚈𝚘𝚞𝚛 𝚌𝚑𝚘𝚒𝚌𝚎𝚜 𝚊𝚛𝚎 𝚝𝚘 𝚎𝚒𝚝𝚑𝚎𝚛 𝚝𝚞𝚛𝚗 𝚛𝚒𝚐𝚑𝚝 𝚘𝚛 𝚕𝚎𝚏𝚝.

      𝙲𝚑𝚘𝚘𝚜𝚎 𝚢𝚘𝚞𝚛 𝚙𝚊𝚝𝚑 𝚞𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜:   𝚛𝚒𝚐𝚑𝚝: r   𝚕𝚎𝚏𝚝:  l
                           `, (input) => {
        if (input === controls[0]) {
            rl.question(`𝚈𝚘𝚞 𝚠𝚊𝚕𝚔 𝚗𝚘 𝚖𝚘𝚛𝚎 𝚝𝚑𝚊𝚗 𝚊 𝚏𝚎𝚠 𝚜𝚝𝚎𝚙𝚜 𝚋𝚎𝚏𝚘𝚛𝚎 𝚛𝚎𝚊𝚌𝚑𝚒𝚗𝚐 𝚊 𝚍𝚘𝚘𝚛

            𝚈𝚘𝚞 𝚝𝚞𝚛𝚗 𝚝𝚑𝚎 𝚑𝚊𝚗𝚍𝚕𝚎 𝚊𝚗𝚍 𝚠𝚊𝚕𝚔 𝚝𝚑𝚛𝚘𝚞𝚐𝚑.. →

            `, handleSixthQuestionH)
        }
        if (input === controls[1]) {
            rl.question(`
              𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚊 𝚕𝚘𝚗𝚐 𝚑𝚊𝚕𝚕𝚠𝚊𝚢, 𝚜𝚘 𝚍𝚊𝚛𝚔 𝚝𝚑𝚎𝚛𝚎 𝚒𝚜 𝚗𝚘 𝚎𝚗𝚍 𝚒𝚗 𝚜𝚒𝚐𝚑𝚝.
                         𝚈𝚘𝚞 𝚙𝚛𝚘𝚌𝚎𝚎𝚍 𝚍𝚘𝚠𝚗 𝚒𝚝, 𝚞𝚗𝚜𝚞𝚛𝚎 𝚘𝚏 𝚠𝚑𝚊𝚝 𝚝𝚘 𝚎𝚡𝚙𝚎𝚌𝚝. → `, handleSeventhQuestionH)
        }
        else if (input !== controls[0] || controls[1]) {
            rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍, 𝚎𝚒𝚝𝚑𝚎𝚛 r 𝚘𝚛 l →
`, handleThirdQuestion)
        }
    })
}



const handleSixthQuestionT = (input) => { rl.question(`
     𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚊 𝚖𝚊𝚗 𝚋𝚎𝚑𝚒𝚗𝚍 𝚝𝚑𝚎 𝚍𝚘𝚘𝚛 𝚠𝚑𝚘 𝚠𝚒𝚕𝚕 𝚊𝚌𝚌𝚘𝚖𝚙𝚊𝚗𝚢 𝚢𝚘𝚞 𝚘𝚗 𝚢𝚘𝚞𝚛 𝚓𝚘𝚞𝚛𝚗𝚎𝚢.
               ______
             || _  _ ||
             ||| || |||
             |||_||_|||
             || _  _o||
             ||| || |||
             |||_||_|||      |﹋|
             ||______||     (҂'_')
                             <,︻╦╤─
                             |﹋|       𝙷𝚒𝚜 𝚗𝚊𝚖𝚎 𝚒𝚜 𝙱𝚒𝚕𝚕. →
                     `, handleEigthQuestionTrixie)
}

const handleSeventhQuestionT = (input) => {
 rl.question(`
      𝚈𝚘𝚞 𝚏𝚒𝚗𝚊𝚕𝚕𝚢 𝚊𝚙𝚙𝚛𝚘𝚊𝚌𝚑 𝚊 𝚍𝚘𝚘𝚛. 𝚈𝚘𝚞 𝚘𝚙𝚎𝚗 𝚝𝚑𝚎 𝚑𝚊𝚗𝚍𝚕𝚎 𝚊𝚗𝚍 𝚜𝚎𝚎 𝚠𝚑𝚊𝚝𝚜 𝚘𝚗 𝚝𝚑𝚎 𝚘𝚝𝚑𝚎𝚛 𝚜𝚒𝚍𝚎...
               ______
             || _  _ ||
             ||| || |||
             |||_||_|||
             || _  _o||
             ||| || |||
             |||_||_|||
             ||______||  → `, handleSixthQuestionT)
}
const handleSixthQuestionH = (input) => {
    rl.question(`
     𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚊 𝚖𝚊𝚗 𝚋𝚎𝚑𝚒𝚗𝚍 𝚝𝚑𝚎 𝚍𝚘𝚘𝚛 𝚠𝚑𝚘 𝚠𝚒𝚕𝚕 𝚊𝚌𝚌𝚘𝚖𝚙𝚊𝚗𝚢 𝚢𝚘𝚞 𝚘𝚗 𝚢𝚘𝚞𝚛 𝚓𝚘𝚞𝚛𝚗𝚎𝚢.
               ______
             || _  _ ||
             ||| || |||
             |||_||_|||
             || _  _o||
             ||| || |||
             |||_||_|||      |﹋|
             ||______||     (҂'_')
                             <,︻╦╤─
                             |﹋|       𝙷𝚒𝚜 𝚗𝚊𝚖𝚎 𝚒𝚜 𝙱𝚒𝚕𝚕. →
                     `, handleEigthQuestionHunter)
}

const handleSeventhQuestionH = (input) => {
    rl.question(`
      𝚈𝚘𝚞 𝚏𝚒𝚗𝚊𝚕𝚕𝚢 𝚊𝚙𝚙𝚛𝚘𝚊𝚌𝚑 𝚊 𝚍𝚘𝚘𝚛. 𝚈𝚘𝚞 𝚘𝚙𝚎𝚗 𝚝𝚑𝚎 𝚑𝚊𝚗𝚍𝚕𝚎 𝚊𝚗𝚍 𝚜𝚎𝚎 𝚠𝚑𝚊𝚝𝚜 𝚘𝚗 𝚝𝚑𝚎 𝚘𝚝𝚑𝚎𝚛 𝚜𝚒𝚍𝚎...
               ______
             || _  _ ||
             ||| || |||
             |||_||_|||
             || _  _o||
             ||| || |||
             |||_||_|||
             ||______||  → `, handleSixthQuestionH)
}

const handleEigthQuestionTrixie = (name) => {
    rl.question(`𝙰𝚏𝚝𝚎𝚛 𝚠𝚊𝚕𝚔𝚒𝚗𝚐 𝚍𝚘𝚠𝚗 𝚝𝚑𝚎 𝚑𝚊𝚕𝚕𝚠𝚊𝚢 𝚏𝚘𝚛 𝚊 𝚖𝚒𝚗𝚞𝚝𝚎, 𝚢𝚘𝚞 𝚋𝚘𝚝𝚑 𝚊𝚙𝚙𝚛𝚘𝚊𝚌𝚑 𝚊 𝚕𝚊𝚛𝚐𝚎 𝚛𝚘𝚘𝚖. 𝚃𝚑𝚎 𝚜𝚒𝚕𝚎𝚗𝚌𝚎 𝚒𝚜 𝚍𝚎𝚊𝚍𝚕𝚢, 𝚢𝚘𝚞 𝚌𝚘𝚞𝚕𝚍 𝚑𝚎𝚊𝚛 𝚊 𝚙𝚒𝚗 𝚍𝚛𝚘𝚙.
    𝚃𝚑𝚎𝚛𝚎'𝚜 𝚓𝚞𝚜𝚝 𝚊 𝚜𝚒𝚗𝚐𝚕𝚎 𝚋𝚎𝚍 𝚒𝚗 𝚝𝚑𝚎 𝚌𝚎𝚗𝚝𝚎𝚛 𝚘𝚏 𝚝𝚑𝚎 𝚛𝚘𝚘𝚖, 𝚍𝚊𝚛𝚎 𝚜𝚎𝚎 𝚠𝚑𝚊𝚝 𝚕𝚒𝚎𝚜 𝚒𝚗 𝚒𝚝?
         .           .
        /|__________/|
      .// /       .//|
      |/_/________|//|
      |_|_________|/
      |           |
  𝙲𝚑𝚘𝚘𝚜𝚎 'y' 𝚏𝚘𝚛 𝚢𝚎𝚜 𝚘𝚛 'n' 𝚏𝚘𝚛 𝚗𝚘:
   `, (input) => {
      if (input === controls[2]) {
          rl.question(`
          𝚈𝚘𝚞 𝚠𝚊𝚕𝚔 𝚌𝚕𝚘𝚜𝚎𝚛 𝚝𝚘 𝚝𝚑𝚎 𝚋𝚎𝚍 𝚝𝚘 𝚜𝚎𝚎 𝚒𝚏 𝚊𝚗𝚢𝚘𝚗𝚎
          𝚒𝚜 𝚜𝚕𝚎𝚎𝚙𝚒𝚗𝚐 𝚒𝚗𝚜𝚒𝚍𝚎 𝚘𝚏 𝚒𝚝... → `, handleNinthQuestion)
      }
      if (input === controls[3]) {
          rl.question(`𝙱𝚒𝚕𝚕 𝚠𝚊𝚝𝚌𝚑𝚎𝚜 𝚢𝚘𝚞𝚛 𝚋𝚊𝚌𝚔 𝚊𝚜 𝚢𝚘𝚞 𝚋𝚘𝚝𝚑 𝚜𝚌𝚞𝚛𝚛𝚢 𝚙𝚊𝚜𝚝 𝚝𝚑𝚎 𝚌𝚛𝚎𝚎𝚙𝚢 𝚕𝚘𝚘𝚔𝚒𝚗𝚐 𝚋𝚎𝚍.

                  |﹋|
                 (҂'_')
                  <,︻╦╤─
                   |﹋|   → `, handleTenthQuestionTrixie)
      }
      else if (input !== controls[2] || controls[3]) {
          rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍, 𝚎𝚒𝚝𝚑𝚎𝚛 y 𝚘𝚛 n →
`, handleEigthQuestionTrixie)
      }
   })
}

const handleEigthQuestionHunter = (name) => {
    rl.question(`𝙰𝚏𝚝𝚎𝚛 𝚠𝚊𝚕𝚔𝚒𝚗𝚐 𝚍𝚘𝚠𝚗 𝚝𝚑𝚎 𝚑𝚊𝚕𝚕𝚠𝚊𝚢 𝚏𝚘𝚛 𝚊 𝚖𝚒𝚗𝚞𝚝𝚎, 𝚢𝚘𝚞 𝚋𝚘𝚝𝚑 𝚊𝚙𝚙𝚛𝚘𝚊𝚌𝚑 𝚊 𝚕𝚊𝚛𝚐𝚎 𝚛𝚘𝚘𝚖. 𝚃𝚑𝚎 𝚜𝚒𝚕𝚎𝚗𝚌𝚎 𝚒𝚜 𝚍𝚎𝚊𝚍𝚕𝚢, 𝚢𝚘𝚞 𝚌𝚘𝚞𝚕𝚍 𝚑𝚎𝚊𝚛 𝚊 𝚙𝚒𝚗 𝚍𝚛𝚘𝚙.
    𝚃𝚑𝚎𝚛𝚎'𝚜 𝚓𝚞𝚜𝚝 𝚊 𝚜𝚒𝚗𝚐𝚕𝚎 𝚋𝚎𝚍 𝚒𝚗 𝚝𝚑𝚎 𝚌𝚎𝚗𝚝𝚎𝚛 𝚘𝚏 𝚝𝚑𝚎 𝚛𝚘𝚘𝚖, 𝚍𝚊𝚛𝚎 𝚜𝚎𝚎 𝚠𝚑𝚊𝚝 𝚕𝚒𝚎𝚜 𝚒𝚗 𝚒𝚝?
         .           .
        /|__________/|
      .// /       .//|
      |/_/________|//|
      |_|_________|/
      |           |
  𝙲𝚑𝚘𝚘𝚜𝚎 'y' 𝚏𝚘𝚛 𝚢𝚎𝚜 𝚘𝚛 'n' 𝚏𝚘𝚛 𝚗𝚘:
   `, (input) => {
        if (input === controls[2]) {
            rl.question(`
          𝚈𝚘𝚞 𝚠𝚊𝚕𝚔 𝚌𝚕𝚘𝚜𝚎𝚛 𝚝𝚘 𝚝𝚑𝚎 𝚋𝚎𝚍 𝚝𝚘 𝚜𝚎𝚎 𝚒𝚏 𝚊𝚗𝚢𝚘𝚗𝚎
          𝚒𝚜 𝚜𝚕𝚎𝚎𝚙𝚒𝚗𝚐 𝚒𝚗𝚜𝚒𝚍𝚎 𝚘𝚏 𝚒𝚝... → `, handleNinthQuestion)
        }
        if (input === controls[3]) {
            rl.question(`𝙱𝚒𝚕𝚕 𝚠𝚊𝚝𝚌𝚑𝚎𝚜 𝚢𝚘𝚞𝚛 𝚋𝚊𝚌𝚔 𝚊𝚜 𝚢𝚘𝚞 𝚋𝚘𝚝𝚑 𝚜𝚌𝚞𝚛𝚛𝚢 𝚙𝚊𝚜𝚝 𝚝𝚑𝚎 𝚌𝚛𝚎𝚎𝚙𝚢 𝚕𝚘𝚘𝚔𝚒𝚗𝚐 𝚋𝚎𝚍.

                  |﹋|
                 (҂'_')
                  <,︻╦╤─
                   |﹋|   → `, handleTenthQuestionHunter)
        }
        else if (input !== controls[2] || controls[3]) {
            rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍, 𝚎𝚒𝚝𝚑𝚎𝚛 y 𝚘𝚛 n →
`, handleEigthQuestionHunter )
        }
    })
}

const handleNinthQuestion = (name) => {
    rl.question(`
███████▀▀▀░░░░░░░▀▀▀███████
██████▀░░░░░░░░░░░░░░░▀████
█████│░░░░░░░░░░░░░░░░│████
████└┐░░░░░░░░░░░░░░░┌┘░███
███░░└┐░░░░░░░░░░░░░░┌┘░░██
███░┌┘▄▄▄▄▄░░░░░▄▄▄▄▄└┐░░██
██▌░▄██████▄░░░▄██████▄░▐██
███─┘░░▓▓▓▓░░░░░▓▓▓▓░░└─███
██▀▓▓▓░▓▓▓▓░░░░░▓▓▓▓░▓▓░▀██
██▄▓▓▓░▓▓▓▓▄▄▄▄▄▓▓▓▓░▓▓▄███
████▄─┘█████████████└─▄████
█████░░▐███████████▌░░█████
██████░░▀█████████▀░░▐█████
███████░░░░▓▓▓▓▓░░░░▄██████
████████▄░░░░░░░░░▄████████
███████████▓▓▓▓▓███████████
███████████▓▓▓▓▓███████████
   𝚈𝙾𝚄 𝙻𝙾𝚂𝙴! 𝚠𝚘𝚞𝚕𝚍 𝚢𝚘𝚞 𝚕𝚒𝚔𝚎 𝚝𝚘 𝚙𝚕𝚊𝚢 𝚊𝚐𝚊𝚒𝚗?
       𝙿𝚛𝚎𝚜𝚜 'y' 𝚘𝚛 'n':
                       `, (input) => {
                           if (input === controls[2]) {
                               rl.question(`ᗯ E ᒪ ᑕ O ᗰ E  T O  T ᕼ E  ᗪ ᑌ ᑎ G E O ᑎ ԅ(◉ ෴ ◉ ԅ)
                               𝚙𝚛𝚎𝚜𝚜 '𝚎𝚗𝚝𝚎𝚛' 𝚝𝚘 𝚋𝚎𝚐𝚒𝚗... →`, handleSecondQuestion)
                            }
                            if (input === controls[3]) {
                                rl.question(`𝙼𝚊𝚢𝚋𝚎 𝚗𝚎𝚡𝚝 𝚝𝚒𝚖𝚎, 𝚕𝚘𝚜𝚎𝚛 :𝙿`)
                                rl.close()
                            }
                            if (input !== controls[2] || controls[3]) {
                                rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍, 𝚎𝚒𝚝𝚑𝚎𝚛 y 𝚘𝚛 n →`, handleNinthQuestion )
                             }
    })
}

const handleTenthQuestionTrixie = (name) => {
    rl.question(`

   𝐀 𝐌 𝐎 𝐍 𝐒 𝐓 𝐄 𝐑  𝐀 𝐏 𝐏 𝐄 𝐀 𝐑 𝐒 !

        .-"""".
       /       |
   __ /   .-.  .|
  /  |  /   |  |
    | _ |/   .==.==.
    | (|  /____|__|
| |      (_()(_()
    | |            '---._
    |                   |_
    /| | '       (__)________/
 /  ||     /|___/
|    |     |||VV
|     |    |_|"""",
|      |     ______)
|       |  /'
         |                           |﹋|
                                    (҂^o^)
                                    <,︻╦╤─ ҉ - - -
                                    <,︻╦╤─ ҉ - - -     𝙱𝚒𝚕𝚕: 𝚆𝚊𝚝𝚌𝚑 𝚘𝚞𝚝, ${playerArr[0]}
                                      |﹋|             𝙱𝚒𝚕𝚕 𝚏𝚒𝚛𝚎𝚜 𝚝𝚑𝚛𝚎𝚎 𝚛𝚘𝚞𝚗𝚍𝚜 𝚘𝚏𝚏 𝚑𝚒𝚜 𝚐𝚞𝚗, 𝚜𝚕𝚊𝚢𝚒𝚗𝚐 𝚝𝚑𝚎 𝚖𝚘𝚗𝚜𝚝𝚎𝚛 →
 `, handleEleventhQuestion)
}

const handleTenthQuestionHunter = (name) => {
    rl.question(`

   𝐀 𝐌 𝐎 𝐍 𝐒 𝐓 𝐄 𝐑  𝐀 𝐏 𝐏 𝐄 𝐀 𝐑 𝐒 !

        .-"""".
       /       |
   __ /   .-.  .|
  /  |  /   |  |
    | _ |/   .==.==.
    | (|  /____|__|
| |      (_()(_()
    | |            '---._
    |                   |_
    /| | '       (__)________/
 /  ||     /|___/
|    |     |||VV
|     |    |_|"""",
|      |     ______)
|       |  /'
         |                           |﹋|
                                    (҂^o^)
                                    <,︻╦╤─ ҉ - - -     𝙱𝚒𝚕𝚕: 𝚆𝚊𝚝𝚌𝚑 𝚘𝚞𝚝, ${playerArr[1]}
                                      |﹋|             𝙱𝚒𝚕𝚕 𝚏𝚒𝚛𝚎𝚜 𝚝𝚑𝚛𝚎𝚎 𝚛𝚘𝚞𝚗𝚍𝚜 𝚘𝚏𝚏 𝚑𝚒𝚜 𝚐𝚞𝚗, 𝚜𝚕𝚊𝚢𝚒𝚗𝚐 𝚝𝚑𝚎 𝚖𝚘𝚗𝚜𝚝𝚎𝚛 →
 `, handleEleventhQuestion)
}

const handleEleventhQuestion = (input) => {
    rl.question(`𝙸𝚝'𝚜 𝚝𝚒𝚖𝚎 𝚝𝚘 𝚁𝚄𝙽! 𝙰𝚗𝚘𝚝𝚑𝚎𝚛 𝚒𝚗𝚝𝚎𝚛𝚜𝚎𝚌𝚝𝚒𝚘𝚗 𝚕𝚒𝚎𝚜 𝚍𝚎𝚊𝚍 𝚊𝚑𝚎𝚊𝚍, 𝚠𝚒𝚝𝚑 𝚝𝚠𝚘 𝚘𝚙𝚝𝚒𝚘𝚗𝚜 𝚢𝚎𝚝 𝚊𝚐𝚊𝚒𝚗; 𝚝𝚘 𝚝𝚞𝚛𝚗 𝚕𝚎𝚏𝚝 𝚘𝚛 𝚛𝚒𝚐𝚑𝚝.

     𝙲𝚑𝚘𝚘𝚜𝚎 𝚢𝚘𝚞𝚛 𝚙𝚊𝚝𝚑 𝚞𝚜𝚒𝚗𝚐 𝚝𝚑𝚎 𝚏𝚘𝚕𝚕𝚘𝚠𝚒𝚗𝚐 𝚌𝚘𝚖𝚖𝚊𝚗𝚍𝚜: 𝚛𝚒𝚐𝚑𝚝: r   𝚕𝚎𝚏𝚝: l
     `, (input) => {
        if (input === controls[0]) {
            rl.question(`𝚈𝚘𝚞 𝚝𝚞𝚛𝚗 𝚛𝚒𝚐𝚑𝚝, 𝚊𝚗𝚍 𝚜𝚎𝚎 𝚊 𝚍𝚘𝚘𝚛 𝚠𝚒𝚝𝚑 𝚕𝚒𝚐𝚑𝚝 𝚌𝚛𝚎𝚎𝚙𝚒𝚗𝚐 𝚝𝚑𝚛𝚘𝚞𝚐𝚑 𝚝𝚑𝚎 𝚌𝚛𝚊𝚌𝚔𝚜.

                         𝙼𝚊𝚢𝚋𝚎 𝚒𝚝 𝚒𝚜 𝚊𝚗 𝚎𝚡𝚒𝚝!
                                             |﹋|
                                            (҂*_*)      𝙱𝚒𝚕𝚕: 𝙻𝚎𝚝'𝚜 𝚐𝚘!  →
                                             <,︻╦╤─
                                              |﹋|

        `, handleFourteenthQuestion)
        }
        if (input === controls[1]) {
            rl.question(`𝚈𝚘𝚞 𝚝𝚞𝚛𝚗 𝚕𝚎𝚏𝚝 𝚊𝚗𝚍 𝚛𝚞𝚗 𝚋𝚕𝚒𝚗𝚍𝚕𝚢 𝚒𝚗𝚝𝚘 𝚝𝚑𝚎 𝚍𝚊𝚛𝚔,
                      𝙱𝚒𝚕𝚕 𝚝𝚛𝚒𝚎𝚜 𝚝𝚘 𝚠𝚊𝚛𝚗 𝚢𝚘𝚞 𝚋𝚞𝚝 𝚒𝚗 𝚙𝚊𝚗𝚒𝚌 𝚢𝚘𝚞 𝚕𝚎𝚊𝚟𝚎 𝚑𝚒𝚖 𝚋𝚎𝚑𝚒𝚗𝚍 𝚊𝚗𝚍 𝚔𝚎𝚎𝚙 𝚛𝚞𝚗𝚗𝚒𝚗𝚐!

                                             |﹋|
                                            (҂T_T)      𝙱𝚒𝚕𝚕: 𝙳𝚘𝚗'𝚝 𝚐𝚘 𝚝𝚑𝚊𝚝 𝚠𝚊𝚢! →
                                             <,︻╦╤─
                                              |﹋|`, handleThirteenthQuestion)
        }
        else if (input !== controls[0] || controls[1]) {
            rl.question(`𝙿𝚕𝚎𝚊𝚜𝚎 𝚎𝚗𝚝𝚎𝚛 𝚊 𝚟𝚊𝚕𝚒𝚍 𝚌𝚘𝚖𝚖𝚊𝚗𝚍, 𝚎𝚒𝚝𝚑𝚎𝚛 r 𝚘𝚛 l →
`, handleEleventhQuestion
)
        }
    })
}

const handleFourteenthQuestion = (input) => {
    rl.question(`𝚈𝚘𝚞 𝚜𝚎𝚎 𝚝𝚑𝚎 𝚍𝚘𝚘𝚛 𝚊𝚗𝚍 𝚛𝚒𝚙 𝚘𝚙𝚎𝚗 𝚝𝚑𝚎 𝚑𝚊𝚗𝚍𝚕𝚎 𝚠𝚒𝚝𝚑 𝚊 𝚝𝚛𝚎𝚖𝚋𝚕𝚒𝚗𝚐 𝚑𝚊𝚗𝚍, 𝚍𝚎𝚜𝚙𝚎𝚛𝚊𝚝𝚎 𝚝𝚘 𝚎𝚜𝚌𝚊𝚙𝚎 𝚝𝚑𝚎 𝚍𝚞𝚗𝚐𝚎𝚘𝚗...
               ______
          *  || _  _ ||  *
          *  ||| || |||  *
          *  |||_||_|||  *
          *  || _  _o||  *
          *  ||| || |||  *
          *  |||_||_|||  *
          *  ||______||  *    →  `, handleTwelfthQuestion)
}

const handleThirteenthQuestion = (input) => {
    rl.question(`𝙾𝚑 𝚗𝚘, 𝙱𝚒𝚕𝚕 𝚠𝚊𝚜 𝚛𝚒𝚐𝚑𝚝.  𝚈𝚘𝚞 𝚛𝚎𝚊𝚌𝚑 𝚊 𝚍𝚎𝚊𝚍 𝚎𝚗𝚍! 𝚈𝚘𝚞 𝚝𝚞𝚛𝚗 𝚊𝚛𝚘𝚞𝚗𝚍 𝚊𝚗𝚍... →  `, handleNinthQuestion )
}


const handleTwelfthQuestion = (input) => {
    console.log(`
                         *✭˚･ﾟ✧*･ﾟ*✭˚･ﾟ✧*･ﾟ*
                 (っ◔◡◔)っ ♥ YOU MADE IT OUT ALIVE! ♥
                         *✭˚･ﾟ✧*･ﾟ*✭˚･ﾟ✧*･ﾟ*`)
    rl.close()
}

    rl.question(`     ᗯ E ᒪ ᑕ O ᗰ E  T O  T ᕼ E  ᗪ ᑌ ᑎ G E O ᑎ ԅ(◉ ෴ ◉ ԅ)
        𝚙𝚛𝚎𝚜𝚜 '𝚎𝚗𝚝𝚎𝚛' 𝚝𝚘 𝚋𝚎𝚐𝚒𝚗... →
        `, handleFirstQuestion)
