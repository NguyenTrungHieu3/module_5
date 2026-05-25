import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.jsx";
import {getStudents, searchStudents} from "./services/studentServices.js";
import ListStudent from "./components/ListStudent.jsx";
import Footer from "./components/Footer.jsx";
import AddModal from "./components/AddModal.jsx";

function App() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchName, setSearchName] = useState('')
  const [selectedGender, setSelectedGender] = useState('')
  const [addStudent, setAddStudent] = useState(
      {
        id: '',
        name: "",
        gender: "",
        score: ''
      }
  );
  const [isShowAddStudentModal, setShowAddStudentModal] = useState(false);
  const [reloading, setReloading] = useState(false);

  const handleOpenAddModal = () => {
      setShowAddStudentModal(true);
  }

  const handleCloseAddModal = () => {
      setShowAddStudentModal(false);
  }

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getStudents();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    loadStudents();
  }, [reloading])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <>
          <div className="d-flex justify-content-between mt-3 mb-3">
              <SearchBar searchName={searchName}
                         setSearchName={setSearchName}
                         selectedGender={selectedGender}
                         setSelectedGender={setSelectedGender} />
              <button className="btn btn-sm btn-success" onClick={() => handleOpenAddModal()}>Thêm mới sinh viên</button>
          </div>

        {/*<MyButton buttonTitle="Thêm mới sinh viên" buttonClass="btn btn-success" onClick={() => handleOpenAddModal()} />*/}

          <ListStudent students={searchStudents(searchName, selectedGender)} />
        <Footer />
          <AddModal addStudent={addStudent} setAddStudent={setAddStudent} isShowModal={isShowAddStudentModal} handleClose={handleCloseAddModal} setReloading={setReloading} />
      </>
  )
}

export default App
