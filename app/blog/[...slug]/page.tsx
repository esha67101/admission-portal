export default function Blog({ params }: { params: { slug: string[] } }) {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1> Blog Catch-All Route</h1>
      <p>Slug parts: {params.slug.join(" / ")}</p>
    </div>
  );
}
