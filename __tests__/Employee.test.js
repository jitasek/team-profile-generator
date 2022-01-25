const Employee = require("../lib/Employee");

// describe block for Employee test
//describe("Employee Class", () => {
describe("Initialise Employee", () => {
  // test block (function with two parameters: title, callback )
  test("should create an object with a name, id and email", () => {
    // Set up instance of the class with expected result
    const employee = new Employee("John", 123, "abcdefg@abcdefg.hij");

    // Assertion
    expect(employee.name).toEqual("John");
    expect(employee.id).toEqual(123);
    expect(employee.email).toEqual("abcdefg@abcdefg.hij");
  });
});
//});
