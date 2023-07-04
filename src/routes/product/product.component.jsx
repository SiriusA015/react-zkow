import Button from "../../components/button/button.component";
import {
  Breadcrumbs,
  Crumb,
  ProductDesc,
  ProductInfoImage,
  ProductInfoContent,
  ProductCategoryLink,
  ProductTitle,
  ProductPrice,
  ProductInfo,
  Counter,
  ProductAdditional,
  ProductAdditionalTitle,
  ProductAdditionalInfoList,
  ProductAdditionalImage,
  ProductAdditionalInfoListItem,
  ProductAdditionalInfoTitle,
} from "./product.styles";

import Pet from "../../assets/pet.png";
import Watering from "../../assets/watering-plants.png";
import Sun from "../../assets/sunlight.png";
import { useSelector } from "react-redux";
import { selectCategoriesLocalList } from "../../store/categories/category.selector";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const categoriesLocal = useSelector(selectCategoriesLocalList);
  const { title, id } = useParams();
  const [product, setProduct] = useState({
    name: "Birds nest fern",
    imageUrl:
      "https://images.unsplash.com/photo-1636901942318-972ea62b4d5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    price: "25,00 PLN",
  });

  useEffect(() => {
    for (const obj of categoriesLocal[title]) {
      if (obj.id === parseInt(id)) {
        setProduct(obj);
        break;
      }
    }
  }, [categoriesLocal]);

  return (
    <div>
      <Breadcrumbs>
        <Crumb>
          <a href="/">Home</a>
        </Crumb>
        <Crumb>
          <a href="/sklep">Sklep</a>
        </Crumb>
        <Crumb>
          <a href={`/sklep/${title}`}>{title}</a>
        </Crumb>
        <Crumb>
          <a>{id}</a>
          {/* <a href={`/sklep/${title}/${id}`}>{id}</a> */}
        </Crumb>
      </Breadcrumbs>
      <ProductInfo role="region" aria-label="Szczegóły produktu">
        <ProductInfoImage>
          <img
            src={product.imageUrl}
            alt="Areka plant"
            role="img"
            aria-labelledby="areka-label"
          />
          <p id="areka-label" className="visually-hidden">
            Wizerunek rośliny Areka z żywymi zielonymi liśćmi i wysoką łodygą.
          </p>
        </ProductInfoImage>
        <ProductInfoContent>
          <div>
            <ProductCategoryLink to={`/sklep/${title}`}>{title}</ProductCategoryLink>
            <ProductTitle>{product.name}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
            <ProductDesc>
              <p>
                Areka to kultowa roślina tropikalna, którą możesz z powodzeniem
                uprawiać w domu. Charakteryzuje się długimi, ciemnozielonymi
                liśćmi i pięknym strzelisto-kępiastym pokrojem. Ten egzotyczny
                gatunek niezwykle elegancko prezentuje się postawiony w
                widocznym miejscu.
              </p>
              <p>
                Wybierz dla niej ciepłe i jasne stanowisko z rozproszonym
                światłem, a także regularnie podlewaj, a areka będzie zachwycać
                swoją soczystą zielenią!
              </p>
            </ProductDesc>
            <ProductAdditional aria-label="Dodatkowe informacje o produkcie">
              <ProductAdditionalTitle>
                Dodatkowe informacje:
              </ProductAdditionalTitle>
              <ProductAdditionalInfoList>
                <ProductAdditionalInfoListItem>
                  <ProductAdditionalImage src={Sun} alt="ikona pełne słonce" />
                  <ProductAdditionalInfoTitle>
                    Wysokie nasłoneczenie
                  </ProductAdditionalInfoTitle>
                </ProductAdditionalInfoListItem>

                <ProductAdditionalInfoListItem>
                  <ProductAdditionalImage src={Pet} alt="ikona zwierzęta" />
                  <ProductAdditionalInfoTitle>
                    Przyjazny dla zwierząt
                  </ProductAdditionalInfoTitle>
                </ProductAdditionalInfoListItem>

                <ProductAdditionalInfoListItem>
                  <ProductAdditionalImage src={Watering} alt="ikona konewka" />
                  <ProductAdditionalInfoTitle>
                    Podlewaj regularnie
                  </ProductAdditionalInfoTitle>
                </ProductAdditionalInfoListItem>
              </ProductAdditionalInfoList>
            </ProductAdditional>
          </div>
          <div>
            <Counter>- 1 +</Counter>
            <Button>Dodaj do koszyka</Button>
          </div>
        </ProductInfoContent>
      </ProductInfo>
    </div>
  );
};

export default Product;
