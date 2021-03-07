import '../../stylesheets/panel/PanelSidebar.css'

const PanelInclusive = ({children}) => {
    return (
        <div className="wrapper">
            <nav id="sidebar">
                <div className="sidebar-header d-flex align-items-center justify-content-center">
                    <img src="/assets/img/logolight.png" alt="" className={"w-50"}/>
                </div>

                <ul className="list-unstyled components">
                    <p>Menu</p>
                    <li className="active">
                        <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                           className="dropdown-toggle">Todo</a>
                        <ul className="collapse list-unstyled" id="homeSubmenu">
                            <li>
                                <a href="#">History</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

            </nav>

            <div id="content">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">

                        <button type="button" id="sidebarCollapse" className="btn btn-info d-block d-lg-none">
                            <i className="fas fa-align-left"></i>
                            <span>Menu</span>
                        </button>
                        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button"
                                data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <i className="fas fa-align-justify"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="d-flex align-items-end justify-content-end w-100">
                                <li className="nav-item active">
                                    <span className="nav-link text-light fs-5" h><span
                                        className={"text-warning"}>Hi,</span> how is going?</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={"px-5"}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export {PanelInclusive};
