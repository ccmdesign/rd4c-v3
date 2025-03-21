const fs = require("fs");
const { rimraf } = require('rimraf');
const common = require ("./common");

const objectContructor = async (dir, fs) => {
  
  const junctionFields = [
    "translations.*",
    "collaborators.rd4c_team_id.*"
  ]

  let articles = await common.getDirectusData("rd4c_items", junctionFields);

  articles = articles.data.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    else return -1;
  });

  const translations = [];
  const availableLang = [];

  const finalArticles = articles.map((item) => {
    let i = { ...{'lang': 'en'}, ...item };
    i.slug = item.slug ? item.slug : common.slugify(item.heading);
    i.cover_image = item.cover_image ? common.getImage(item.cover_image.id) : '';
    i.cover_image_id = item.cover_image ? item.cover_image.id : '';

    // collaborators
    i.collaborators = item.collaborators.length > 0 ? item.collaborators.map((collab) => {
      let person = collab.rd4c_team_id;
      if(person) {
        person.picture = person.picture ? common.getImage(person.picture) : '';
      }
      
      return person
    }) : [];
    i.collaborators = i.collaborators.filter((collab) => collab !== null);

    writeInLocaleFolder(i.lang, i, true);
    
    item.translations.forEach((translation) => {
      let tr = { ...{'itemId': item.id, 'lang': common.LANGUAGES[translation.languages_code]}, ...translation };
      tr.slug = common.slugify(i.heading);
      tr.url = i.url;
      tr.cover_image = i.cover_image;
      tr.cover_image_id = i.cover_image_id;
      tr.category = i.category;
      tr.principles = i.principles;
      tr.main_content = i.main_content;
      tr.collaborators = i.collaborators;
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
        let result = finalArticles.filter((j) => j.id !== i.itemId);
        
        if(lang !== 'en' && availableLang.includes(lang)) {
          result.forEach((item) => {
            writeInLocaleFolder(lang, item);
          });
  
        } else if(lang !== 'en' && !availableLang.includes(lang)) {
          finalArticles.forEach((item) => {
            writeInLocaleFolder(lang, item);
          });
        }
  
      });

    } else {
      finalArticles.forEach((item) => {
        writeInLocaleFolder(lang, item);
      });
    }
  }
  
}

const writeInLocaleFolder = async (lang, item, log=false) => {
  const dir = `./content/${ lang }/articles`;

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

  if(log) console.log("WRITING ARTICLES: ", item.slug + ".json");

}

const getArticlesV2 = async () => {

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
  getArticlesV2
}