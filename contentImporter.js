const chalk = require('chalk');

const { getPages } = require('./directus/pages');
const { getArticles } = require('./directus/articles');
const { getPrinciples } = require('./directus/principles');
const { getPublications } = require('./directus/publications');
const { getVideos } = require('./directus/videos');
const { getTeam } = require('./directus/team');
const { getFooter } = require('./directus/footer');


console.log('');
console.log(chalk.green('Starting importing data from Directus...'));
console.log('');
console.log(chalk.green('[ PAGES - ARTICLES - PRINCIPLES - PUBLICATIONS - VIDEOS - TEAM ]'));

getPages();
getFooter();

getArticles();
getPrinciples();
getPublications();
getTeam();
getVideos();