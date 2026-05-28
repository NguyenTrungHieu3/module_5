import {useFormik} from "formik";
import * as Yup from "yup";

function LoginPage() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object(
            {
                username: Yup.string().required("Username không được để trống!").min(3, "Tối thiểu 3 ký tự"),
                password: Yup.string().required("Password không được để trống!").min(6, "Tối thiểu 6 ký tự")
            }
        ),
        onSubmit: (values) => {
            console.log(values);
        }
        }
    )

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {
                formik.touched.username && formik.errors.username && (
                    <p>{formik.errors.username}</p>
                )
            }

            <input
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {
                formik.touched.password && formik.errors.password && (
                    <p>{formik.errors.password}</p>
                )
            }

            <button type="submit">Thêm sinh viên</button>
        </form>
    )
}

export default LoginPage;