import AppLayout from "../components/AppLayout";
import {useSelector} from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
    const me = useSelector((state) => state.user.me)
    const mainPosts = useSelector((state) => state.post.mainPosts)
    return (
        <AppLayout selected={"home"}>
            {me && <PostForm />}
            {mainPosts.map((post, index) => (<PostCard key={post.id} post={post} />))}
        </AppLayout>
    )
}

export default Home;
