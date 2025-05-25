# Theme Switcher App

Ứng dụng Next.js cho phép chuyển đổi theme (Light/Dark) với UI hiện đại, sử dụng Zustand, Tailwind CSS và các component tái sử dụng.

## 🚀 Chức năng chính

- Chuyển đổi theme (Light/Dark) với hiệu ứng mượt mà
- Lưu trạng thái theme vào localStorage
- Tự động nhận diện theme hệ thống
- Bộ UI components hiện đại, dễ mở rộng
- Hỗ trợ responsive và accessibility

## 🛠️ Cài đặt & chạy thử

```bash
pnpm install
pnpm dev
```

Sau đó truy cập: http://localhost:3000

## 🗂️ Cấu trúc thư mục

```
app/           # Các page và layout chính
components/    # Các UI component và theme switcher
hooks/         # Custom React hooks
lib/           # Store và utils
public/        # Ảnh, logo, assets
styles/        # File CSS toàn cục
tailwind.config.ts # Cấu hình Tailwind
```

## 📦 Công nghệ sử dụng

- Next.js (App Router)
- React
- Zustand
- Tailwind CSS
- TypeScript

## 📄 License

MIT
