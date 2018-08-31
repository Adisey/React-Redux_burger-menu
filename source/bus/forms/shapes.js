// Core
import { object, string, boolean, number } from 'yup';

const namerequired = `Поле не должно быть пустым !`;
const nameMin3   = `Название должно содержать минимум 3 символа !`;
const nameMax    = `Название должно диннее 255 символов !`;
const positive   = `Доступно только положительное число !`;
const typeNumber = 'Необходимо число !';
const thisName   = 'Введите название!';
const thisNumber = 'Укажите цену!';

export const creatorIngredient = {
    shape: {
        name:  'Капуста',
        price: 12.5,
        image: null,
    },
    schema: object().shape({
        name: string(thisName)
            .required(namerequired)
            .min(3, nameMin3)
            .max(255, nameMax),
        price: number()
            .required(namerequired)
            .typeError(typeNumber)
            .positive(positive),
    }),
};
export const creatorBurger = {
    shape: {
        name:  'Бигмак-01',
        image: null,
    },
    schema: object().shape({
        name: string(thisName)
            .required(namerequired)
            .min(3, nameMin3)
            .max(255, nameMax),
    }),
};
