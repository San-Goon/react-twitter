import PropTypes from "prop-types";
import {Button} from "antd";
import {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {FOLLOW_REQUEST, UNFOLLOW_REQUEST} from "../reducers/user";

const FollowButton = ({post}) => {
    const me  = useSelector((state) => state.user.me);
    const followLoading = useSelector((state) => state.user.followLoading)
    const unfollowLoading = useSelector((state) => state.user.unfollowLoading)

    const dispatch = useDispatch();

    const isFollowing = me?.Followings.find((v) => v.id === post.User.id);

    const onClickButton = useCallback(() => {
        if (isFollowing) {
            dispatch({
                type: UNFOLLOW_REQUEST,
                data: post.User.id,
            })
        } else {
            dispatch({
                type: FOLLOW_REQUEST,
                data: post.User.id,
            })
        }
    },[isFollowing]);

    return (
        <Button loading={followLoading || unfollowLoading} onClick={onClickButton}>
            {isFollowing ? "언팔로우" : "팔로우"}
        </Button>
    )
}

FollowButton.propTypes = {
    post: PropTypes.object.isRequired,
}

export default FollowButton;



