import assert from 'assert';
import greet from '../greet';

describe("greet Bob Crow", function () {
    it("it should greet Bob Crow", function () {

        assert.equal("Hello, Bob Crow", greet({
            firstName: "Bob" ,
            lastName: "Crow",
            email:"" 


        }))
    })
})
describe("greet Bob Crow with his Email adress", function () {
    it("it should greet Bob Crow with his email account", function () {

        assert.equal("Hello, Bob Crow we will be in touch at: bob@crow.com", greet({
            firstName: "Bob",
            lastName: "Crow",
            email: " we will be in touch at: bob@crow.com"

        }))
    })
})
describe("greet Bob Crow without his Email adress", function () {
    it("it should greet Bob Crow with no email account", function () {

        assert.equal("Hello, Bob Crow we can't contact you", greet({
            firstName: "Bob",
            lastName: "Crow",
            email: " we can't contact you"

        }))
    })
})