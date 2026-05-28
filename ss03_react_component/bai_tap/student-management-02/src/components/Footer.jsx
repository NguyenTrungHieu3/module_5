import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <footer className="bg-dark text-light py-3 mt-auto">
                    <div className="container d-flex justify-content-between align-items-center">

                        <p className="mb-0">
                            © 2026 Student Management System
                        </p>

                        <div>
                            <a
                                href="#"
                                className="text-light text-decoration-none me-3"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="text-light text-decoration-none"
                            >
                                Contact
                            </a>
                        </div>

                    </div>
                </footer>
            </>
        )
    }
}

export default Footer;