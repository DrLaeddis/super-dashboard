import { useEffect, useState } from "react";
import CardComponent from "../../component/cards/cardComponent";
import SingleCard from "../../component/cards/singleCard";
import ChartBar from "../../component/chart/Bar";
import HeadComponent from "../../component/head";
import HeaderAdmin from "../../component/header/headerAdmin";
import SidebarAdmin from "../../component/sidebar/sidebarAdmin";
import DashboardTable from "../../component/table/dashboardTable";
import { UserData } from "../../Dummy";

export default function AdminDashboard() {

    return(
        <>
            <HeadComponent />
            <HeaderAdmin />
            <div className="container">
                <SidebarAdmin />
                <main className="content bgBackground">
                    <CardComponent />
                    <ChartBar />

                    <div className="flat">
                        <DashboardTable />
                        <SingleCard />
                    </div>
                </main>
            </div>
        </>
    )
}