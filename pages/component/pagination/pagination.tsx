import { useEffect } from "react"

export default function Pagination(props: any) {

    useEffect(()=>{
        console.log("cek", props);
    }, [])

    return(
        <>
            <div className="pagination">
                <button>
                    First
                </button>
                <button>
                    Previous
                </button>
                <button>
                    Next
                </button>
                <button>
                    Last
                </button>

                <p>
                    Page of
                </p>

                <p>
                    Rows: end of
                </p>
            </div>
        </>
    )
}