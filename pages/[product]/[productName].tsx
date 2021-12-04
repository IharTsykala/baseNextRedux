import { useRouter } from "next/router";

function ProductPage() {
  const { query:{ productName }} = useRouter()
  return <div>ProductPage - {productName}</div>
}

export default ProductPage