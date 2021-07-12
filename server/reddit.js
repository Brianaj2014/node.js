const rp = require("request-promise");
const fs = require("fs");

const options = {
    uri: "https://reddit.com/r/popular.json",
    json: true
};

