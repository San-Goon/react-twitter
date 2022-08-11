import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
    const followerList = [{nickname: "강훈"},{nickname: "천재"},{nickname: "지롱"}]
    const followingList = [{nickname: "강훈"},{nickname: "천재"},{nickname: "지롱"}]

    return (
        <>
            <Head>
                <title>프로필 | twitter</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header={"팔로잉 목록"} data={followingList} />
                <FollowList header={"팔로워 목록"} data={followerList} />
            </AppLayout>
        </>
    )
}

export default Profile;
