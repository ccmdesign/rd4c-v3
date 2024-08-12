const chalk = require('chalk');

const { getArticles } = require('./directus/articles');
const { getPrinciples } = require('./directus/principles');
const { getPublications } = require('./directus/publications');
const { getVideos } = require('./directus/videos');
const { getTeam } = require('./directus/team');


console.log('');
console.log(chalk.green('Starting importing data from Directus...'));
console.log('');
console.log(chalk.green('[ ARTICLES - PRINCIPLES - PUBLICATIONS - VIDEOS - TEAM ]'));

getArticles();
getPrinciples();
getPublications();
getTeam();
getVideos();