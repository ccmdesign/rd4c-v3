const fs = require("fs");
const path = require("path");
const { rimraf } = require('rimraf');
const common = require ("./common");
const axios = require("axios");

const getFields = async (collection, field) => {
  const URL = field ? `${process.env.BASE_URL}/fields/${collection}/${field}` : `${process.env.BASE_URL}/fields/${collection}`;
  
  return axios
    .get(`${ URL }`)
    .then((res) => {
        return {
          field: res.data.data.field,
          // choices: res.data.data.meta.options.choices
          choices: res.data.data.meta.options.choices.map((item) =>{
            return {
              "text": item.text,
              "value": item.value
            }
          }).filter((item) => item !== undefined),
        }

    })
    .catch((error) => {
      console.log(error);
    });
};

const objectContructor = async (dir, fs) => {

  const __FIELD_OPTIONS = await getFields('rd4c_items', 'content_type');
  const items = await common.getDirectusData("rd4c_items");
  let __CUSTOM_CONTENT_TYPE_OPTIONS = []
  
  
  // This field in Directus is a select field with choices
  // We need to filter out the values that are not in the choices
  const __FIELD_OPTIONS_VALUES_ONLY = __FIELD_OPTIONS.choices.map((item) => item.value);
  __CUSTOM_CONTENT_TYPE_OPTIONS = items.data.map((item) => {
    const customContentType = item.content_type.replace(/\s+/g, "_").toLowerCase();

    if(item.content_type !== null && !__FIELD_OPTIONS_VALUES_ONLY.includes(customContentType)) {
      __FIELD_OPTIONS_VALUES_ONLY.push(customContentType); // avoid duplicates
      
      return {
        "text": item.content_type,
        "value": customContentType
      }
    }
    
  }).filter((item) => item !== undefined);


  let i = {};
  let fields = [];
  __FIELD_OPTIONS.choices.forEach((pg) => {    
    const temp = items.data.find((item) => item.content_type === pg.value);
    
    if(temp) {
      fields = fields.concat({
        "text": pg.text,
        "value": pg.value
      });
    }

  });

  i.items = fields.concat(...__CUSTOM_CONTENT_TYPE_OPTIONS);
  
  fs.writeFile(
    dir + "/filters.json",
    JSON.stringify(i),
    function (err, result) {
      if (err) console.log("error", err);
    }
  );
  
  console.log("WRITING ARTICLES FILTERS");

}

const getArticleFilterFields = async () => {
  const dir = "./content/articles-filters";
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
      fs.mkdirSync("./content/");
    }
    fs.mkdirSync(dir);
    fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
      if (err) {
        console.log(err);
      } else {
        await objectContructor(dir, fs);
      }
    });
  }
}

module.exports = {
  getArticleFilterFields
}