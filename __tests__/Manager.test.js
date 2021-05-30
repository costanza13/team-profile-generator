const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Jane DeBoss', '234567', 'jane.s.deboss@thiscompany.net', 237);

  expect(manager.name).toBe('Jane DeBoss');
  expect(manager.id).toBe('234567');
  expect(manager.email).toBe('jane.s.deboss@thiscompany.net');
  expect(manager.role).toBe('Manager');
  expect(manager.officeNumber).toBe(237);
});

test("gets manager's name", () => {
  const manager = new Manager('Jane DeBoss', '234567', 'jane.s.deboss@thiscompany.net', 237);

  expect(manager.getName()).toBe('Jane DeBoss');
});

test("gets manager's id", () => {
  const manager = new Manager('Jane DeBoss', '234567', 'jane.s.deboss@thiscompany.net', 237);

  expect(manager.getId()).toBe('234567');
});

test("gets manager's email address", () => {
  const manager = new Manager('Jane DeBoss', '234567', 'jane.s.deboss@thiscompany.net', 237);

  expect(manager.getEmail()).toBe('jane.s.deboss@thiscompany.net');
});

test("gets manager's role", () => {
  const manager = new Manager('Jane DeBoss', '234567', 'jane.s.deboss@thiscompany.net', 237);

  expect(manager.getRole()).toBe('Manager');
});

test("gets manager's office number", () => {
  const manager = new Manager('Jane DeBoss', '234567', 'jane.s.deboss@thiscompany.net', 237);

  expect(manager.getOfficeNumber()).toBe(237);
});
