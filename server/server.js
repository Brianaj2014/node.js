const path = require('path');
const fs = require('fs');

const chirps = [
    {
        username: "Usher",
        message: "Let it burn!"
    },
    {
        username: "Madonna",
        message: "I'm too sexy for my shirt!"
    },
    {
        username: "Squidward",
        message: "I am handsome!"
    },
    {
        username: "Shrek",
        message: "I love Fiona!"
    },
    {
        username: "Mr. Krab",
        message: "I need more loot!"
    }
];

fs.writeFile('chirps.json', JSON.stringify(chirps), function (err) {
    if (err) throw err;
    console.log("It's Done!");
});

fs.readFile('chirps.json', function (err, data) {
    if (err) throw err;
    console.log(JSON.parse(data));
});