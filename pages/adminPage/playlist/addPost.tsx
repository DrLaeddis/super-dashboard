import Link from "next/link";
import HeadComponent from "../../component/head";
import HeaderAdmin from "../../component/header/headerAdmin";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";

export default function AddPost() {
    return(
    <>
        <HeadComponent />
        <HeaderAdmin />
        <div className="container">
            <SidebarAdmin />
            <main className="content bgBackground">
                <h2>Add New Post</h2>

                <div className="addContentField">
                    <h5>Basic Information</h5>
                    <label htmlFor="">Section to add new post</label>

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
                                <button className="customBtn">Discard</button>
                            </Link>
                            <button className="customBtn">Add</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </>
    )
}