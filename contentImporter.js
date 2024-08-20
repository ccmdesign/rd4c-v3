const chalk = require('chalk');

const { getPages } = require('./directus/pages');
const { getArticles } = require('./directus/articles');
// const { getPrinciples } = require('./directus/principles');
// const { getPublications } = require('./directus/publications');
const { getVideos } = require('./directus/videos');
const { getTeam } = require('./directus/team');
const { getFooter } = require('./directus/footer');
const { getPrinciplesV2 } = require('./directus/principles-v2');
const { getPublicationsV2 } = require('./directus/publications-v2');

var fs = require('fs');
const dir = "./content";
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

console.log('');
console.log(chalk.green('Starting importing data from Directus...'));
console.log('');
console.log(chalk.green('[ PAGES - ARTICLES - PRINCIPLES - PUBLICATIONS - VIDEOS - TEAM ]'));

Promise.all([getPrinciplesV2(), getPublicationsV2()])
  .then(() => {
    setTimeout(() => {
      getPages();
      getFooter();
      getArticles();
      getTeam();
      getVideos();

    }, 1000);
  })
  .catch((error) => {
    console.log("Content Importing:",  error);
  });