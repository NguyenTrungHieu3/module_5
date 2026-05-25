
function ListStudent({students}) {
    return (
        <table>
            <thead>
            <tr>
                <th>STT</th>
                <th>Tên</th>
                <th>Giới tính</th>
                <th>Điểm</th>
            </tr>
            </thead>
            <tbody>
            {students.map((student, index) => (
                <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.score}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default ListStudent;