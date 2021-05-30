const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Ann N. Jinier', '345678', 'ann.jinier@thiscompany.net', 'njin33rann');

  expect(engineer.name).toBe('Ann N. Jinier');
  expect(engineer.id).toBe('345678');
  expect(engineer.email).toBe('ann.jinier@thiscompany.net'); 
  expect(engineer.role).toBe('Engineer');
  expect(engineer.github).toBe('njin33rann');
});

test("gets engineer's name", () => {
  const engineer = new Engineer('Ann N. Jinier', '345678', 'ann.jinier@thiscompany.net', 'njin33rann');

  expect(engineer.getName()).toBe('Ann N. Jinier');
});

test("gets engineer's id", () => {
  const engineer = new Engineer('Ann N. Jinier', '345678', 'ann.jinier@thiscompany.net', 'njin33rann');

  expect(engineer.getId()).toBe('345678');
});

test("gets engineer's email address", () => {
  const engineer = new Engineer('Ann N. Jinier', '345678', 'ann.jinier@thiscompany.net', 'njin33rann');

  expect(engineer.getEmail()).toBe('ann.jinier@thiscompany.net');
});

test("gets engineer's role", () => {
  const engineer = new Engineer('Ann N. Jinier', '345678', 'ann.jinier@thiscompany.net', 'njin33rann');

  expect(engineer.getRole()).toBe('Engineer');
});

test("gets engineer's github username", () => {
  const engineer = new Engineer('Ann N. Jinier', '345678', 'ann.jinier@thiscompany.net', 'njin33rann');

  expect(engineer.getGithub()).toBe('njin33rann');
});
