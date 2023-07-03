import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/category.selector';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import {Breadcrumbs, Crumb} from './categories-preview.styles'

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      <Breadcrumbs>
        <Crumb>
          <a href="/sklep">Sklep /</a>
        </Crumb>
      </Breadcrumbs>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;