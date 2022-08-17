import PropTypes from "prop-types";

const PostImages = ({images}) => {
    return (
        <div>on construct..</div>
    )
}

export default PostImages;

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object)
}
