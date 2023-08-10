import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODEUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My Frist Book",
    description: "My frist Book i ever write",
  },
  {
    id: "p2",
    price: 8,
    title: "My Sec Book",
    description: "My Sec Book i ever write",
  },
  {
    id: "p3",
    price: 5,
    title: "My Third Book",
    description: "My Third Book i ever write",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODEUCTS.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
