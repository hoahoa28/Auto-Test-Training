
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./index.js');
let expect = chai.expect;
const { user } = require('./mockData.js')

chai.use(chaiHttp);

describe('/delete', () => {
    it('it should delete user have id 0', (done) => {

        chai.request('http://127.0.0.1:8000')
            .delete('/delete/0')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.customer[0]).to.be.an('object');
                expect(res.body.customer[0]).to.have.property('email');
                expect(res.body.customer[0]).have.property('firstName');
                expect(res.body.customer[0]).have.property('lastName');
                expect(res.body.message).to.equal('Delete successful!');
                done();
            });
    });

    it('it should return an error message if user has invalid id ', (done) => {
        chai.request('http://127.0.0.1:8000')
            .delete('/delete/30')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equal('Invalid user!');
                done();
            });
    });




});


describe('/get data', () => {
    it('it should GET all data', (done) => {
        chai.request('http://127.0.0.1:8000')
            .get('/data')
            .end((err, res) => {
                expect(res).to.have.status(200)
                done();
            });
    });
});

describe('/post data', () => {
    it('it should POST data', (done) => {
        chai.request('http://127.0.0.1:8000')
            .post('/')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                expect(res.body[0]).to.be.an('object');
                expect(res.body[0]).to.have.property('email');
                expect(res.body[0]).have.property('firstName');
                expect(res.body[0]).have.property('lastName');
                done();
            });
    });
});

describe('/put', () => {
    it('it should update data of user having valid id', (done) => {
        chai.request('http://127.0.0.1:8000')
            .put('/update/0')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.customer[0]).to.be.an('object');
                expect(res.body.customer[0]).to.have.property('email');
                expect(res.body.customer[0]).have.property('firstName');
                expect(res.body.customer[0]).have.property('lastName');
                expect(res.body.message).to.equal('Update successful!');
                done();
            });
    });
    it('it should return an error message if user has invalid id ', (done) => {
        chai.request('http://127.0.0.1:8000')
            .put('/update/30')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.message).to.equal('Invalid user!');
                done();
            });
    });
});


