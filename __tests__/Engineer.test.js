const Engineer = require("../lib/Engineer");

//describe("Engineer Class", () => {
describe("Initialise Engineer", () => {
  test("should create an object with a name, id, email and github", () => {
    const engineer = new Engineer(
      "John",
      123,
      "abcdefg@abcdefg.hij",
      "enggithubname"
    );

    expect(engineer.name).toEqual("John");
    expect(engineer.id).toEqual(123);
    expect(engineer.email).toEqual("abcdefg@abcdefg.hij");
    expect(engineer.github).toEqual("enggithubname");
  });
});
//});
