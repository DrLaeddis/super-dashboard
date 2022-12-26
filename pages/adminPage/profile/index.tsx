import Link from "next/link";
import HeadComponent from "../../component/head";
import HeaderAdmin from "../../component/header/headerAdmin";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";

export default function AdminProfile() {
    return(
    <>
        <HeadComponent />
        <HeaderAdmin />
        <div className="container">
            <SidebarAdmin />
            <main className="content bgBackground">
                <div className="contentHead">
                    <h2>Profile</h2>
                </div>

                <form action="" method="post">
                    <div className="profileField">
                        <div className="profileFieldName">
                            <div className="addContentForm"> 
                                <label className="addContentLabel" htmlFor="">Full Name</label>
                                <input type="text" name="" id="" placeholder="Full Name" />
                            </div>
    
                            <div className="addContentForm"> 
                                <label className="addContentLabel" htmlFor="">Nickname</label>
                                <input type="text" name="" id="" placeholder="Nickname" />
                            </div>
                        </div>

                        <div className="profileFieldAddress">
                            <div className="addContentForm"> 
                                <label className="addContentLabel" htmlFor="">Email</label>
                                <input type="email" name="" id="" placeholder="Email" />
                            </div>
    
                            <div className="addContentForm"> 
                                <label className="addContentLabel" htmlFor="content">Address</label>
                                <input type="text" name="" id="" placeholder="Address" />
                            </div>
                        </div>

                        <div className="addContentBtn">
                            <Link href="#">
                                <button className="customBtn">Save</button>
                            </Link>
                        </div>
                    </div>

                    <div className="profileField">

                        <div className="addContentForm" style={{width: "49%"}}> 
                            <label className="addContentLabel" htmlFor="">Current Password</label>
                            <input type="text" name="" id="" placeholder="Current Password" />
                        </div>

                        <div className="profileFieldName">

                            <div className="addContentForm"> 
                                <label className="addContentLabel" htmlFor="">New Password</label>
                                <input type="text" name="" id="" placeholder="New Password" />
                            </div>

                            <div className="addContentForm"> 
                                <label className="addContentLabel" htmlFor="">Confirm New Password</label>
                                <input type="text" name="" id="" placeholder="Confirm New Password" />
                            </div>
                        </div>

                        <div className="addContentBtn">
                            <Link href="#">
                                <button className="customBtn">Save</button>
                            </Link>
                        </div>
                    </div>
                </form>
                
            </main>
        </div>
    </>
    )
}