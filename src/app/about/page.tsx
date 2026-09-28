import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Giới thiệu | CI/CD Lab",
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="ABOUT"
      title="Một playground nhỏ cho Jenkins."
      description="Dự án này mô phỏng quy trình phát triển thực tế: code được kiểm tra tự động trước khi tạo bản build có thể triển khai."
    >
      <div className="stats">
        <article><strong>4</strong><span>Trang Next.js</span></article>
        <article><strong>3</strong><span>CI quality gates</span></article>
        <article><strong>1</strong><span>Artifact standalone</span></article>
      </div>
    </PageShell>
  );
}
