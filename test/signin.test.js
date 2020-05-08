const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("POST /users", () => {
  it("Signin using email and password", (done) => {
    chai
      .request(app)
      .post("/users")
      .send({
        email: "sid@gmail.com",
        password: "sid"
      })
      .end((err, res) => {
        expect(res.body).to.have.property('token')
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').to.equal('success')
        done();
      });
  });
  it("it should throw an error if email is invalid", async () => {
    const response = await chai.request(app).post("/users").send({
      "email": undefined,
      "password": "sid@123"
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message');
  });
  it("it should throw an error if password is invalid", async () => {
    const response = await chai.request(app).post("/users").send({
      "email": "someusername",
      "password": undefined
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message');
  });
  it("it should throw an error if user not found", async () => {
    const response = await chai.request(app).post("/users").send({
      "email": "sid123456@gmail.com",
      "password": "wrongpassword"
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message');
  });
  it("it should throw an error if password is wrong", async () => {
    const response = await chai.request(app).post("/users").send({
      "email": "sid@gmail.com",
      "password": "wrongpassword"
    })
      expect(response).to.have.status(400);
      expect(response.body).to.have.property('message');
  });
});
