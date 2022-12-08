import { useRouter } from "next/router";
import HeadComponent from "../../component/head";
import HeaderAdmin from "../../component/header/headerAdmin";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";
import PostTable from "../../component/table/postTable";

export default function AdminPlaylist() {

    const router = useRouter();
    const href = '';

    return(
        <>
            <HeadComponent />
            <HeaderAdmin />
            <div className="container">
                <SidebarAdmin />
                <main className="content bgBackground">
                    <div className="contentHead">
                        <h2>Post</h2>

                        <div className="contentHeadFilter">
                            <input type="text" placeholder="search" name="" id="" />
                            <button onClick={() => router.push(href, undefined, { shallow: true })}>Add Post</button>
                        </div>
                    </div>

                    <p 
                    style={{
                        margin: '0px 0px 20px 0px'
                    }}>
                        This page for add new post
                    </p>

                    <PostTable />
                </main>
            </div>
        </>
    )
}