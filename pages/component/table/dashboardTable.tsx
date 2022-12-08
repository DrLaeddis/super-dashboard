export default function DashboardTable() {

    const someIndex = [];
    for( var i = 1; i <= 5; i++) {
        someIndex.push({
            key: i.toString(),
            No: i,
            Page: `Dashboard ${i}`,
            LastActivity: `Update Dashboard ${i}`,
            Date: `today ${i}`,
            User: `Ahmad ${i}`,
        });
    }

    return(
        <>
            <div className="cardContainer width-75">
                <div className="extraZone">
                    <h3>Aktifitas Terakhir</h3>
                    <table className="tb">
                        <tbody>
                            <tr>
                                <th>No</th>
                                <th>Page</th>
                                <th>Last Activity</th>
                                <th>Date</th>
                                <th>User</th>
                            </tr>

                            {
                                someIndex.map((data) => {
                                    return(
                                        <tr key={data.key}>
                                            <td>{data.No}</td>
                                            <td>{data.Page}</td>
                                            <td>{data.LastActivity}</td>
                                            <td>{data.Date}</td>
                                            <td>{data.User}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}