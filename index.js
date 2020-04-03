var Trello = require("node-trello");
const Librus = require("librus-api");
const lclient = new Librus();
require('dotenv').config()
const fs = require("fs");
var t = new Trello(
  process.env.TRELLO_API_KEY,
  process.env.TRELLO_API_TOKEN,
);
let added = [];

fs.readFile("alreadyPublished.txt", "utf8", function(err, contents) {
  added = contents.split("\n");
});
lclient.authorize(process.env.LIBRUS_LOGIN, process.env.LIBRUS_PASSWORD).then(() => {
  lclient.homework.listHomework().then(data => {
    data = data.filter(el => !added.includes(el["id"].toString()));
    data.forEach(el => {
      fs.appendFile("alreadyPublished.txt", el["id"] + "\n", function(err) {
        if (err) return console.log(err);
      });
      lclient.homework.getHomework(el["id"]).then(homeworkData => {
        console.log(data);
        t.post(
          "/1/cards",
          {
            name: `Od: ${el["user"]} \n Treść: ${el["title"]}.`,
            idList: process.env.TRELLO_LIST_ID,
            due: el["to"],
            desc: ` Link do podglądu: https://synergia.librus.pl/moje_zadania/podglad/${el["id"]} Opis ${homeworkData.content}`
          },
          err => {
            if (err) throw err;
          }
        );
      });
    });
  });
});
