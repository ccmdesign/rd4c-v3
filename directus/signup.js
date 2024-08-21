// https://cms.thegovlab.com/items/pages?fields=title,blocks.collection,blocks.item.*,blocks.item.translations.*

const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "translations.*"
  ]
  const signup = await common.getDirectusData("block_signup", junctionFields);

  await signup.data.forEach((pg) => {
    let i = {};
    i.signup = {};
    i.title = 'Signup';
    i.slug = common.slugify('signup');
    pg.translations.forEach((t) => {
    i.signup[common.LANGUAGES[t.languages_code]] = t;
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

const getSignup = async () => {

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
  getSignup
}