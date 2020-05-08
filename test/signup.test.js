const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("POST /createusers", () => {
  it("Signing up a user", (done) => {
    chai
      .request(app)
      .post("/createusers")
      .send({
        name: "siddharth",
        email: "sid@gmail.com",
        password: "sid",
        profession: "developer",
        role: "admin",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').to.equal('success')
        done();
      });
  });
  it("it should throw an error if username is invalid", async () => {
    const response = await chai.request(app).post("/createusers").send({
      "email": undefined,
      "password": "sid@123"
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message');
  });
  it("it should throw an error if password is invalid", async () => {
    const response = await chai.request(app).post("/createusers").send({
      "email": "someusername",
      "password": undefined
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message');
  });
});
