const Manager = require("../lib/Manager");

describe("Manager Class", () => {
  describe("Initialise Manager", () => {
    test("should create an object with a name, id, email and office number", () => {
      const manager = new Manager("John", 123, "abcdefg@abcdefg.hij", 206);

      expect(manager.name).toEqual("John");
      expect(manager.id).toEqual(123);
      expect(manager.email).toEqual("abcdefg@abcdefg.hij");
      expect(manager.officeNumber).toEqual(206);
    });
  });
});
