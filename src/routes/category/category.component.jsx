import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';

import { selectCategoriesLocalList, selectCategoriesMap } from '../../store/categories/category.selector';

import { CategoryContainer, Title, Breadcrumbs, Crumb} from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const categoriesLocal = useSelector(selectCategoriesLocalList);
  const [products, setProducts] = useState(categoriesLocal[category]);
  useEffect(() => {
    setProducts(categoriesLocal[category]);
  }, [category, categoriesLocal]);

  return (
    <Fragment>
      <Breadcrumbs>
        <Crumb>
          <Link to="/sklep">Sklep</Link>
        </Crumb>
        <Crumb>
          <a>Kategoria - {category}</a>
        </Crumb>
      </Breadcrumbs>
      <Title>{category.toUpperCase()}</Title>
      <CategoryContainer>
        {products &&
          products.map((product) => (
              <ProductCard title={category} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
