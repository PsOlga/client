import styles from "./style.module.css";
import { useSelector } from "react-redux";
import { Link, Button } from "@mui/material";

function ProductsHome () {
    const { products } = useSelector((state) => state.products);
  
    // Функция для получения случайных товаров
    const getRandomProducts = (products, num) => {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };
  
    // Получаем 4 случайных товара
    const randomCategories = products?.length > 0 ? getRandomProducts(products, 4) : [];
  

    return(
        <div className={styles.container}>
        <div className={styles.header_products_home}>
          <div className={styles.h1_div}>
            <h1 className={styles.h1_products_home}>Products</h1>
          </div>
          <div className={styles.linie}></div>
          <div className={styles.btn_div}>
            <Link do="/pages/ProductsAll">
              <Button
                className={styles.btn_products_home}
                sx={{
                  color: "rgba(139, 139, 139, 1)",
                  border: "1px solid rgba(139, 139, 139, 1)",
                  marginRight: "40px",
                  size: "16px",
                  padding: "8px 16px",
                  whiteSpace: "nowrap",
                }}
                variant="outlined"
                href="#outlined-buttons"
              >
                All products
              </Button>
            </Link>
          </div>
        </div>
  <div className={styles.productCardContainer}>
  
          {randomCategories.map((product) => (
            <div key={product?.id} 
            className={styles.productCard}>
              {/* Отображение картинки */}
              <img 
                src={`http://localhost:3333${product?.image}`}  
                alt={product?.title} 
                className={styles.product_image} 
                style={{ width: "150px", height: "150px" }}
              />
             <div>
             <h3  className={styles.product_h3} >{product?.title}</h3>
             <div>

             <p className={styles.productDPrice}>
                        ${product?.discont_price ? product?.discont_price : product?.price}
                    </p>

                {product?.discont_price && <p className={styles.productPrice}>${product?.price}</p>}
             </div>
                <p   className={styles.product_lable} >-{Math.round(((product?.price - product?.discont_price) * 100) / product?.price)}%</p>
             </div>
             
            </div>
          ))}
        </div>
  </div>
        
   
    );
  }

export default ProductsHome;