import {HeaderLanding, FooterLanding} from "../../components/account";
import '../../stylesheets/account/LandingStyle.css';
import {Link} from "react-router-dom";

const LandingScreen = () => {
    return (
        <>
            <HeaderLanding/>
            <div className={"container"}>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <div className="mt-5 d-flex align-items-center justify-content-center flex-column">
                            <h1 className={"text-light "}>
                                Your productivity<br/>
                                <span className={"text-warning"}>matters!</span>
                            </h1>
                            <h6 className={"text-muted"}>Increase your productivity, be cool. We are with you.</h6>
                            <div className="my-4 d-flex align-items-center justify-content-between flex-row w-50">
                                <Link to={"/account/login"} className={"text-light text-decoration-none"}>Login</Link>
                                <div className={"headerRightFieldBorder"}/>
                                <Link to={"/account/register"} className={"btn btn-outline-warning"}>Register</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="my-5 d-flex align-items-center justify-content-center flex-column">
                            <img src="/assets/img/home-img.png" className={"w-100 rounded"}/>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <FooterLanding/>
        </>
    );
}

export {LandingScreen};
