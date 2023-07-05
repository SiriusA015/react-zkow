import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesLocalList, selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import {Breadcrumbs, Crumb} from './categories-preview.styles'
import { Link } from 'react-router-dom';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);             // get data from database
  const categoriesLocal = useSelector(selectCategoriesLocalList);     // get data from local file
   
  return (
    <Fragment>
      <Breadcrumbs>
        <Crumb>
          <Link to="/sklep">Sklep /</Link>
        </Crumb>
      </Breadcrumbs>
      {Object.keys(categoriesLocal).map((title) => {
        const products = categoriesLocal[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;