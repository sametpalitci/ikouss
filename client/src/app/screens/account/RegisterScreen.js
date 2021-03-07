import {
    HeaderLanding,
    FooterLanding
} from "../../components/account";
import '../../stylesheets/account/LandingStyle.css';
import {Link} from "react-router-dom";


const RegisterScreen = () => {
    return (
        <>
            <HeaderLanding/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="my-5 mx-5 d-flex flex-column">

                            <h1 className={"text-light my-2"}>
                                Register for<br/>
                                <span className={"text-warning"}>more!</span>
                            </h1>
                            <form className={"accountInputs"}>
                                <div className="row">
                                    <div className="col-lg-12 my-2">
                                        <input type="email" className="form-control" placeholder="E-mail"/>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <input type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <input type="password" className="form-control" placeholder="Password Confirm"/>
                                    </div>
                                    <div className="col-lg-12 my-2">
                                        <button type="submit" className="form-control btn btn-warning"
                                                placeholder="Last name">Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="my-4 accountImage d-flex align-items-center justify-content-center">
                            <img src="/assets/img/accountRegister.svg"/>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <FooterLanding/>
        </>
    );
}
export
{
    RegisterScreen
}
    ;
