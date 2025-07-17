const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  let articles = await common.getDirectusData("rd4c_items");

  articles = articles.data.sort((a, b) => {
    if (new Date(a.date) > new Date (b.date)) return 1;
    else return -1;
  });

  articles.forEach((item) => {
    let i = { ...item };
    i.slug = item.brow?common.slugify(item.brow)+'-':''+common.slugify(item.heading);
    i.cover_image = item.image ? common.getImage(item.image.id) : '';

    fs.writeFile(
      `${dir}/${i.slug}.json`,
      JSON.stringify(i),
      function (err) {
        if (err) console.log("error", err);
      }
    );
    console.log("WRITING ARTICLES: ", i.slug + ".json");
  });
}

const getArticles = async () => {

  const dir = "./content/articles";
  if (fs.existsSync(dir)) {
    rimraf(dir, async () => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
        if (err) {
          console.log(err);
        } else {
          objectContructor(dir, fs);
        }
      });
    });
  } else {
    if (!fs.existsSync("./content")) {
      fs.mkdirSync("./content");
    }
    fs.mkdirSync(dir);
    fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
      if (err) {
        console.log(err);
      } else {
        objectContructor(dir, fs);
      }
    });
  }
}

module.exports = {
  getArticles
}
