const MAIN_URL = `http://localhost:9009`;

export const api = {
    ingredient: {
        create (name) {
            console.log(`API - name ->`, name);

            return fetch(`${MAIN_URL}/ingredient`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }),
            });
        },
    },
};
