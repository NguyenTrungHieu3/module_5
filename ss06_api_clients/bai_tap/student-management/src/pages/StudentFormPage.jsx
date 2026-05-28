import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// IMPORT THÊM HÀM updateStudent TỪ SERVICE
import { addStudent, getAllMajor, getStudentById, updateStudent } from "../services/studentService.js";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

function StudentFormPage() {
    const [majorList, setMajorList] = useState([]);
    const [studentData, setStudentData] = useState({
        id: "",
        name: "",
        age: "",
        major: "",
        gpa: ""
    });

    const navigate = useNavigate();
    const { id } = useParams();

    // SỬA LỖI 1: Áp dụng async/await vào useEffect
    useEffect(() => {
        async function fetchData() {
            try {
                // 1. Chờ lấy danh sách ngành học
                const majors = await getAllMajor();
                setMajorList(majors);

                // 2. Nếu đang ở trang Edit (có id), chờ lấy thông tin sinh viên cũ
                if (id) {
                    const currentStudent = await getStudentById(id);
                    if (currentStudent && currentStudent.id) {
                        setStudentData({
                            ...currentStudent,
                            major: JSON.stringify(currentStudent.major)
                        });
                    }
                }
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu form:", error);
                toast.error("Không thể tải dữ liệu!");
            }
        }

        fetchData();
    }, [id]);

    // SỬA LỖI 2: Thêm async vào hàm submit
    const handleSubmit = async (values) => {
        try {
            const finalData = {
                ...values,
                major: JSON.parse(values.major)
            };

            let isSuccess = false;

            // SỬA LỖI 3: Phân nhánh rõ ràng gọi hàm Sửa hay Thêm
            if (id) {
                isSuccess = await updateStudent(finalData);
            } else {
                isSuccess = await addStudent(finalData);
            }

            if (isSuccess) {
                toast.success(id ? "Cập nhật thành công!" : "Thêm sinh viên thành công!");
                navigate("/students");
            } else {
                toast.error("Thao tác thất bại, vui lòng thử lại!");
            }
        } catch (error) {
            console.error("Lỗi khi submit:", error);
            toast.error("Đã xảy ra lỗi!");
        }
    }

    const validate = Yup.object({
        id: Yup.number().required("Id không được để trống")
            .min(1, "Id không được số âm"),
        name: Yup.string().required("Tên không được để trống")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, "Tên phải đúng định dạng"),
        age: Yup.number().required("Tuổi không được để trống").min(18, "Sinh viên phải đủ 18 tuổi"),

        // Thêm bắt lỗi ngành học để JSON.parse không bị lỗi
        major: Yup.string().required("Vui lòng chọn ngành học"),

        gpa: Yup.number().required("Gpa không được để trống")
    });

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-success text-white text-center py-3">
                            <h3 className="mb-0">{id ? "Chỉnh sửa sinh viên" : "Thêm mới sinh viên"}</h3>
                        </div>

                        <div className="card-body p-4 text-start">
                            <Formik initialValues={studentData} enableReinitialize={true} onSubmit={handleSubmit} validationSchema={validate}>
                                <Form>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Mã sinh viên (ID)</label>
                                        <Field
                                            type="number"
                                            name="id"
                                            className="form-control"
                                            placeholder="Nhập ID..."
                                            disabled={!!id} // Khóa ô ID lại nếu đang ở chế độ Sửa
                                        />
                                        <ErrorMessage name="id" component='div' className="text-danger small mt-1" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Tên sinh viên</label>
                                        <Field type="text" name="name" className="form-control" placeholder="VD: Nguyen Van A" />
                                        <ErrorMessage name="name" component='div' className="text-danger small mt-1" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Tuổi</label>
                                        <Field type="number" name="age" className="form-control" placeholder="Nhập tuổi..." />
                                        <ErrorMessage name="age" component='div' className="text-danger small mt-1" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Ngành học</label>
                                        <Field as="select" name="major" className="form-select">
                                            <option value="">-- Chọn ngành học --</option>
                                            {majorList.map(major => (
                                                <option key={major.id} value={JSON.stringify(major)}>{major.name}</option>
                                            ))}
                                        </Field>
                                        <ErrorMessage name="major" component='div' className="text-danger small mt-1" />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label fw-bold">Điểm trung bình (GPA)</label>
                                        <Field type="number" name="gpa" className="form-control" placeholder="Nhập GPA..." step="0.1" />
                                        <ErrorMessage name="gpa" component='div' className="text-danger small mt-1" />
                                    </div>

                                    <div className="d-grid">
                                        <button type='submit' className="btn btn-success btn-lg">
                                            {id ? "Cập nhật thông tin" : "Lưu sinh viên"}
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentFormPage;