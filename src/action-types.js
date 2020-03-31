const prefix = "comments";

export default [
  "ADD_COMMENT_TRIGGER",
  "ADD_COMMENT",
  "ADD_COMMENT_SUCCESS"
].reduce((acc, curr) => {
  return {
    ...acc,
    [curr]: `${prefix}/${curr}`
  };
}, {});
