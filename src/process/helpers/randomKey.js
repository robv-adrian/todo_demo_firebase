const randomKey = () =>
  Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "");

export default randomKey;
