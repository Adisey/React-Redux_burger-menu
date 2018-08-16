const fs = require('fs');
const tools = require('./tools');
const dataIngredient = `${__dirname}\\data\\ingredient.json`;

const createIngredient = async (ingredient) => {
    const ingredients = await getIngredients();

    ingredient.id = tools.getUniqueID();
    while (ingredients.filter((i) => i.id === ingredient.id).length) {
        console.error(`Внимание повтоный ID ->`, ingredient.id);
        ingredient.id = tools.getUniqueID();
    };

    ingredients.unshift(ingredient);
    const json = JSON.stringify(ingredients);

    await fs.writeFile(dataIngredient, json, 'utf8', (error) => {
        if (error) {
            console.error(`error ->`, error);
            reject(error);
        } else {
            console.log(`Сохранено ->`,json, dataIngredient);
        }
    });

    return ingredient;

};

function getIngredients () {
    return new Promise((resolve, reject) => {
        fs.readFile(dataIngredient, 'utf8', (error, data) => {
            if (error) {
                // console.error(`error ->`, error);
                //reject(error);
                 console.error(`Файла не найден ->`, dataIngredient);
                resolve([]);

            } else {
                console.log(`Прочитано ->`, data, dataIngredient);
                const arrayObj = JSON.parse(data);

                resolve(arrayObj);
            }
        });
    });
}

function readJSON () {
    return new Promise((resolve, reject) => {
        fs.readFile(dataFile, 'utf8', (error, data) => {
            if (error) {
                console.error(`error ->`, error);
                reject(error);
            } else {
                console.log(`Прочитано ->`, data);
                const obj = JSON.parse(data);

                resolve(obj);
            }
        });
    });
}

module.exports = {
    createIngredient,
    getIngredients,
};
