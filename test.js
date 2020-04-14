const test = require("tape");
const supertest = require('supertest');
const router = require('./src/router')

test("Initialise", t => {
    let num = 2;
    t.equal(num,2,"Should return 2");
    t.end();
})

test("Home route returns a status code of 200", t => {

    supertest(router)
    .get("/")
    .expect(200)
    .expect("content-type",  "text/html")
    .end((err,res) => {
       t.error(err)
       t.equal(res.text.substring(0,5), "<!DOC");
       t.end(); 
    });
});
