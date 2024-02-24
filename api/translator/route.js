const express = require('express');
const router = express.Router();
const DetectLanguage = require('detectlanguage');
require('dotenv').config();
const translate = require('translate-google');

const translationRoutes = {
    translatorPostRoute: (req, res) => {
        try {
            if (Object.keys(req.body).length == 0) { throw { status: 404, msg: 'Body data not found' }; }
            let reqKeys = Object.keys(req.body), validRequest = 0;
            for(let key in reqKeys){
                if(reqKeys[key].match('text')){
                    validRequest++;
                    break;
                }
            }
            if (!validRequest) { throw { status: 404, msg: 'Invalid request data.' }; }
            if (req.body.text.length == 0) { throw { status: 404, msg: 'Please send some text to translate.' }; }
            const { text } = req.body;
            const detectlanguage = new DetectLanguage(process.env.API_KEY_LANGUAGE);
            detectlanguage.detect(text)
                .then(function (detectLanguageResult) {
                    if (detectLanguageResult && detectLanguageResult.length) {
                        let found = 0;
                        for (let key in detectLanguageResult) {
                            if (detectLanguageResult[key]['language'] == 'en') { found++; break; }
                        }
                        if (!found) { throw { status: 404, msg: 'Please write your text in english language.' } };
                        translate(text, { to: 'fr' })
                            .then(translatedResult => {
                                res.status(200).send({ "translation": translatedResult });
                            })
                            .catch(translationError => {
                                res.status(404).send({ 'Error Found': translationError });
                            })
                    } else {
                        throw { status: 404, msg: 'Please write your text in english language.' };
                    }
                })
                .catch((detectLanguageError) => {
                    if (detectLanguageError.status && detectLanguageError.msg) res.status(detectLanguageError.status).send(detectLanguageError.msg);
                    else res.status(404).send({ 'Error Found': detectLanguageError.message });
                });
        } catch (err) {
            if (err.status && err.msg) res.status(err.status).send(err.msg);
            else res.status(404).send({ 'Error Found': err.message });
        }
    }
}

router.post('/translate', translationRoutes.translatorPostRoute);

module.exports = router;