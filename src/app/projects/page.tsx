import type { Metadata } from "next";
import { PageShell } from "@/components/page-shell";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dự án | CI/CD Lab",
};

export default function ProjectsPage() {
  return (
    <PageShell
      eyebrow="PROJECTS"
      title="Các thành phần trong pipeline."
      description="Mỗi thẻ thể hiện một phần của hành trình từ source code đến môi trường chạy thật."
    >
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project" key={project.name}>
            <span className="status">{project.status}</span>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
