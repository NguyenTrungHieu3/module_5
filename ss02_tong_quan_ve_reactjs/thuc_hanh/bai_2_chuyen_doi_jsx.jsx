/**
 * Bài 2: Chuyển đổi và nhúng dữ liệu với JSX
 * Mục tiêu: Làm quen với cú pháp JSX và cách nhúng dữ liệu động.
 * 
 * Yêu cầu:
 * Dưới đây là đối tượng chứa thông tin người dùng:
 */
const user = {
    firstName: "Nguyễn Văn",
    lastName: "A",
    age: 20
};

/**
 * Hãy viết một đoạn JSX để hiển thị thông tin trên thành một cấu trúc HTML như sau:
 * 
 * <div class="user-card">
 *     <h2>Họ và tên: Nguyễn Văn A</h2>
 *     <p>Tuổi: 20</p>
 * </div>
 * 
 * Lưu ý:
 * - Nhớ phân biệt `class` trong HTML và thuộc tính tương ứng trong JSX.
 * - Sử dụng cặp ngoặc nhọn {} để nhúng biến user.firstName, user.lastName, user.age
 */

// === VIẾT CODE CỦA BẠN VÀO BIẾN DƯỚI ĐÂY ===
const UserCard = (
    <div className="user-card">
        <h2 className="name">Họ và tên: {user.firstName}</h2>
        <p>Tuổi: {user.age}</p>
    </div>
);

export default UserCard;
