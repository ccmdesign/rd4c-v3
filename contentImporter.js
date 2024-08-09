const chalk = require('chalk');

const { getArticles } = require('./directus/articles');
const { getPrinciples } = require('./directus/principles');
const { getPublications } = require('./directus/publications');
const { getTeam } = require('./directus/team');


console.log('');
console.log(chalk.green('Starting importing data from Directus...'));
console.log('');
console.log(chalk.green('[ ARTICLES - PRINCIPLES - PUBLICATIONS - TEAM ]'));

getArticles();
getPrinciples();
getPublications();
getTeam();