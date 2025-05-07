// https://cms.thegovlab.com/items/pages?fields=title,blocks.collection,blocks.item.*,blocks.item.translations.*

const fs = require("fs");
const { rimraf } = require('rimraf');
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
    pg.blocks.forEach((b) => {

      let lang  = {};
      b.item.translations.forEach((t) => {
        lang[common.LANGUAGES[t.languages_code]] = t;
      });

      let key = b.item.section_name ? b.item.section_name : b.collection;
      const type = b.item.translations.find(t => t.languages_code === 'en-US').title;

      // Resouces page has two hero blocks that is displayed based on the publications type [case_study, tools]
      if(i.slug === 'publications' && pg.blocks.length >= 2) {
        key = common.slugify(type);
      }

      if(key) {
        i[key] = lang;
      } else {
        i[key] = {...i[key], ...lang};
      }

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

const getPages = async () => {

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
  getPages
}