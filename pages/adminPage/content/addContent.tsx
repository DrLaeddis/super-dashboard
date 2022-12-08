import Link from "next/link";
import HeadComponent from "../../component/head";
import HeaderAdmin from "../../component/header/headerAdmin";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";

export default function AddContent() {

    return(
    <>
        <HeadComponent />
        <HeaderAdmin />
        <div className="container">
            <SidebarAdmin />
            <main className="content bgBackground">
                <h2>Add New Content</h2>

                <div className="addContentField">
                    <h5>Basic Information</h5>
                    <label htmlFor="">Section to config basic content information</label>

                    <form action="" method="post">
                        <div className="addContentForm"> 
                            <label className="addContentLabel" htmlFor="">Content Name</label>
                            <input type="text" name="" id="" placeholder="Content Name" />
                        </div>

                        <div className="addContentForm">
                            <label className="addContentLabel" htmlFor="">Content Description</label>
                            <textarea name="" id="" placeholder="Description"></textarea>
                        </div>

                        <div className="addContentBtn">
                            <Link href="/adminPage/content">
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