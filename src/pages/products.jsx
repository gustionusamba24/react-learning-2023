import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

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

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <Button className="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.description}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
