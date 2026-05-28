import {useFormik} from "formik";
import * as Yup from "yup"

function PostPage() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        ValidationSchema: Yup.object({
            username: Yup.string()
                .min(3)
                .required('Username không được để trống'),
            password: Yup.string()
                .min(6)
                .required('Password không được để trống')
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="username"
                value={formik.va}
            />
        </form>
    )
}

export default PostPage;