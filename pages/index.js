import AppLayout from "../components/AppLayout";
import {useDispatch, useSelector} from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import {useEffect} from "react";
import {LOAD_POSTS_REQUEST} from "../reducers/post";

const Home = () => {
    const me = useSelector((state) => state.user.me)
    const mainPosts = useSelector((state) => state.post.mainPosts)
    const hasMorePost = useSelector((state) => state.post.hasMorePost)
    const loadPostsLoading = useSelector((state) => state.post.loadPostsLoading)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: LOAD_POSTS_REQUEST})
    },[])

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePost && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                    })
                }
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    },[hasMorePost, loadPostsLoading])

    return (
        <AppLayout selected={"home"}>
            {me && <PostForm />}
            {mainPosts.map((post, index) => (<PostCard key={post.id} post={post} />))}
        </AppLayout>
    )
}

export default Home;
