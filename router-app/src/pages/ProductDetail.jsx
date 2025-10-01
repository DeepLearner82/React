import { useParams } from "react-router";

export default function ProductDetail() {
  const { id } = useParams();
  return (
    <div>
      <h3>Product Detail</h3>
      <p>You selected product with ID: {id}</p>
    </div>
  );
}
