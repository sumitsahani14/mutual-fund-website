import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Seo from '@/components/Seo';
import InnerHero from '@/components/InnerHero';
import { CtaBand } from '@/components/common';
import { BLOGS, DISCLAIMER } from '@/lib/data';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = BLOGS.find((b) => b.slug === slug);
  if (!blog) return <Navigate to="/blogs" replace />;
  const more = BLOGS.filter((b) => b.slug !== slug).slice(0, 3);

  return (
    <>
      <Seo title={blog.title} description={blog.excerpt} />
      <InnerHero eyebrow={blog.category} title={blog.title}
        crumbs={[{ label: 'Blogs', to: '/blogs' }, { label: blog.category }]} />

      <article className="py-16">
        <div className="container-narrow">
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {blog.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {blog.read} read</span>
          </div>
          <img src={blog.img} alt={blog.title} className="mt-6 aspect-[16/9] w-full rounded-2xl border border-border object-cover shadow-sm" loading="lazy" />
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p className="text-xl font-500 text-navy" style={{ fontWeight: 500 }}>{blog.excerpt}</p>
            {blog.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-muted/40 p-6 text-sm leading-relaxed text-muted-foreground">
            <strong className="text-navy">Disclaimer:</strong> {DISCLAIMER}
          </div>
          <Link to="/blogs" className="mt-10 inline-flex items-center gap-2 text-sm font-600 text-royal" style={{ fontWeight: 600 }}>
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </div>
      </article>

      <section className="bg-muted/40 py-16">
        <div className="container-wide">
          <h2 className="mb-8 text-2xl font-700 text-navy" style={{ fontWeight: 700 }}>You may also like</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {more.map((b) => (
              <Link key={b.slug} to={`/blogs/${b.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={b.img} alt={b.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-600 uppercase tracking-wider text-royal" style={{ fontWeight: 600 }}>{b.category}</span>
                  <h3 className="mt-2 font-600 leading-snug text-navy" style={{ fontWeight: 600 }}>{b.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
