// https://cms.thegovlab.com/items/pages?fields=title,blocks.collection,blocks.item.*,blocks.item.translations.*

const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "blocks.collection",
    "blocks.item.*",
    "blocks.item.translations.*"
  ]
  const pages = await common.getDirectusData("pages", junctionFields);

  await pages.data.forEach((pg) => {
    let i = {};
    i.slug = common.slugify(pg.title);
    i.title = pg.title ? pg.title : '';
    

    fs.writeFile(
      dir + "/" + i.slug + ".json",
      JSON.stringify(i),
      function (err, result) {
        if (err) console.log("error", err);
      }
    );
    console.log("WRITING PAGES: ", i.slug + ".json");

  });
}

const getPages = async () => {

  const dir = "./content/pages";
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
  getPages
}