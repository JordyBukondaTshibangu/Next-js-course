import fs from "fs/promises";
import Link from "next/link";
import path from "path";

const HomePage = (props) => {
  const { products } = props;
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={"/" + product.id}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    revalidate: 60,
  };
}

export default HomePage;
