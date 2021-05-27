const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Joe Workerman', '123456', 'joe@workerman.net');

  expect(employee.name).toBe('Joe Workerman');
  expect(employee.id).toBe('123456');
  expect(employee.email).toBe('joe@workerman.net');
  expect(employee.role).toBe('Employee');
});

test("gets employee's name", () => {
  const employee = new Employee('Joe Workerman', '123456', 'joe@workerman.net');

  expect(employee.getName()).toBe('Joe Workerman');
});

test("gets employee's id", () => {
  const employee = new Employee('Joe Workerman', '123456', 'joe@workerman.net');

  expect(employee.getId()).toBe('123456');
});

test("gets employee's email address", () => {
  const employee = new Employee('Joe Workerman', '123456', 'joe@workerman.net');

  expect(employee.getEmail()).toBe('joe@workerman.net');
});

test("gets employee's role", () => {
  const employee = new Employee('Joe Workerman', '123456', 'joe@workerman.net');

  expect(employee.getRole()).toBe('Employee');
});

