const fs = require("fs");
const { rimraf } = require('rimraf');
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "picture.*"
  ]
  const team = await common.getDirectusData("rd4c_team", junctionFields);

  await team.data.forEach((team) => {
    let i = {};
    i.slug = team.slug && team.slug != '' ? team.slug : common.slugify(team.name);
    i.image = team.picture && team.picture.id ? common.getImage(team.picture.id) : '';
    i.bio = team.bio ? team.bio : '';
    i.bioShort = team.bio_short ? team.bio_short : '';
    i.name = team.name ? team.name : '';
    i.title = team.title ? team.title : '';

    fs.writeFile(
      dir + "/" + i.slug + ".json",
      JSON.stringify(i),
      function (err, result) {
        if (err) console.log("error", err);
      }
    );
    console.log("WRITING TEAM: ", i.slug + ".json");

  });
}

const getTeam = async () => {

  const dir = "./content/team";
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
  getTeam
}