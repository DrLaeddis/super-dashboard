import { count } from "console";
import { useEffect, useState } from "react"

export default function Pagination(props: 
    {   activePage: any,
        count: any,
        rowsPerPage: any,
        setActivePage: any,
        totalPages: any, }){

    const beginning = props.activePage === 1 ? 1 : props.rowsPerPage * (props.activePage - 1) + 1;
    const end = props.activePage === props.totalPages ? props.count : beginning + props.rowsPerPage -1;

    return(
        <>
            <div className="pagination">
                <div className="paginationInfo">
                    <p>
                        Page {props.activePage} of {props.totalPages}
                    </p>

                    <p>
                        Rows: {beginning === end ? end : `${beginning} - ${end}`} of {props.count}
                    </p>
                </div>

                <div className="paginationBtn">
                    <button disabled={props.activePage === 1} onClick={() => props.setActivePage(1)}>
                        First
                    </button>

                    <button 
                    disabled={props.activePage === 1} onClick={() => props.setActivePage(props.activePage - 1)}>
                        Previous
                    </button>

                    <button disabled={props.activePage === props.totalPages} onClick={() => props.setActivePage(props.activePage + 1)}>
                        Next
                    </button>

                    <button disabled={props.activePage === props.totalPages} onClick={() => props.setActivePage(props.totalPages)}>
                        Last
                    </button>
                </div>
            </div>
        </>
    )
}