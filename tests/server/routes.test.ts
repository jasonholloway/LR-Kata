import app from '../../src/server/app'
import request from 'supertest'

let web: request.SuperTest<request.Test>;

beforeEach(() => {
    web = request(app());
})

test('server serves something', 
    () => web.get('/')
            .expect(200))
            
