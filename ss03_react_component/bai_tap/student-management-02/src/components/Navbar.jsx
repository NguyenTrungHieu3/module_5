import React from "react";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        <a className="navbar-brand" href="#">
                            Student Management
                        </a>

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav me-auto">

                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        Dashboard
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Students
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Courses
                                    </a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Teachers
                                    </a>
                                </li>

                            </ul>

                            <button className="btn btn-outline-light">
                                Logout
                            </button>

                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;