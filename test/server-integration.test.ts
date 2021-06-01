import * as superagent from 'superagent';


const url = 'http://localhost:4566/restapis/zii0emtaxl/local/_user_request_/test';


describe('Test', () => {

    beforeAll(async () => {
    });

    afterAll(async () => {
    });

    it('/ (GET)',async () => {
        const res = await superagent.get(url);
        expect(res).toMatch('sdssddsds');
    });
});
