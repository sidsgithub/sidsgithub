const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("POST /users/userId/course", () => {
  it("creating a course", (done) => {
    chai
      .request(app)
      .post("/users/1/course")
      .send({
        title: "newCourse4",
        description: "some description done",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("message").to.equal("success");
        done();
      });
  });
  it("it should throw an error if title does not exist", async () => {
    const response = await chai.request(app).post("/createusers").send({
      description: "some description done",
    });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property("message");
  });
});
