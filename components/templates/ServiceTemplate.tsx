import Link from "next/link";

interface ServiceTemplateProps {
  title: string;
  content: string;
  parentPath?: string;
}

export default function ServiceTemplate({
  title,
  content,
  parentPath,
}: ServiceTemplateProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {parentPath ? (
        <div className="mb-6">
          <Link
            href={parentPath}
            className="inline-flex items-center text-sm font-medium text-sky-700 hover:text-sky-900"
          >
            ← Back
          </Link>
        </div>
      ) : null}

      <header className="mb-8">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
          Service Detail
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
      </header>

      <section className="prose max-w-none text-slate-700">
        <p>{content}</p>
      </section>
    </main>
  );
}
