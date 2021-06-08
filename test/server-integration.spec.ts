import axios from 'axios';
const {apiHash} = require('../deploy-output.json');

function generateAPIUrl(apiHash) {
    return `http://localhost:4566/restapis/${apiHash}/local/_user_request_/test`;
}

describe('Test', () => {
    it('/ (GET)',async () => {
        const url = generateAPIUrl(apiHash)
        const res = await axios.get(url);
        expect(res.data).toMatch('sdssddsds');
    });
});
