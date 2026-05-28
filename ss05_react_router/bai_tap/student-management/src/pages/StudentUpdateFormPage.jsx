import {ErrorMessage, Field, Form, Formik} from "formik";
import {useState} from "react";
import * as Yup from "yup";

function StudentUpdateFormPage() {
    const [updateStudent, setUpdateStudent] = useState({
        id: "",
        name: "",
        age: "",
        major: {
            id: "",
            name: ""
        },
        gpa: ""
    });

    const handleUpdateStudent = () => {

    }

    const validate = Yup.object({
        id: Yup.number().required("Id không được để trống")
            .min(1, "Id không được số âm"),
        name: Yup.string().required("Tên không được để trống")
            .matches(/^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/, "Tên phải đúng định dạng"),
        age: Yup.number().required("Tuổi không được để trống").min(18, "Sinh viên phải đủ 18 tuổi"),
        gpa: Yup.number().required("Gpa không được để trống")
    });

    return (
        <>
            <h1>Cập nhật thông tin sinh viên</h1>
            <Formik initialValues={updateStudent} onSubmit={handleUpdateStudent} validationSchema={validate}>
                <Form>
                    <div>
                        <label>ID</label>
                        <Field type="text" name="id" value={} />
                        <ErrorMessage name="id" component='div' />
                    </div>
                    <div>
                        <label>Tên</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component='div' />
                    </div>
                    <div>
                        <label>Tuổi</label>
                        <Field type="text" name="age" />
                        <ErrorMessage name="age" component='div' />
                    </div>
                    <div>
                        <label>Ngành học</label>
                        <Field as="select" name="major">
                            <option value="">-- Chọn ngành --</option>
                            {majorList.map(major => (
                                <option key={major.id} value={JSON.stringify(major)}>{major.name}</option>
                            ))}
                        </Field>
                    </div>
                    <div>
                        <label>GPA</label>
                        <Field type="text" name="gpa" />
                        <ErrorMessage name="gpa" component='div' />
                    </div>
                    <div>
                        <button type='submit'>Lưu</button>
                    </div>
                </Form>
            </Formik>
        </>
    );
}

export default StudentUpdateFormPage;