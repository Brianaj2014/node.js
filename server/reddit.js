const rp = require("request-promise");
const fs = require("fs");

const options = {
    uri: "https://reddit.com/r/popular.json",
    json: true
};

rp(options)
    .then(payload => {
        let extractedArticleArr = [];

        payload.data.children.forEach(article => {
            extractedArticleArr.push({
                url: article.data.url,
                author: article.data.author
            });
        });

        fs.writeFile("popular-articles.json", JSON.stringify(extractedArticleArr), (err) => {
            if (err) throw err;
            console.log("It's Done");
        });
    })
    .catch(err => console.log(err));
