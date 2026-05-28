import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to='/'>Trang chủ</Link>
            <Link to="/posts">Xem bài viết</Link>
        </nav>
    )
}

export default Navbar;