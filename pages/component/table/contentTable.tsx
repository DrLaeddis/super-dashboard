import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ContentTable() {

    const fetcher = (url: string) => fetch(url).then((r)=>r.json());
    const { data: content, error } = useSWR('/api/content', fetcher);
    // console.log("cek swr data", data);

    const someIndex = [];
    const date = new Date();
    for(var i = 1; i <= 10; i++) {
        someIndex.push({
            key: i.toString(),
            No: i,
            Content: `Content Name ${i}`,
            Description: `Description ${i}`,
        });
    }
    
    return(
    <>
        <div className="contentTable tb" style={{ borderRadius: "6px" }}>
            <table className="tb">
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Content</th>
                        <th>Description</th>
                        <th colSpan={2}>Options</th>
                    </tr>

                    {
                        content?.map((data: any)=>{
                            return(
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.contentName}</td>
                                    <td>{data.contentDesc}</td>
                                    <td>Edit &nbsp; Delete</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </>
    )
}