const chalk = require('chalk');

const { getPages } = require('./directus/pages');
const { getSignup } = require('./directus/signup');
const { getTeam } = require('./directus/team');
const { getFooter } = require('./directus/footer');
const { getPrinciplesV2 } = require('./directus/principles-v2');
const { getPublicationsV2 } = require('./directus/publications-v2');
const { getVideosV2 } = require('./directus/videos-v2');
const { getArticlesV2 } = require('./directus/articles-v2');
const { getArticleFilterFields } = require('./directus/articlesFilterFields');

var fs = require('fs');
const dir = "./content";
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

console.log('');
console.log(chalk.green('Starting importing data from Directus...'));
console.log('');
console.log(chalk.green('[ PAGES - ARTICLES - PRINCIPLES - PUBLICATIONS - VIDEOS - TEAM ]'));

Promise.all([getPrinciplesV2(), getPublicationsV2(), getVideosV2(), getArticlesV2()])
  .then(() => {
    setTimeout(() => {
      getPages();
      getFooter();
      getSignup();
      getTeam();
      getArticleFilterFields();

    }, 1000);
  })
  .catch((error) => {
    console.log("Content Importing:",  error);
  });