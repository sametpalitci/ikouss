import {Link} from "react-router-dom";

const HeaderLanding = () => {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className="col-md-12">
                    <div className="my-4 d-flex align-items-center justify-content-between flex-row">
                        <div className={"headerLeftLogo d-flex align-items-center justify-content-center"}>
                            <Link to={"/"}>
                                <img src={"/assets/img/logolight.png"} className={"img-fluid"}/>
                            </Link>
                        </div>
                        <div className={"headerRightField d-flex align-items-center justify-content-between flex-row"}>
                            <Link to={"/"} className={"text-decoration-none text-light"}>
                                Home
                            </Link>
                            <Link to={"/"} className={"text-decoration-none text-light"}>
                                Contact
                            </Link>
                            <div className={"headerRightFieldBorder"}/>
                            <Link to={"/account/login"} className={"text-decoration-none text-light"}>
                                Login
                            </Link>
                            <Link to={"/account/register"} className={"btn btn-outline-warning"}>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {HeaderLanding};
