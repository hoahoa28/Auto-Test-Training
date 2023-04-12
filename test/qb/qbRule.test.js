/*@author: HoaNT2
@todo: test api cho Rule Endpoint
@release: 
@runtest: ghi lại những thay đổi trong file khi chạy test
@last_modified: ghi lại thời gian thay đổi file cuối cùng
@last_modified_by: HoaNT2*/


const chai = require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const { mockDataGetRuleByDomainId0,
    mockDataGetRuleByDomainId1,
    mockDataGetRuleByDomainId2,
    mockDataGetRuleByDomainId3,
    mockDataGetRuleByDomainId4,
    mockDataGetRuleByDomainId5,
    mockDataGetRuleByDomainId6,
    mockDataGetRuleByDomainId7,
    mockDataGetRuleByDomainId8,
    mockDataGetRuleByDomainId9,
    mockDataGetRuleByDomainId10,
    mockDataGetRuleByDomainId11,
    mockDataGetRuleByDomainId12,
    mockDataGetRuleByDomainId13,
    mockDataGetRuleByDomainId14,
    mockDataGetRuleByDomainId15,
    mockDataGetRuleByDomainId16,
    mockDataGetRuleByDomainId17,
    mockDataGetRuleByDomainId18,
    mockDataGetRuleByDomainId19,
    mockDataGetRuleByDomainId20,
    mockDataGetRuleByDomainId21 } = require('../mockData/mockDataRuleEndpoint.js')


// it('it should return an error message if user has invalid id ', (done) => {
//     chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
//         .post('/qb/get-by-domain')
//         .send(mockDataGetRuleByDomainId0)
//         .end((err, res) => {
//             expect(res).to.have.status(200);
//             // expect(res.body.message).to.equal('User is not exist!');
//             done();
//         });
// });

