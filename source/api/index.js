const MAIN_URL = `http://localhost:9009`;

export const api = {
    ingredient: {
        create (ingredient) {
            console.log(`API - ingredient ->`, ingredient);
            console.log(`API - JSON.stringify ->`, JSON.stringify( ingredient ));

            return fetch(`${MAIN_URL}/ingredient`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( ingredient ),
            });
        },
    },
};
