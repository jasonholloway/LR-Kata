import app from '../../server/app'
import request from 'supertest'

let web: request.SuperTest<request.Test>;

beforeEach(() => {
    web = request(app());
})

describe('path /', () => {

    let resp: request.Test;

    beforeEach(async () => {
        resp = web.get('/');
    })

    it('returns 200', () => resp.expect(200))
    
    it('serves html doc', () => resp.expect(/<html>/))

    it('pre-renders section#hotelSearch', () => resp.expect(/<section id="hotelSearch"/))

})
        
