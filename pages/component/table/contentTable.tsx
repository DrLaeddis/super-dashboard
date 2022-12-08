export default function ContentTable() {

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
        <div className="contentTable">
            <table>
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Content</th>
                        <th>Description</th>
                        <th colSpan={2}>Options</th>
                    </tr>

                    {
                        someIndex.map((data)=>{
                            return(
                                <tr key={data.key}>
                                    <td>{data.No}</td>
                                    <td>{data.Content}</td>
                                    <td>{data.Description}</td>
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