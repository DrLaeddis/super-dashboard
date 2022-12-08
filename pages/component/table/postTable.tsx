export default function PostTable() {

    const someIndex = [];
    for(var i = 1; i <= 10; i++) {
        someIndex.push({
            key: i.toString(),
            No: i,
            PostTitle: `Content Name ${i}`,
            PostContent: `Post Content ${i}`,
            PostDesc: `Post Description ${i}`,
            Date: `Date ${i}`,
            Admin: `Hendro ${i}`,
        });
    }

    return(
    <>
        <div className="contentTable">
            <p>this is post table</p>
            <table>
                <tbody>
                    <tr>
                        <th>No</th>
                        <th>Post Title</th>
                        <th>Post Content</th>
                        <th>Post Description</th>
                        <th colSpan={2}>Option</th>
                    </tr>

                    {
                        someIndex.map((data)=>{
                            return(
                            <tr key={data.key}>
                                <td>{data.No}</td>
                                <td>{data.PostTitle}</td>
                                <td>{data.PostContent}</td>
                                <td>{data.PostDesc}</td>
                                <td>Detail | Edit | Delete</td>
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