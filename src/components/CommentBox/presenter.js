import React from "react";
import PropTypes from "prop-types";
import Textarea from "react-textarea-autosize";
import styles from "./styles.scss";

const CommentBox = (props, context) => (
    <form className={styles.commentBox}>
        <Textarea
            className={styles.input}
            placeholder={context.t("Add a comment...")}
            value={props.comment}
            onChange={props.handleInputChange}
            onKeyPress={props.handleKeyPress}
            // 원래 input이나 textarea에는 이렇게 ref={props.innerRef} 사용
            inputRef={props.innerRef}
        />
    </form>
);

CommentBox.contextTypes = {
    t: PropTypes.func.isRequired
};

CommentBox.propTypes = {
    handleInputChange: PropTypes.func.isRequired,
    handleKeyPress: PropTypes.func.isRequired,
    comment: PropTypes.string.isRequired,
    photoId: PropTypes.number.isRequired,
    innerRef: PropTypes.func.isRequired
};

export default CommentBox;