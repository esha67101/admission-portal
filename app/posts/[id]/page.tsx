export default function Post({ params }: { params: { id: string } }) {
  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1> Dynamic Post Page</h1>
      <p>Opened post with ID: <b>{params.id}</b></p>
    </div>
  );
}
