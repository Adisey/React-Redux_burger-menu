const db = require('./db');

module.exports = async function (app) {
    app.get('/ingredient', async (req, res) => {
        let _status = 200;
        _message = 'the request has succeeded';
        let ingredients = {};

        try {
            ingredients = await db.getIngredients();
            // ToDo: Нудно продумать как верефицироать данные перед отдачей
        } catch (error) {
            if (error.name === `SyntaxError`) {
                _status = SyntaxError.status;
                _message = SyntaxError.message;
                console.log(`SyntaxError ->`, SyntaxError);
            } else {
                _status = 500;
                _message = error;
                console.log(`Error read File ->`, error);
            }
        } finally {
            res
                .set("Access-Control-Allow-Origin", "*")
                .status(_status)
                .send({data:ingredients, message:_message});
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
