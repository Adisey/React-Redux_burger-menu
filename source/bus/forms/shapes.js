// Core
import { object, string, boolean, number } from 'yup';

export const creatorIngredient = {
    shape: {
        name:  'Привет',
        price: 12.5,
    },
    schema: object().shape({
        name: string()
            .required('Введите название')
            .min(1),
        price: number()
            .typeError('Необходимо число!')
            .positive('Доступно только положительное число!')
            .required('Укажите цену!'),
    }),
};
