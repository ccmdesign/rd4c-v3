// https://cms.thegovlab.com/items/pages?fields=title,blocks.collection,blocks.item.*,blocks.item.translations.*

const fs = require("fs");
const { rimraf } = require('rimraf');
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "translations.*"
  ]
  const footer = await common.getDirectusData("block_footer", junctionFields);

  await footer.data.forEach((pg) => {
    let i = {};
    i.footer = {};
    i.title = 'Footer';
    i.slug = common.slugify('footer');
    pg.translations.forEach((t) => {
    i.footer[common.LANGUAGES[t.languages_code]] = t;
    });

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

const getFooter = async () => {

  const dir = "./content/pages";
  if (fs.existsSync(dir)) {
    Promise.all([rimraf(dir)]).then(() => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
        if (err) {
          console.log(err);
        } else {
          await objectContructor(dir, fs);
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
  getFooter
}