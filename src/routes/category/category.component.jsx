import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, Title, Breadcrumbs, Crumb} from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Breadcrumbs>
        <Crumb>
          <a href="/sklep">Sklep</a>
        </Crumb>
        <Crumb>
          <a>Kategoria - {category}</a>
        </Crumb>
      </Breadcrumbs>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
              <ProductCard product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
