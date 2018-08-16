const db = require('./db');

module.exports = async function (app) {
    app.get('/api', async (req, res) => {
        console.log(`GET`);
        let _status = 200;
        let strings = {};

        try {
            strings = await db.readJSON();
            if (!strings.originalString || !strings.processedString) {
                throw new SyntaxError({ name: `SyntaxError`, message: `В БД на верные данные !`, status: 404 });
            }

        } catch (error) {
            if (error.name === `SyntaxError`) {
                _status = SyntaxError.status;
                strings = SyntaxError.message;
                console.log(`SyntaxError ->`, SyntaxError);
            } else {
                _status = 500;
                strings = error;
                console.log(`Error read File ->`, error);
            }
        } finally {
            console.log(`strings in router ->`, strings);
            res
                .set("Access-Control-Allow-Origin", "*")
                .status(_status)
                .send(strings);
        }
    });
    app.post('/ingredient', async (req, res) => {
        let _status = 201;
        let _response = {};
        _response.message = 'Создано';
        let _responseData = {};

        try {
            if (!req.body.name) {
                throw new SyntaxError({ name: `SyntaxError`, message: `Не верный запрос !`, status: 400 });
            }
            _response.data = await db.createIngredient(req.body);
        } catch (error) {
            _response.message = error.message;
            if (error.name === `SyntaxError`) {
                _status = 400;
                console.error(`${_response.message} ->`, req.body);
            } else {
                _status = 500;
                console.error(`Error ->`, error);
            }
        } finally {
            res
                .set("Access-Control-Allow-Origin", "*")
                .status(_status)
                .send(_response);
        }
    });

};
