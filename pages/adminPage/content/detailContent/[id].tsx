import Link from "next/link";
import { useEffect } from "react";
import HeadComponent from "../../../component/head";
import HeaderAdmin from "../../../component/header/headerAdmin";
import SidebarAdmin from "../../../component/sidebar/sidebarAdmin";

export default function EditContent(props: any) {

    useEffect(()=>{
        console.log("cek props edit", props);
    }, [])

    return(
    <>
        <HeadComponent />
        <HeaderAdmin />
        <div className="container">
            <SidebarAdmin />
            <main className="content bgBackground">
                <div className="contentHead">
                    <h2>Edit Content</h2>

                    <div className="contentHeadFilter">
                        <button>Save</button>
                        <button>Delete</button>
                    </div>

                </div>

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
                    </div>
                </form>

            </main>
        </div>
    </>
    )
}