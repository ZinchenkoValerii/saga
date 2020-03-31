import t from "./action-types";

const commentsReducer = (
  state = {
    loading: false,
    comments: []
  },
  action
) => {
  switch (action.type) {
    case t.ADD_COMMENT:
      return {
        ...state,
        loading: true
      };
    case t.ADD_COMMENT_SUCCESS:
      return {
        loading: false,
        comments: [...state.comments, action.comment]
      };
    default:
      return state;
  }
};

export default commentsReducer;
