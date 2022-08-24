import {Button, Form, Input} from "antd";
import {useCallback, useEffect} from "react";
import useInput from "../hooks/useInput";
import PropTypes from "prop-types";
import {useDispatch, useSelector} from "react-redux";
import {ADD_COMMENT_REQUEST} from "../reducers/post";

const CommentForm = ({ post }) => {
    const [commentText, onChangeCommentText, , setComment] = useInput("");

    const id = useSelector((state) => state.user.me?.id);
    const addCommentDone = useSelector((state) => state.post.addCommentDone);
    const addCommentLoading = useSelector((state) => state.post.addCommentLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        if (addCommentDone) setComment("")
    }, [addCommentDone])

    const onSubmitComment = useCallback(() => {
        dispatch({ type: ADD_COMMENT_REQUEST, data: {content: commentText, postId: post.id, userId: id}})
    },[commentText, id])

    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{position: "absolute", right: 0, bottom: -40}} type={"primary"} htmlType={"submit"} loading={addCommentLoading}>삐약</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
}

export default CommentForm;
