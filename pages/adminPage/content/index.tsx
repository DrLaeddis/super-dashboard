import { useRouter } from "next/router";
import HeadComponent from "../../component/head";
import HeaderAdmin from "../../component/header/headerAdmin";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";
import ContentTable from "../../component/table/contentTable";

export default function AdminContent() {

    const router = useRouter();
    const href = `/adminPage/content/addContent`

    return(
        <>
            <HeadComponent />
            <HeaderAdmin />
            <div className="container">
                <SidebarAdmin />
                <main className="content bgBackground">
                    <div className="contentHead">
                        <h2>Content</h2>

                        <div className="contentHeadFilter">
                            <input type="text" placeholder="search" name="" id="" />
                            <button onClick={() => router.push(href, undefined, { shallow: true })}>Add Content</button>
                        </div>
                    </div>

                    <p 
                    style={{
                        margin: '0px 0px 20px 0px'
                    }}>
                        This page for add new content(category)
                    </p>
                    
                    <ContentTable />
                </main>
            </div>
        </>
    )
}