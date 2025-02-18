const fs = require("fs");
const { rimraf } = require('rimraf');
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "translations.*"
  ]

  let principles = await common.getDirectusData("rd4c_principles", junctionFields);

  principles.data.map((item) => {
    let i = { ...{'lang': 'en'}, ...item };
    i.slug = common.slugify(item.name);
    writeInLocaleFolder(i.lang, i, true);
    
    item.translations.forEach((translation) => {
      let tr = { ...{'itemId': item.id, 'lang': common.LANGUAGES[translation.languages_code]}, ...translation };
      tr.slug = common.slugify(i.name);
      // avoid duplicates
      if(tr.lang !== 'en') {
        writeInLocaleFolder(tr.lang, tr, true);
      }
    });

    return i;

  });
      
}

const writeInLocaleFolder = async (lang, item, log=false) => {
  const dir = `./content/${ lang }/principles`;
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  while(!(await checkFolder(dir))) {
    console.log('waiting for folder to be created');
  }

  fs.writeFile(
    `${dir}/${item.slug}.json`,
    JSON.stringify(item),
    function (err) {
      if (err) console.log("error", err);
    }
  );

  if(log) console.log("WRITING PRINCIPLES: ", item.slug + ".json");

}

const getPrinciplesV2 = async () => {

  const dir = "./content";
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

function checkFolder(dirName) {
  return new Promise((resolve) => {
    fs.access(dirName, fs.constants.F_OK, (err) => {
      if (err) {
        console.log('Folder does not exist yet, waiting...');
        setTimeout(() => resolve(false), 1000); // Check again after 1 second
      } else {
        resolve(true);
      }
    });
  });
}

module.exports = {
  getPrinciplesV2
}