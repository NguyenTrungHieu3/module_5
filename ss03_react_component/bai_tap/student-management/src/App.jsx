import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentList: [],
      form: { name: "", phone: "", email: "" },
      isValid: false,
      indexSelected: -1
    };
  }

  // 1. Hàm cập nhật Form State mỗi khi gõ phím
  handleChange = (event) => {
    this.setState((state) => {
      const form = state.form;
      form[event.target.name] = event.target.value;
      return { form };
    }, () => this.checkInvalidForm());
  }

  // 2. Hàm đưa thông tin sinh viên lên Form để chuẩn bị Edit
  handleSelect = (studentSelected, index) => {
    this.setState({
      form: JSON.parse(JSON.stringify(studentSelected)), // Tránh tham chiếu vùng nhớ
      indexSelected: index
    }, () => this.checkInvalidForm()); // Gọi lại checkInvalidForm để kích hoạt nút Submit
  }

  // 3. Hàm kiểm tra tính hợp lệ của Form
  checkInvalidForm = () => {
    const { name, phone, email } = this.state.form;
    
    // Điều kiện: cả 3 trường không rỗng VÀ phone chỉ được phép chứa các số (dùng Regex)
    const isPhoneValid = /^\d+$/.test(phone.trim());
    const value = name.trim() !== "" && phone.trim() !== "" && email.trim() !== "" && isPhoneValid;
    
    this.setState({
      isValid: value
    });
  }

  // 4. Hàm Lưu thông tin (Add hoặc Update)
  handleSubmit = () => {
    if (this.state.isValid) {
      const newList = [...this.state.studentList];
      
      if (this.state.indexSelected > -1) {
        // Đang ở chế độ Edit -> Dùng hàm splice để cập nhật tại vị trí indexSelected
        newList.splice(this.state.indexSelected, 1, this.state.form);
      } else {
        // Chế độ Add mới -> Dùng push để nhét vào cuối mảng
        newList.push(this.state.form);
      }

      // Lưu lại danh sách mới và Reset form về trạng thái trống ban đầu
      this.setState({
        studentList: newList,
        form: { name: "", phone: "", email: "" },
        isValid: false,
        indexSelected: -1
      });
    }
  }

  // 5. Hàm Xóa sinh viên
  handleDelete = (index) => {
    // Luôn copy ra mảng mới trước khi sửa đổi để tránh lỗi bộ nhớ của React
    const newList = [...this.state.studentList];
    newList.splice(index, 1);
    
    this.setState({
      studentList: newList
    });
  }

  render() {
    const { studentList, form, isValid } = this.state;
    
    return (
      <div className="container">
        <h1>Student List</h1>
        
        {/* Khu vực Form Nhập liệu */}
        <div className="form-group">
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={form.name} 
            onChange={this.handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Phone: </label>
          <input 
            type="text" 
            name="phone" 
            value={form.phone} 
            onChange={this.handleChange} 
          />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={form.email} 
            onChange={this.handleChange} 
          />
        </div>
        
        {/* Nút Submit bị vô hiệu hóa (disabled) nếu Form chưa nhập đủ/đúng */}
        <button onClick={this.handleSubmit} disabled={!isValid}>
          {this.state.indexSelected > -1 ? "Update" : "Submit"}
        </button>
        
        {/* Khu vực Table hiển thị */}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.phone}</td>
                <td>{student.email}</td>
                <td>
                  <button 
                    className="btn-edit" 
                    onClick={() => this.handleSelect(student, index)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn-delete" 
                    onClick={() => this.handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
