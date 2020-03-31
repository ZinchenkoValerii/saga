import React, { useState } from "react";
import { connect } from "react-redux";

import t from "./action-types";

const CommentForm = ({ dispatch }) => {
  const [content, setContent] = useState("");
  const handleAddComment = e => {
    const comment = {
      author: "Me",
      content,
      createdAt: new Date()
    };
    dispatch({ type: t.ADD_COMMENT_TRIGGER, comment });
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={e => {
          e.persist();
          setContent(e.target.value);
        }}
      />
      <button onClick={handleAddComment}>Add</button>
    </div>
  );
};

export default connect(() => ({}))(CommentForm);
