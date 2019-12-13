import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>
                <header className="masthead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9col-lg-8 col-md-10 mx-auto dark-bg">
                                <div className="col-xl-12 mx-auto">
                                    <h1 className="mb-5">A good strategy will carry you right through retirement</h1>
                                </div>
                                <div className="col-md-12 col-lg-12 col-xl-12 mx-auto">
                                    <form action="/register" method="GET">
                                        <div className="form-row">
                                            <div className="col-12 col-md-9 mb-2 mb-md-0">
                                                <input name="email" type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <button type="submit" className="btn btn-block btn-lg btn-brand-1">Sign up!</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="features-icons bg-light text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <span className="fa-stack fa-3x m-auto">
                                            <i class="fa fa-circle fa-stack-2x color-1"></i>
                                            <i className="color-1-dark fa fa-paperclip fa-stack-1x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <h3>Feature 1</h3>
                                    <p className="lead mb-0">A few words explaining this feature or aspect</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <span className="fa-stack fa-3x m-auto">
                                            <i class="fa fa-circle fa-stack-2x color-2"></i>
                                            <i className="color-2-dark fa fa-pencil fa-stack-1x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <h3>Feature 2</h3>
                                    <p className="lead mb-0">A few words explaining this feature or aspect</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                                    <div className="features-icons-icon d-flex">
                                        <span className="fa-stack fa-3x m-auto">
                                            <i class="fa fa-circle fa-stack-2x color-3"></i>
                                            <i className="color-3-dark fa fa-cog fa-stack-1x" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <h3>Feature 3</h3>
                                    <p className="lead mb-0">A few words explaining this feature or aspect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="showcase">
                    <div className="container-fluid p-0">
                        <div className="row mw-100">

                            <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-1"></div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>A Short Heading</h2>
                                <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </div>
                        </div>
                        <div className="row mw-100">
                            <div className="col-lg-6 text-white showcase-img showcase-2"></div>
                            <div className="col-lg-6 my-auto showcase-text">
                                <h2>Another Short Heading</h2>
                                <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </div>
                        </div>
                        <div className="row mw-100">
                            <div className="col-lg-6 order-lg-2 text-white showcase-img showcase-3"></div>
                            <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                                <h2>A Final Heading</h2>
                                <p className="lead mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="call-to-action text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 col-md-10 mx-auto dark-bg">
                                <div className="col-xl-12 mx-auto">
                                    <h2 className="mb-4">Ready to get started? Sign up now!</h2>
                                </div>
                                <div className="col-md-12 col-lg-12 col-xl-10 mx-auto">
                                    <form action="/register" method="GET">
                                        <div className="form-row">
                                            <div className="col-12 col-md-9 mb-2 mb-md-0">
                                                <input name="email" type="email" className="form-control form-control-lg" placeholder="Enter your email..." />
                                            </div>
                                            <div className="col-12 col-md-3">
                                                <button type="submit" className="btn btn-block btn-lg btn-brand-1">Sign up!</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
                                <ul className="list-inline mb-2">
                                    <li className="list-inline-item">
                                        <a href="#">About</a>
                                    </li>
                                    <li className="list-inline-item">&sdot;</li>
                                    <li className="list-inline-item">
                                        <a href="#">Contact</a>
                                    </li>
                                    <li className="list-inline-item">&sdot;</li>
                                    <li className="list-inline-item">
                                        <a href="#">Terms of Use</a>
                                    </li>
                                    <li className="list-inline-item">&sdot;</li>
                                    <li className="list-inline-item">
                                        <a href="#">Privacy Policy</a>
                                    </li>
                                </ul>
                                <p className="text-muted small mb-4 mb-lg-0">&copy; EstatePlanR 2019. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Home;
