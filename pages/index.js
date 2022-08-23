import AppLayout from "../components/AppLayout";
import {useSelector} from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
    const logInDone = useSelector((state) => state.user.logInDone)
    const mainPosts = useSelector((state) => state.post.mainPosts)
    return (
        <AppLayout selected={"home"}>
            {logInDone && <PostForm />}
            {mainPosts.map((post, index) => (<PostCard key={post.id} post={post} />))}
        </AppLayout>
    )
}

export default Home;
