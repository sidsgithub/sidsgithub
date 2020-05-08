const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("PUT /users/userId/course/courseId/update", () => {
  it("creating a course's title.", (done) => {
    chai
      .request(app)
      .put("/users/1/course/11/update")
      .send({
        title: "sometitle009",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("message").to.equal("success");
        done();
      });
  });
  it("it should throw an error if title is invalid", async () => {
    const response = await chai.request(app)
    .put("/users/1/course/11/update")
    .send({
      title: undefined,
    });
    expect(response).to.have.status(400);
    expect(response.body).to.have.property("message");
  });
});
