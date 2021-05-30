const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Justin N. Turner', '456789', 'intern.justin@thiscompany.net', 'Cornell University');

  expect(intern.name).toBe('Justin N. Turner');
  expect(intern.id).toBe('456789');
  expect(intern.email).toBe('intern.justin@thiscompany.net'); 
  expect(intern.role).toBe('Intern');
  expect(intern.school).toBe('Cornell University');
});

test("gets intern's name", () => {
  const intern = new Intern('Justin N. Turner', '456789', 'intern.justin@thiscompany.net', 'Cornell University');

  expect(intern.getName()).toBe('Justin N. Turner');
});

test("gets intern's id", () => {
  const intern = new Intern('Justin N. Turner', '456789', 'intern.justin@thiscompany.net', 'Cornell University');

  expect(intern.getId()).toBe('456789');
});

test("gets intern's email address", () => {
  const intern = new Intern('Justin N. Turner', '456789', 'intern.justin@thiscompany.net', 'Cornell University');

  expect(intern.getEmail()).toBe('intern.justin@thiscompany.net');
});

test("gets intern's role", () => {
  const intern = new Intern('Justin N. Turner', '456789', 'intern.justin@thiscompany.net', 'Cornell University');

  expect(intern.getRole()).toBe('Intern');
});

test("gets intern's school", () => {
  const intern = new Intern('Justin N. Turner', '456789', 'intern.justin@thiscompany.net', 'Cornell University');

  expect(intern.getSchool()).toBe('Cornell University');
});
