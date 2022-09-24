// const names = [
//     {name1: "Trixie"},
//     {name2: "Blair"},
//     {name3: "Blake"},
//     {name4: "Hunter"}

// ]

// let namesArr;

// let nameFunct = () => {
//     for (let i = 0; i < names.length; i++) {
//         let nameObj = names[i]
//         let name = Object.values(nameObj)
//         namesArr = name.concat(namesArr)
//     }
//     return namesArr
// }

// namesArr = nameFunct()



// console.log(namesArr)


const players = {
    player1: "Blair",
    player2: "Hunter"
}

let playerArr = Object.values(players)

console.log(playerArr)
