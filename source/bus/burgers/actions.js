import { type } from "./types";

export const burgersActions ={
    // Sync
    createBurger: (burger) => {
        return {
            type:    type.CREATE_BURGER,
            payload: burger,
        };
    },
    fillBurgers: (burgers) => {
        return {
            type:    type.FILL_BURGERS,
            payload: burgers,
        };
    },

    // Async
    createBurgerAsync: (burger) => {
        return {
            type:    type.CREATE_BURGER_ASYNC,
            payload: burger,
        };
    },
    fetchBurgersAsync: (burgers) => {
        return {
            type:    type.FETCH_BURGERS_ASYNC,
            payload: burgers,
        };
    },
};
