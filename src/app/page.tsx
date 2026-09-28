import Link from "next/link";
import { getPipelineSteps } from "@/lib/pipeline";

export default function Home() {
  const environment = process.env.NEXT_PUBLIC_APP_ENV ?? "development";
  const steps = getPipelineSteps();

  return (
    <main>
      <section className="card">
        <p className="eyebrow">NEXT.JS + PNPM + JENKINS</p>
        <h1>CI/CD pipeline is ready.</h1>
        <p className="intro">
          Một source nhỏ để kiểm tra đầy đủ các bước kiểm tra mã nguồn, test và build trên Jenkins.
        </p>
        <p className="environment">Environment: {environment}</p>
        <ol>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="actions">
          <Link className="button" href="/projects">Xem các dự án</Link>
          <Link className="text-link" href="/about">Tìm hiểu pipeline →</Link>
        </div>
      </section>
    </main>
  );
}
