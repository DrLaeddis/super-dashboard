import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Pagination from "../pagination/pagination";

export default function PostTable(props: any) {

    const [getColumn, setGetColumn] = useState(props.column)
    const [getRow, setGetRow] = useState(props.row)
    const [activePage, setActivePage] = useState(1)
    const router = useRouter();

    const rowsPerPage = 10
    const count = getRow.length
    const totalPage = Math.ceil(count / rowsPerPage)
    const calculatedRows = getRow.slice((activePage - 1) * rowsPerPage, activePage * rowsPerPage)

    const handleGoToDetail = (id: any) => {
        router.push('/adminPage/playlist/detailPlaylist/'+id)
    }

    return(
    <>
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
                        calculatedRows.map((row: any)=>{
                            return(
                            <tr key={row.key} onClick={(e) => handleGoToDetail(row.No)}>
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