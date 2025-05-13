function stringChop(str, size) {
	size = Number(size); // fix: ensure it's a number

  if (str === null) {
    return [];
  }

  const result = [];

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));