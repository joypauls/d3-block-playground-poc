function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomIntArray(min, max, length) {
  return Array.from({ length }, () => randomInt(min, max));
}

export { randomInt, randomIntArray };