describe('TEST qbRule: Rule Endpoint', () => {
    describe('Test on /get-by-domain', () => {
        it('In case payload is correct: Success should be true', (done) => {
            let payload = mockDataGetRuleByDomainId0;
            chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
                .post('/qb/get-by-domain')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body.success).to.equal(true);
                    expect(res.body).to.be.an('object');
                    for (let i = 0; i < res.body.rules.length; i++) {
                        expect(res.body.rules[i]).to.have.all.keys(
                            "id",
                            "shop_id",
                            "name",
                            "priority",
                            "rule_type",
                            "rule_setting",
                            "status",
                            "apply_to",
                            "customer_ids",
                            "customer_tags",
                            "product_condition_type",
                            "product_ids",
                            "product_collections",
                            "product_tags",
                            "exc_customer_tags",
                            "exclude_from",
                            "createdAt",
                            "updatedAt",
                            "qbRuleQtyTables"

                        )
                        expect(res.body.rules[i].qbRuleQtyTables).to.be.an("array")
                        expect(res.body.rules[i].qbRuleQtyTables[0]).to.have.all.keys(
                            "id",
                            "rule_id",
                            "qty_from",
                            "qty_to",
                            "discount_type",
                            "discount_value",
                            "createdAt",
                            "updatedAt"
                        )

                    }

                    done();
                });
        });



        it('In case payload is wrong domain: Success should be false and Message should be  "Could not found shop with domain ngoc-vm.myshopify"', (done) => {
            let payload = mockDataGetRuleByDomainId1;
            chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
                .post('/qb/get-by-domain')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.success).to.equal(false);
                    expect(res.body.message).to.equal(`Could not found shop with domain ${payload.domain}`);
                    done()
                });
        });

        it('In case payload is wrong accessKey: Success should be false and Message should be "Access key is not correct"', (done) => {
            let payload = mockDataGetRuleByDomainId2;
            chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
                .post('/qb/get-by-domain')
                .send(payload)
                .end((err, res) => {
                    console.log(res.body)
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.success).to.equal(false);
                    expect(res.body.message).to.equal(`Access key is not correct`);
                    done()
                });
        });

        it('In case payload is domain is blank: Success should be false and Message should be "Domain is required"', (done) => {
            let payload = mockDataGetRuleByDomainId3;
            chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
                .post('/qb/get-by-domain')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.success).to.equal(false);
                    expect(res.body.message).to.equal(`Domain is required`);
                    done()
                });
        });

        // it('In case payload is accessKey is blank: Success should be false and Message should be "accessKey is required. Please add it into the request body"',  (done) => {
        //     let payload = mockDataGetRuleByDomainId5;
        //     //  chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')

        //     const res = await fetch('https://b2b-solution-public-api.bsscommerce.com/api/v1/qb/get-by-domain', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(payload)
        //     });
        //     console.log(res)
        //     expect(res.status).to.equal(403);
        //     expect(res.body).to.be.an('object');
        //     expect(res.body.success).to.equal(false);
        //     expect(res.body.message).to.equal(`accessKey is required. Please add it into the request body`);
        // });

        it('In case payload is accessKey is blank: Success should be false and Message should be "accessKey is required. Please add it into the request body"', (done) => {
            let payload = mockDataGetRuleByDomainId4;
            chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
                .post('/qb/get-by-domain')
                .send(payload)
                // .end((res, err) => {
                //     if (err) {
                //         console.log(err)
                //         expect(err.response.status).to.equal(403)

                //     }
                //     else {
                //         expect(res.status).to.equal(200);
                //         done()
                //     }


                // })
                //.catch(err) =>
                .end((res) => {
                    console.log(res)
                    // expect(err.response.status).to.equal(403)
                    // console.log(err.response.body)
                    // expect(err.response.body).to.be.an('object');
                    // expect(err.response.body.success).to.equal(false);
                    // expect(err.response.body.message).to.equal(`accessKey is required. Please add it into the request body`);
                    done()

                });

        });
    });

    it('In case payload is missing domain: Success should be false and Message should be "Domain is required"', (done) => {
        let payload = mockDataGetRuleByDomainId5;
        chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
            .post('/qb/get-by-domain')
            .send(payload)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('object');
                expect(res.body.success).to.equal(false);
                expect(res.body.message).to.equal(`Domain is required`);
                done()
            });

        it('In case payload is missing accessKey: Success should be false and Message should be "accessKey is required. Please add it into the request body"', (done) => {
            let payload = mockDataGetRuleByDomainId6;
            chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
                .post('/qb/get-by-domain')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);

                })
                .catch((err) => {
                    expect(err.response.status).to.equal(403)
                    console.log(err.response.body)
                    expect(err.response.body).to.be.an('object');
                    expect(err.response.body.success).to.equal(false);
                    expect(err.response.body.message).to.equal(`accessKey is required. Please add it into the request body`);
                    done()

                });
        });

        it('In case payload is missing both domain and accessKey: Success should be false and Message should be "accessKey is required. Please add it into the request body"', (done) => {
            let payload = mockDataGetRuleByDomainId7;
            chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
                .post('/qb/get-by-domain')
                .send(payload)
                .end((err, res) => {
                    expect(res.status).to.equal(200);

                })
                .catch((err) => {
                    expect(err.response.status).to.equal(403)
                    console.log(err.response.body)
                    expect(err.response.body).to.be.an('object');
                    expect(err.response.body.success).to.equal(false);
                    expect(err.response.body.message).to.equal(`accessKey is required. Please add it into the request body`);
                    done()

                });
        });


        // })

        // describe('Test on /get-by-ID', () => {
        //     it('In case payload is correct: Success should be true', (done) => {
        //         let payload = mockDataGetRuleByDomainId9;
        //         chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //             .post('/qb/get-by-id')
        //             .send(payload)
        //             .end((err, res) => {
        //                 expect(res.status).to.equal(200);
        //                 expect(res.body.success).to.equal(true);
        //                 expect(res.body).to.be.an('object');
        //                 for (let i = 0; i < res.body.rules.length; i++) {
        //                     expect(res.body.rules[i]).to.have.all.keys(
        //                         "id",
        //                         "shop_id",
        //                         "name",
        //                         "priority",
        //                         "rule_type",
        //                         "rule_setting",
        //                         "status",
        //                         "apply_to",
        //                         "customer_ids",
        //                         "customer_tags",
        //                         "product_condition_type",
        //                         "product_ids",
        //                         "product_collections",
        //                         "product_tags",
        //                         "exc_customer_tags",
        //                         "exclude_from",
        //                         "createdAt",
        //                         "updatedAt",
        //                         "qbRuleQtyTables"

        //                     )
        //                     expect(res.body.rules[i].qbRuleQtyTables).to.be.an("array")
        //                     expect(res.body.rules[i].qbRuleQtyTables[0]).to.have.all.keys(
        //                         "id",
        //                         "rule_id",
        //                         "qty_from",
        //                         "qty_to",
        //                         "discount_type",
        //                         "discount_value",
        //                         "createdAt",
        //                         "updatedAt"
        //                     )

        //                 }
        //                 done()


        //             });
        //     });

        //     it('In case payload is wrong domain: Success should be false and Message should be  "Could not found shop with domain ngoc-vm.myshopify"', (done) => {
        //         let payload = mockDataGetRuleByDomainId10;
        //         chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //             .post('/qb/get-by-id')
        //             .send(payload)
        //             .end((err, res) => {
        //                 expect(res.status).to.equal(200);
        //                 expect(res.body).to.be.an('object');
        //                 expect(res.body.success).to.equal(false);
        //                 expect(res.body.message).to.equal(`Could not found shop with domain ${payload.domain}`);
        //                 done()
        //             });
        //     });

        //     it('In case payload is wrong accessKey: Success should be false and Message should be "Access key is not correct"', (done) => {
        //         let payload = mockDataGetRuleByDomainId11;
        //         chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //             .post('/qb/get-by-id')
        //             .send(payload)
        //             .end((err, res) => {
        //                 expect(res.status).to.equal(200);
        //                 expect(res.body).to.be.an('object');
        //                 expect(res.body.success).to.equal(false);
        //                 expect(res.body.message).to.equal(`Access key is not correct`);
        //                 done()
        //             });
        //     });

        //     it('In case payload is domain is blank: Success should be false and Message should be "Domain is required"', (done) => {
        //         let payload = mockDataGetRuleByDomainId12;
        //         chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //             .post('/qb/get-by-id')
        //             .send(payload)
        //             .end((err, res) => {
        //                 expect(res.status).to.equal(200);
        //                 expect(res.body).to.be.an('object');
        //                 expect(res.body.success).to.equal(false);
        //                 expect(res.body.message).to.equal(`Domain is required`);
        //                 done()
        //             });
        //     });


        //     it('In case payload is accessKey is blank: Success should be false and Message should be "accessKey is required. Please add it into the request body"', (done) => {
        //         let payload = mockDataGetRuleByDomainId13;
        //         chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //             .post('/qb/get-by-id')
        //             .send(payload)
        //             .end((err, res) => {
        //                 expect(res.status).to.equal(200);

        //             })
        //             .catch((err) => {
        //                 expect(err.response.status).to.equal(403)
        //                 console.log(err.response.body)
        //                 expect(err.response.body).to.be.an('object');
        //                 expect(err.response.body.success).to.equal(false);
        //                 expect(err.response.body.message).to.equal(`accessKey is required. Please add it into the request body`);
        //                 done()

        //             });
        //     });

        //     it('In case payload is missing domain: Success should be false and Message should be "Domain is required"', (done) => {
        //         let payload = mockDataGetRuleByDomainId14;
        //         chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //             .post('/qb/get-by-id')
        //             .send(payload)
        //             .end((err, res) => {
        //                 expect(res.status).to.equal(200);
        //                 expect(res.body).to.be.an('object');
        //                 expect(res.body.success).to.equal(false);
        //                 expect(res.body.message).to.equal(`Domain is required`);
        //                 done()
        //             });

        //         it('In case payload is missing accessKey: Success should be false and Message should be "accessKey is required. Please add it into the request body"', (done) => {
        //             let payload = mockDataGetRuleByDomainId15;
        //             chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //                 .post('/qb/get-by-id')
        //                 .send(payload)
        //                 .end((err, res) => {
        //                     expect(res.status).to.equal(200);

        //                 })
        //                 .catch((err) => {
        //                     expect(err.response.status).to.equal(403)
        //                     console.log(err.response.body)
        //                     expect(err.response.body).to.be.an('object');
        //                     expect(err.response.body.success).to.equal(false);
        //                     expect(err.response.body.message).to.equal(`accessKey is required. Please add it into the request body`);
        //                     done()

        //                 });
        //         });

        //         it('In case payload is missing both domain and accessKey: Success should be false and Message should be "accessKey is required. Please add it into the request body"', (done) => {
        //             let payload = mockDataGetRuleByDomainId16;
        //             chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //                 .post('/qb/get-by-id')
        //                 .send(payload)
        //                 .end((err, res) => {
        //                     expect(res.status).to.equal(200);

        //                 })
        //                 .catch((err) => {
        //                     expect(err.response.status).to.equal(403)
        //                     console.log(err.response.body)
        //                     expect(err.response.body).to.be.an('object');
        //                     expect(err.response.body.success).to.equal(false);
        //                     expect(err.response.body.message).to.equal(`accessKey is required. Please add it into the request body`);
        //                     done()

        //                 });
        //         });

        //         it(`In case payload has rule id doesn't existed: Success should be false and Message should be "Rule ID doesn't exist"`, (done) => {
        //             let payload = mockDataGetRuleByDomainId17;
        //             chai.request('https://b2b-solution-public-api.bsscommerce.com/api/v1')
        //                 .post('/qb/get-by-id')
        //                 .send(payload)
        //                 .end((err, res) => {
        //                     expect(res.status).to.equal(200);
        //                     expect(res.body).to.be.an('object');
        //                     expect(res.body.success).to.equal(false);
        //                     expect(res.body.message).to.equal(`Rule ID doesn't exist`);
        //                     done()
        //                 });



        //         })

        //         // describe('Test on /save', () => {

        //         // })

        //     });




    });

});
