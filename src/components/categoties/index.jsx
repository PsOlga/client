import { Button, Link } from "@mui/material";
import styles from "./style.module.css";
import { useState, useEffect } from "react";


function CategorieHome (){

    const [categoriesProducts, setCategoriesProducts] = useState([]);

    useEffect(() => {
        fetch('/api/products')
          .then(response => response.json())
          .then(data => setCategoriesProducts(data));
      }, []);



    return (
      <div className={styles.container}>
        <div className={styles.header_categories_home}>
            <div className={styles.h1_div}>
                <h1 className={styles.h1_categories_home}>Categories</h1>
            </div>
            
            <div className={styles.linie}></div>
            <div className={styles.btn_div}>
                <Link do="/pages/CategoriesAll">
                <Button 
                className={styles.btn_categories_home}
                sx={{
                    color: 'rgba(139, 139, 139, 1)',
                    border: '1px solid rgba(139, 139, 139, 1)',
                    marginRight: '40px',
                    size: '16px',
                    padding: '8px 16px',
                    whiteSpace: 'nowrap',
                  }}
                  variant="outlined"
                  href="#outlined-buttons"
                > All categories </Button>
                </Link>
            </div>
        </div>

        <div>
        {categoriesProducts.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div> 

        </div>


    )
}

export default CategorieHome;