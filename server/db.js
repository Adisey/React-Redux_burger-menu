const fs = require('fs');
const tools = require('./tools');
const dataIngredient = `${__dirname}\\data\\ingredient.json`;

async function createIngredient (ingredient) {
    const ingredients = await getIngredients();

    ingredient.id = tools.getUniqueID();
    while (ingredients.filter((i) => i.id === ingredient.id).length) {
        console.error(`Внимание повтоный ID ->`, ingredient.id);
        ingredient.id = tools.getUniqueID();
    }

    ingredients.unshift(ingredient);
    const json = JSON.stringify(ingredients);

    fs.writeFile(dataIngredient, json, 'utf8', (error) => {
        if (error) {
            console.error(`error ->`, error);
            reject(error);
        } else {
            console.log(`Сохранено ->`, json, dataIngredient);
        }
    });

    return ingredient;

}

function getIngredients () {
    return new Promise((resolve, reject) => {
        fs.readFile(dataIngredient, 'utf8', (error, data) => {
            if (error) {
                if (error.errno === -4058) {
                    console.error(`Файла не найден ->`, dataIngredient);
                    resolve([]);
                } else {
                    console.error(`error ->`, error);
                    reject(error);

                }
            } else {
                console.log(`Прочитано ->`, data, dataIngredient);
                const arrayObj = JSON.parse(data);

                resolve(arrayObj);
            }
        });
    });
}

module.exports = {
    createIngredient,
    getIngredients,
};
