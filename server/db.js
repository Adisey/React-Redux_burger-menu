const fs = require('fs');
const tools = require('./tools');
const dataIngredient = `${__dirname}\\data\\ingredient.json`;
const dataBurger = `${__dirname}\\data\\burgers.json`;
const lenghtID = 25;

async function createIngredient (ingredient) {
    const ingredients = await this.getIngredients();
    const prefix = 'ingr_';

    ingredient.id = tools.getUniqueID(lenghtID, prefix);
    while (ingredients.filter((i) => i.id === ingredient.id).length) {
        console.error(`Внимание повтоный ID ->`, ingredient.id);
        ingredient.id = tools.getUniqueID(lenghtID, prefix);
    }

    ingredients.unshift(ingredient);
    const json = JSON.stringify(ingredients);

    fs.writeFile(dataIngredient, json, 'utf8', (error) => {
        if (error) {
            console.error(`error ->`, error);
            reject(error);
        } else {
            console.log(`Сохранено ->`, json, `в`, dataIngredient);
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
                console.log(`Прочитано ->`, data, `из`, dataIngredient);
                const arrayObj = JSON.parse(data);

                resolve(arrayObj);
            }
        });
    });
}

async function createBurger (burger) {
    const burgers = await this.getBurgers();
    const prefix = 'burg_';

    burger.id = tools.getUniqueID(lenghtID, prefix);
    while (burgers.filter((i) => i.id === burger.id).length) {
        console.error(`Внимание повтоный ID ->`, burger.id);
        burger.id = tools.getUniqueID(lenghtID, prefix);
    }

    burgers.unshift(burger);
    const json = JSON.stringify(burgers);

    fs.writeFile(dataBurger, json, 'utf8', (error) => {
        if (error) {
            console.error(`error ->`, error);
            reject(error);
        } else {
            console.log(`Сохранено ->`, json, `в`, dataBurger);
        }
    });

    return burger;
}

function getBurgers () {
    return new Promise((resolve, reject) => {
        fs.readFile(dataBurger, 'utf8', (error, data) => {
            if (error) {
                if (error.errno === -4058) {
                    console.error(`Файла не найден ->`, dataBurger);
                    resolve([]);
                } else {
                    console.error(`error ->`, error);
                    reject(error);

                }
            } else {
                console.log(`Прочитано ->`, data, `из`, dataBurger);
                const arrayObj = JSON.parse(data);

                resolve(arrayObj);
            }
        });
    });
}

module.exports = {
    createIngredient,
    getIngredients,
    createBurger,
    getBurgers,
};
