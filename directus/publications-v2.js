const fs = require("fs");
var rimraf = require("rimraf");
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "translations.*"
  ]

  let publications = await common.getDirectusData("rd4c_publications", junctionFields);

  publications = publications.data.sort((a, b) => {
    if (a.sort > b.sort) return 1;
    else return -1;
  });

  const translations = [];
  const availableLang = [];

  const finalPublications = publications.map((item, index) => {
    let i = { ...{'lang': 'en'}, ...item };
    i.sort = index + 1;
    i.slug = common.slugify(item.title);
    i.heading = item.title;
    i.main_content = item.description;
    i.cover_image = item.image ? common.getImage(item.image.id) : '';
    writeInLocaleFolder(i.lang, i, true);
    
    item.translations.forEach((translation) => {
      let tr = { ...{'itemId': item.id, 'lang': common.LANGUAGES[translation.languages_code]}, ...translation };
      tr.sort = i.sort;
      tr.slug = common.slugify(i.title);
      tr.url = i.url;
      tr.cover_image = i.cover_image;
      tr.publication_type = i.publication_type;
      tr.main_content = i.main_content;
      writeInLocaleFolder(tr.lang, tr, true);
      translations.push(tr);
      availableLang.push(tr.lang);
    });

    return i;

  });

  for(key in common.LANGUAGES) {
    let lang = common.LANGUAGES[key];
    if(translations.length > 0) {
      translations.forEach((i) => {
        let result = finalPublications.filter((j) => j.id !== i.itemId);
        
        if(lang !== 'en' && availableLang.includes(lang)) {
          result.forEach((item) => {
            writeInLocaleFolder(lang, item);
          });
  
        } else if(lang !== 'en' && !availableLang.includes(lang)) {
          finalPublications.forEach((item) => {
            writeInLocaleFolder(lang, item);
          });
        }
  
      });

    } else {
      finalPublications.forEach((item) => {
        writeInLocaleFolder(lang, item);
      });
    }
  }
  
}

const writeInLocaleFolder = async (lang, item, log=false) => {
  const dir = `./content/${ lang }/publications`;
  
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

  if(log) console.log("WRITING PUBLICATIONS: ", item.slug + ".json");

}

const getPublicationsV2 = async () => {

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
  getPublicationsV2
}