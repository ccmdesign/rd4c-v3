const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  let publications = await common.getDirectusData("rd4c_publications");

  publications = publications.data.sort((a, b) => {
    if (new Date(a.date) > new Date (b.date)) return 1;
    else return -1;
  });

  publications.forEach((item) => {
    let i = { ...item };
    i.slug = common.slugify(item.title);

    fs.writeFile(
      `${dir}/${i.slug}.json`,
      JSON.stringify(i),
      function (err) {
        if (err) console.log("error", err);
      }
    );
    console.log("WRITING PUBLICATIONS: ", i.slug + ".json");
  });
}

const getPublications = async () => {

  const dir = "./content/publications";
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
  getPublications
}