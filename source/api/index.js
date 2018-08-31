const MAIN_URL = `http://localhost:9009`;

export const api = {
    ingredient: {
        create (ingredient) {
            return fetch(`${MAIN_URL}/ingredient`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( ingredient ),
            });
        },
        fetch () {
            return fetch(`${MAIN_URL}/ingredient`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
    },
    burger: {
        create (burger) {
            return fetch(`${MAIN_URL}/burger`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify( burger ),
            });
        },
        fetch () {
            return fetch(`${MAIN_URL}/burger`, {
                method:  'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        },
    },
};
