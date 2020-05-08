const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("POST users/userId/course/courseId/topic", () => {
  it("checking if course for the topic exists", (done) => {
    chai
      .request(app)
      .post("/users/1/course/12/topic")
      .send({
        title: "newtitle",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("success").to.equal(false);
        done();
      });
  });
});
