import { createContext, useEffect, useState } from 'react';
import { getAllCategories } from '../services/CategoryService/category-sercive';
import { getAllProducts } from '../services/ProductService/Product-sercive';

export const categoriesContext = createContext(null);

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [categoryById, setCategoryById] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function getCategories() {
    try {
      setIsLoading(true);
      const response = await getAllCategories();
      if (response.success) {
        setIsLoading(false);
        setCategories(response.data.data);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function getCategoryById({ category }) {
    try {
      setIsLoading(true);
      const response = await getAllProducts({ category });
      if (response.success) {
        setIsLoading(false);
        setCategoryById(response.data.data);
       }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <categoriesContext.Provider
      value={{
        categoryById,
        getCategoryById,
        isError,
        isLoading,
        categories,
        error,
      }}
    >
      {children}
    </categoriesContext.Provider>
  );
}
