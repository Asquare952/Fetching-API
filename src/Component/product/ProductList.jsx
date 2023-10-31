import styles from "./ProductList.module.css";

const img = "/public/IMG/clement-helardot-95YRwf6CNw8-unsplash.jpg";
const price = "$55";
const title = "Men Casual premium slim fit T-chirts";

const ProductList = () => {
  return (
    <div className={styles.productContainer}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
};

const Product = () => {
  return ( 
    <div>
   <img src={img} alt="" />
   <h3 className={styles.title}>{title}</h3>
   <p>{price}</p>
    </div>
   );
};
 


export default ProductList;
