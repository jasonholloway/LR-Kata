import createServer from '../../server/createServer'
import request from 'supertest'
import path from 'path'

let web: request.SuperTest<request.Test>;
let resp: request.Test;

beforeEach(() => {
    web = request(createServer({ 
                    publicPath: path.join(__dirname, 'fakePublic') 
                }));
})

describe('path /', () => {

    beforeEach(async () => {
        resp = web.get('/');
    })

    it('returns 200', () => resp.expect(200))
    
    it('serves html doc', () => resp.expect(/<html>/))
    
    it('pre-renders section#hotelSearch', () => resp.expect(/<section id="hotelSearch"/))
})

describe('static files', () => {

    it('serves bundle', () =>
        web.get('/public/bundle.js')
            .expect(200)
            .expect('Content-Type', /application\/javascript/));

})
        
