const add = (a, b) => a + b;
const generateGreeting = () => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should generate greeting with name', () => {
  name = 'Dennis';
  expect(name).toBe('Dennis');
});
