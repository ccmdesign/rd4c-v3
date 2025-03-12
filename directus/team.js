const fs = require("fs");
const { rimraf } = require('rimraf');
const common = require("./common");

const objectContructor = async (dir, fs) => {
    const junctionFields = [
        "translations.*",
        "picture.*"
    ];
    const team = await common.getDirectusData("rd4c_team", junctionFields);

    const translations = [];
    const availableLang = [];

    const finalTeam = team.data.map((team) => {
        let i = { ...{'lang': 'en'}, ...team };
        i.slug = team.slug && team.slug != '' ? team.slug : common.slugify(team.name);
        i.image = team.picture && team.picture.id ? common.getImage(team.picture.id) : '';
        i.bio = team.bio ? team.bio : '';
        i.bioShort = team.bio_short ? team.bio_short : '';
        i.name = team.name ? team.name : '';
        i.title = team.title ? team.title : '';

        writeInLocaleFolder(i.lang, i, true);

        if (team.translations && team.translations.length > 0) {
            team.translations.forEach((translation) => {
                let tr = { ...i, ...translation };
                tr.itemId = team.id;
                tr.slug = common.slugify(tr.name);
                tr.lang = common.LANGUAGES[translation.languages_code];
                if(tr.lang !== 'en') {
                    writeInLocaleFolder(tr.lang, tr, true);
                    translations.push(tr);
                    availableLang.push(tr.lang);
                  }

            });
        }

        return i;
    });

    for (const  key in common.LANGUAGES) {
        const lang = common.LANGUAGES[key];
          if (translations.length > 0) {
                  translations.forEach((i) => {
                const result = finalTeam.filter((j) => j.id !== i.itemId);

                if (lang !== 'en' && availableLang.includes(lang)) {
                    result.forEach((item) => {
                        writeInLocaleFolder(lang, item);
                    });
                } else if (lang !== 'en' && !availableLang.includes(lang)) {
                    finalTeam.forEach((item) => {
                        writeInLocaleFolder(lang, item);
                    });
                }
            });
        } else {
            finalTeam.forEach((item) => {
                writeInLocaleFolder(lang, item);
            });
        }
    }
};

const writeInLocaleFolder = async (lang, item, log = false) => {
    const dir = `./content/${lang}/team`;

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    while (!(await checkFolder(dir))) {
        console.log('waiting for folder to be created');
    }

    fs.writeFile(
        `${dir}/${item.slug}.json`,
        JSON.stringify(item),
        function (err) {
            if (err) console.log("error", err);
        }
    );

    if (log) console.log("WRITING TEAM: ", item.slug + ".json");
};

const getTeam = async () => {
    const dir = "./content/team";
    if (fs.existsSync(dir)) {
        Promise.all([rimraf(dir)]).then(() => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }
            fs.access(dir, fs.constants.R_OK | fs.constants.W_OK, async (err) => {
                if (err) {
                    console.error("Error removing directory:", err);
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
};

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
    getTeam
};