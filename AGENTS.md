# 📜 Quy tắc cho AI Agent

> File này quy định những gì AI Agent ĐƯỢC và KHÔNG ĐƯỢC làm.
> Agent phải đọc và tuân thủ file này trước khi thực hiện bất kỳ thay đổi nào.

---

## 🔴 TUYỆT ĐỐI KHÔNG ĐƯỢC

1. **Không xóa file** mà chưa hỏi ý kiến người dùng
2. **Không sửa file ngoài phạm vi** — Chỉ chỉnh sửa những file liên quan trực tiếp đến yêu cầu hiện tại
3. **Không cài đặt package/dependency** mà chưa được chấp thuận
4. **Không chạy lệnh nguy hiểm** — `rm -rf`, `drop database`, `format`, `git push --force`
5. **Không xóa comment/docstring** có sẵn trong code trừ khi được yêu cầu
6. **Không thay đổi cấu hình dự án** (`.env`, `package.json`, `tsconfig.json`) khi chưa thông báo
7. **Không tự ý đổi tech stack** — Nếu dự án dùng CSS thuần thì không tự chuyển sang Tailwind

## 🟡 PHẢI HỎI TRƯỚC KHI LÀM

1. Thay đổi kiến trúc thư mục (tạo/di chuyển/đổi tên thư mục)
2. Cài thêm thư viện mới (`npm install`, `pip install`)
3. Thay đổi logic nghiệp vụ cốt lõi (business logic)
4. Refactor quy mô lớn (ảnh hưởng nhiều file)
5. Xóa code cũ mà "có vẻ không dùng"

## 🟢 ĐƯỢC TỰ ĐỘNG LÀM

1. Sửa bug rõ ràng (syntax error, typo, null pointer)
2. Thêm code mới theo yêu cầu
3. Cải thiện format/style code (indentation, spacing)
4. Thêm comment giải thích
5. Tạo file mới khi được yêu cầu
6. Chạy lệnh an toàn: `npm run dev`, `node file.js`, `git status`, `git diff`

---

## 📐 Quy tắc Code

- **Ngôn ngữ comment:** Tiếng Việt cho beginner, song ngữ Việt-Anh cho intermediate+
- **Giữ nguyên style hiện tại** — Nếu dự án dùng tab thì dùng tab, dùng space thì dùng space
- **Không over-engineer** — Giải pháp đơn giản nhất mà đúng yêu cầu là giải pháp tốt nhất
- **Commit message** (nếu được yêu cầu): Viết bằng tiếng Việt, ngắn gọn, rõ ý

## 🗂️ Phạm vi làm việc

- Chỉ làm việc trong thư mục dự án hiện tại
- KHÔNG tạo file ở Desktop, Downloads, hoặc thư mục hệ thống
- KHÔNG đọc/ghi file ngoài workspace trừ khi được chỉ định rõ ràng
