import './App.css';

/**
 * BÀI TẬP THỰC TẾ: XÂY DỰNG TRANG MENU QUÁN CÀ PHÊ
 * 
 * Mục tiêu: 
 * - Ôn tập chèn biến vào JSX.
 * - Học cái mới: Cách hiển thị một mảng (Array) lên giao diện bằng hàm `.map()`.
 * - Học cái mới: Hiển thị giao diện theo điều kiện (dùng toán tử ba ngôi `? :`).
 * 
 * Dưới đây là dữ liệu (Data) của ứng dụng:
 */
const shopInfo = {
  name: "Cà Phê CodeGym",
  address: "Khu công nghệ cao",
  isOpen: true, // Thử đổi thành false xem giao diện thay đổi thế nào nhé
};

const menuItems = [
  { id: 1, name: "Cà phê đen", price: 20000 },
  { id: 2, name: "Bạc xỉu", price: 25000 },
  { id: 3, name: "Trà đào cam sả", price: 35000 },
];

function App() {
  return (
    <div className="container">
      {/* YÊU CẦU 1: Hiển thị tên quán và địa chỉ từ object `shopInfo` */}
      <h1>Tên quán: {shopInfo.name}</h1>
      <p>Địa chỉ: {shopInfo.address}</p>

      {/* YÊU CẦU 2: Rendering có điều kiện (Học kiến thức mới!)
          - Nếu quán đang mở cửa (isOpen = true), in ra thẻ <b>Đang mở cửa</b>
          - Nếu quán đã đóng cửa (isOpen = false), in ra thẻ <b>Đã đóng cửa</b>
          
          Cú pháp mẫu: 
          { shopInfo.isOpen ? (<b>Đang mở cửa</b>) : (<b>Đã đóng cửa</b>) }
      */}
      <p>Trạng thái: {shopInfo.isOpen ? <b>Đang mở cửa</b> : <b>Đã đóng cửa</b>}</p>

      <hr />

      <h2>Menu Đồ Uống</h2>
      {/* YÊU CẦU 3: Hiển thị danh sách từ mảng (Học kiến thức mới!)
          - Trong React, chúng ta không dùng vòng lặp for. Ta dùng hàm `.map()` để biến 
            một mảng dữ liệu thành một mảng các thẻ HTML.
          - Chú ý: React yêu cầu mỗi phần tử khi lặp phải có thuộc tính `key` duy nhất.
          
          Cú pháp mẫu:
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                 {item.name} - {item.price} VNĐ
              </li>
            ))}
          </ul>
          
          Nhiệm vụ: Bạn hãy thử gõ lại cú pháp trên, hoặc biến tấu nó dùng thẻ <div> cho đẹp hơn.
      */}
      <div className="menu-list">
        <ul>
          {menuItems.map(item =>
            <li key={item.id}>
              {item.name} - {item.price} VND
            </li>
          )}
        </ul>
      </div>

    </div>
  );
}

export default App;
