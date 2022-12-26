import Link from "next/link";
import HeadComponent from "../../../component/head";
import HeaderAdmin from "../../../component/header/headerAdmin";
import SidebarAdmin from "../../../component/sidebar/sidebarAdmin";

export default function DetailPlaylist(props: any) {
    return (
    <>
        <HeadComponent />
        <HeaderAdmin />
        <div className="container">
            <SidebarAdmin />
            <main className="content bgBackground">

                <div className="contentHead">
                    <h2>Edit Playlist</h2>

                    <div className="contentHeadFilter">
                        <button>Save</button>
                        <button>Delete</button>
                    </div>
                </div>

                <form action="" method="post">
                    <div className="addContentForm"> 
                        <label className="addContentLabel" htmlFor="">Post Title</label>
                        <input type="text" name="" id="" placeholder="Post Title" />
                    </div>

                    <div className="addContentForm"> 
                        <label className="addContentLabel" htmlFor="content">Post Content</label>
                        <select className="addContentDb" name="content" id="content">
                            <option value="Programming">Programming</option>
                            <option value="Sport">Sport</option>
                            <option value="E-Sport">E-Sport</option>
                        </select>
                    </div>

                    <div className="addContentForm">
                        <label className="addContentLabel" htmlFor="">Post Description</label>
                        <textarea name="" id="" placeholder="Description"></textarea>
                    </div>

                    <div className="addContentBtn">
                        <Link href="/adminPage/playlist">
                            <button className="customBtn">Back</button>
                        </Link>
                    </div>
                </form>

            </main>
        </div>
    </>
    )
}