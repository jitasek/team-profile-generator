const Intern = require("../lib/Intern");

describe("Intern Class", () => {
  describe("Initialise Intern", () => {
    test("should create an object with a name, id, email and school", () => {
      const intern = new Intern("John", 123, "abcdefg@abcdefg.hij", "MIT");

      expect(intern.name).toEqual("John");
      expect(intern.id).toEqual(123);
      expect(intern.email).toEqual("abcdefg@abcdefg.hij");
      expect(intern.school).toEqual("MIT");
    });
  });
});
