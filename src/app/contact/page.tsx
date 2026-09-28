import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: "Liên hệ | CI/CD Lab",
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="CONTACT"
      title="Pipeline đang chờ lần deploy tiếp theo."
      description="Trang này dùng để kiểm tra một route độc lập, metadata và liên kết ngoài trong production build."
    >
      <a className="button" href="mailto:dev@example.com">
        Gửi email thử nghiệm
      </a>
    </PageShell>
  );
}
