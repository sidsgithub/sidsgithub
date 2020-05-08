const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);

describe("DELETE /deletecourse", () => {
  it("it should delete a course", async () => {
    const response = await chai
      .request(app)
      .put("/users/1/course/109")
    expect(response.body).to.have.property('message')
    expect(response.body).to.have.property('course').to.equal(1)
    expect(response).to.have.status(200)
  });
  it("it should throw an error if id is undefined in delete transaction", async () => {
    const response = await chai
      .request(app)
      .put("/users/1/course/"+undefined)
    expect(response.body).to.have.property('success').to.equal(false)
  
});
});
