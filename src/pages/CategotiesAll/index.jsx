import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./style.module.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';


function CategoriesAll ({ isDarkMode })
     {
        const [categories, setCategories] = useState([]);
        const location = useLocation();
        const navigate = useNavigate();
      
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await axios.get('https://localhost3333/categories/all');
              if (response.data && Array.isArray(response.data)) {
                setCategories(response.data);
              } else {
                console.error('Invalid data format:', response.data);
              }
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
        }, []);
      
        useEffect(() => {
          if (isDarkMode) {
            document.body.classList.add('dark-theme');
          } else {
            document.body.classList.remove('dark-theme');
          }
        }, [isDarkMode]);
      
        const isCurrentPage = (path) => {
          return location.pathname === path;
        };
      
        const handleCategoryClick = (categoryId) => {
          navigate(`/category/${categoryId}`);
        };


        return (
            <div className={styles.containerCategories}>
              <div className={styles.categoriesPageHeader}>
                <Link to="/pages/HomePage">
                  <button className={`categoriesPageBtn ${isCurrentPage('/pages/HomePage') ? 'active' : ''}`}>
                    Main Page
                  </button>
                </Link>
                <div className={styles.btnLine}></div>
                <Link to="/pages/categories">
                  <button className={`categoriesPageBtn ${isCurrentPage('/pages/categories') ? 'active' : ''}`}>
                    All categories
                  </button>
                </Link>
              </div>
              <h3 className='categoriesHeaderTitle'>Categories</h3>
              {categories.length > 0 ? (
                <div className={styles.categoriesPageGrid}>
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className={styles.categoriesPageItem}
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      {category.image ? (
                        <img src={`https://pet-shop-backend.slavab.kz${category.image}`} alt={category.title} className="categoriesPageImage" />
                      ) : (
                        <div className={styles.placeholderImage}>No Image</div>
                      )}
                      <p className={styles.categoriesPageTitle}>{category.title}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p>Loading data...</p>
              )}
            </div>
          );
        };

export default CategoriesAll;


