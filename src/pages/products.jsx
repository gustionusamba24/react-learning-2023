import CardProduct from "../components/Fragments/CardProduct";

const products = [
  {
    id: 1,
    name: "Sepatu Baru",
    price: "Rp 5.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
        voluptatibus mollitia ex laborum quaerat ut. Quisquam
        officiis cumque, repellendus, et accusamus autem doloribus
        est sint, quia amet recusandae non soluta!`,
  },
  {
    id: 2,
    name: "Sepatu Lama",
    price: "Rp 2.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`,
  },
  {
    id: 3,
    name: "Sepatu Super",
    price: "Rp 3.000.000",
    image: "/images/shoes-1.jpg",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quia quibusdam debitis molestiae aperiam amet!`,
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
  );
};

export default ProductsPage;
