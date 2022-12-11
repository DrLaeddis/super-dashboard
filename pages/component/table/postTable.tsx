import { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";

export default function PostTable(props: any) {

    const [getColumn, setGetColumn] = useState(props.column)
    const [getRow, setGetRow] = useState(props.row)
    const [activePage, setActivePage] = useState(1)
    const rowsPerPage = 10
    const count = getRow.length
    const totalPage = Math.ceil(count / rowsPerPage)
    const calculatedRows = getRow.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)

    return(
    <>
        <p>this is post table</p>
        <div className="contentTable tb" style={{ borderRadius: "6px" }}>
            <table className="tb" >
                <tbody>
                    <tr>
                        {
                            getColumn.map((column: any)=>{
                                return <th key={column.accessor}>{column.label}</th>
                            })
                        }
                    </tr>

                    {
                        getRow.map((row: any)=>{
                            return(
                            <tr key={row.key}>
                                <td>{row.No}</td>
                                <td>{row.PostTitle}</td>
                                <td>{row.PostContent}</td>
                                <td>{row.PostDesc}</td>
                                <td>{row.Date}</td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <Pagination 
                activePage={activePage}
                count={count}
                rowsPerPage={rowsPerPage}
                totalPages={totalPage}
                setActivePage={setActivePage}
            />
        </div>
    </>
    )
}