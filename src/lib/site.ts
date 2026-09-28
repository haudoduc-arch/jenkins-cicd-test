export const navigation = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/projects", label: "Dự án" },
  { href: "/contact", label: "Liên hệ" },
] as const;

export const projects = [
  {
    name: "Jenkins Pipeline",
    description: "Tự động lint, test, build và lưu artifact sau mỗi lần cập nhật source.",
    status: "Running",
  },
  {
    name: "Next.js Application",
    description: "Ứng dụng App Router được build thành standalone output để triển khai.",
    status: "Ready",
  },
  {
    name: "VPS Deployment",
    description: "Bước triển khai lên máy chủ sẽ được bổ sung vào pipeline CD.",
    status: "Planned",
  },
] as const;
