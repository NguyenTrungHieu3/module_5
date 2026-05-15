import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  const [count, setCount] = useState(0)
  const studentList = [
    {
      id: 1,
      name: "Trung Hiếu",
      age: 20,
      address: "Đà Nẵng",
      score: 9,
    },
    {
      id: 2,
      name: "Phong Hào",
      age: 22,
      address: "Bình Định",
      score: 10,
    },
    {
      id: 3,
      name: "Văn Hiếu",
      age: 21,
      address: "Quảng Trị",
      score: 10,
    },
    {
      id: 4,
      name: "Anh Thư",
      age: 20,
      address: "Nghệ An",
      score: 10,
    },
    {
      id: 5,
      name: "Trí Trường",
      age: 19,
      address: "Đà Nẵng",
      score: 10,
    },
    {
      id: 6,
      name: "Trung",
      age: 24,
      address: "Đà Nẵng",
      score: 10,
    },
    {
      id: 7,
      name: "Văn Nhất",
      age: 19,
      address: "Đà Nẵng",
      score: 10,
    }
  ]

  return (
    <>
      <h1 style={{color: 'pink'}}>Thông tin sinh viên</h1>
      <table className="table table-striped table-bordered table-hover table-dark">
        <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Tuổi</th>
          <th>Địa chỉ</th>
          <th>Điểm</th>
        </tr>
        </thead>
        <tbody>
        {
          studentList.map((student, i) =>
            <tr key={student.id}>
              <td>{i + 1}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
              <td>{student.score}</td>
            </tr>
          )
        }
        </tbody>
      </table>
    </>
  )
}

export default App
