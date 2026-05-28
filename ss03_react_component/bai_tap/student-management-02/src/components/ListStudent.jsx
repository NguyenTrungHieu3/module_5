import React from "react";
import getAllStudent from "../services/studentService";

class ListStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount() {
        this.setState(
            {
                studentList: [...getAllStudent()]
            }
        )
    }

    render() {
        return (
            <>
                <h1>Danh sách sinh viên</h1>
                <table className={'table table-striped table-dark'}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>Ngành</th>
                            <th>Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentList.map((student, index) => {
                            return (
                                <tr key={student.id}>
                                    <td>{index + 1}</td>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.major}</td>
                                    <td>
                                        <button>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

export default ListStudent;