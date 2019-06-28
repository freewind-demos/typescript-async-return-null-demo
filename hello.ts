async function hello(name: string): Promise<string | null> {
  if (name.length === 0) {
    return null;
  } else {
    return `Hello, ${name}!`
  }
}

(async function () {
  const result1 = await hello('');
  console.log(result1);

  const result2 = await hello('typescript');
  console.log(result2);
})();
