const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("PUT /users/userID/course/courseId/topic/topicId/update", () => {
  it("updating a topic's title.", (done) => {
    chai
      .request(app)
      .put("/users/1/course/18/topic/11/update")
      .send({
        title: "sometitle009",
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("message").to.equal("success");
        done();
      });
  });
  
});
