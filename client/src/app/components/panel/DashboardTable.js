const DashboardTable = () => {
    return (
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, amet at beatae consectetur
                    doloremque eius facere harum impedit iste, nemo nulla numquam praesentium, quae quam quis repellat
                    saepe sapiente voluptatum.
                </td>
                <td>
                    <button className={"btn btn-warning"}>Update</button>
                </td>
                <td>
                    <button className={"btn btn-danger"}>Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export {DashboardTable};
