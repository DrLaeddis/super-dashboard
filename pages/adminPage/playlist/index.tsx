import { useRouter } from "next/router";
import HeadComponent from "../../component/head";
import HeaderAdmin from "../../component/header/headerAdmin";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";
import PostTable from "../../component/table/postTable";

export default function AdminPlaylist() {

    const router = useRouter();
    const href = '/adminPage/playlist/addPost';

    const row = [];
    for(var i = 1; i <= 20; i++) {
        row.push({
            key: i.toString(),
            No: i,
            PostTitle: `Content Name ${i}`,
            PostContent: `Post Content ${i}`,
            PostDesc: `Post Description ${i}`,
            Date: `Date ${i}`,
        });
    }

    const column = [
        { accessor: 'no', label: 'no' },
        { accessor: 'title', label: 'title' },
        { accessor: 'content', label: 'content' },
        { accessor: 'description', label: 'description' },
        { accessor: 'date', label: 'date' },
    ];

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

                    <PostTable column={column} row={row}  />
                </main>
            </div>
        </>
    )
}