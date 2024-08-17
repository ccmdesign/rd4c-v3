const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "translations.*"
  ]

  let principles = await common.getDirectusData("rd4c_principles", junctionFields);

  principles = principles.data.sort((a, b) => {
    if (new Date(a.date) > new Date (b.date)) return 1;
    else return -1;
  });

  const defaltLang = [];

  const finalPrinciples = principles.map((item) => {
    // let i = {"en" : { ...{'lang': 'en'}, ...item }};
    let i = { ...{'lang': 'en'}, ...item };
    i.slug = common.slugify(i.name);
    writePrinciples(i);
    // defaltLang.push(i);
    
    item.translations.forEach((translation) => {
      // i[common.LANGUAGES[translation.languages_code]] = { ...{'lang': common.LANGUAGES[translation.languages_code]}, ...translation };
      let i = { ...{'itemId': item.id, 'lang': common.LANGUAGES[translation.languages_code]}, ...translation };
      i.slug = common.slugify(i.name);
      writePrinciples(i);
      defaltLang.push(i);
    });

    return i;

  });

  defaltLang.forEach((i) => {
    let result = finalPrinciples.filter((j) => j.id !== i.itemId);
    
    for(key in common.LANGUAGES) {
      let lang = common.LANGUAGES[key];

      result.forEach((item) => {
        if(lang !== 'en') {
          writeInLocaleFolder(lang, item);
        }
        
      });
      console.log(23, lang)
    }
  });
    
}

const writeInLocaleFolder = async (lang, item) => {
  const dir = `./content/${ lang }/principles`;
  
  console.log('dir', dir);

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

}

const writePrinciples = async (i) => {
  const dir = `./content/${ i.lang }/principles`;
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  while(!(await checkFolder(dir))) {
    console.log('waiting for folder to be created');
  }

  fs.writeFile(
    `${dir}/${i.slug}.json`,
    JSON.stringify(i),
    function (err) {
      if (err) console.log("error", err);
    }
  );

  console.log("WRITING PRINCIPLES: ", i.slug + ".json");
}

const getPrinciplesV2 = async () => {

  const dir = "./content";
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