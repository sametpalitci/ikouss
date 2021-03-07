const DashboardAddTask = () => {
    return (
        <div className="input-group input-group-sm mb-3">
            <input type="text" className="form-control" aria-label="Sizing example input"
                   aria-describedby="inputGroup-sizing-sm" placeholder={"Typing.."}/>
            <div className="input-group-append">
                <button className="btn btn-primary" id="inputGroup-sizing-sm">Send</button>
            </div>
        </div>
    );
}

export
{
    DashboardAddTask
}
    ;
