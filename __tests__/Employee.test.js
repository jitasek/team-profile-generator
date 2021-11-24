const Employee = require("../lib/Employee");

describe("Employee Class", () => {
  describe("Initialise Employee", () => {
    test("should create an object with a name, id and email", () => {
      const employee = new Employee("John", 123, "abcdefg@abcdefg.hij");

      expect(employee.name).toEqual("John");
      expect(employee.id).toEqual(123);
      expect(employee.email).toEqual("abcdefg@abcdefg.hij");
    });
  });
});
