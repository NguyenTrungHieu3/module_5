import {Link} from "react-router-dom";

function HomePage() {
    return (
        <main className="container mt-5">
            <div className="text-center mb-5">
                <h1 className="display-5 fw-bold">Chào mừng đến với Hệ thống</h1>
                <p className="lead text-muted">
                    Quản lý thông tin sinh viên, lớp học và phòng ban dễ dàng và hiệu quả.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-5 col-lg-4 mb-4">
                    <div className="card text-center h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">Quản lý Sinh viên</h5>
                            <p className="card-text text-muted">Xem danh sách, thêm mới, cập nhật và xóa thông tin sinh viên.</p>
                            <Link to="/students" className="btn btn-primary px-4 py-2">
                                Xem danh sách
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 col-lg-4 mb-4">
                    <div className="card text-center h-100 shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">Quản lý Lớp học</h5>
                            <p className="card-text text-muted">Sắp xếp, phân bổ và quản lý thông tin các lớp học.</p>
                            <Link to="/classes" className="btn btn-outline-secondary px-4 py-2">
                                Truy cập
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;