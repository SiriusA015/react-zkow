import Button from '../../components/button/button.component';
import { Breadcrumbs, Crumb, 
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
    ProductAdditionalInfoTitle
} from'./product.styles';

import Pet from '../../assets/pet.png'
import Watering from '../../assets/watering-plants.png'
import Sun from '../../assets/sunlight.png'

const Product = () => {
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
                <a href="/rośliny">Rośliny</a>
            </Crumb>
            <Crumb>
                <a href="/rośliny/areka">Areka</a>
            </Crumb>
        </Breadcrumbs>
        <ProductInfo role="region" aria-label="Szczegóły produktu">
            <ProductInfoImage>
                <img 
                    src="https://images.unsplash.com/photo-1630565945904-7e4220cadd0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                    alt="Areka plant" role="img" aria-labelledby="areka-label"
                />
                <p id="areka-label" class="visually-hidden">
                    Wizerunek rośliny Areka z żywymi zielonymi liśćmi i wysoką łodygą.
                </p>
            </ProductInfoImage>
            <ProductInfoContent>
                <div>
                    <ProductCategoryLink to="/sklep">Rośliny</ProductCategoryLink>
                    <ProductTitle>Palma areka (dypsis lutescens)</ProductTitle>
                    <ProductPrice>145,00 PLN</ProductPrice>
                    <ProductDesc>
                    <p>
                    Areka to kultowa roślina tropikalna, którą możesz z powodzeniem uprawiać w domu. Charakteryzuje się długimi, ciemnozielonymi liśćmi i pięknym strzelisto-kępiastym pokrojem. 
                    Ten egzotyczny gatunek niezwykle elegancko prezentuje się postawiony w widocznym miejscu.
                    </p>
                    <p>
                    Wybierz dla niej ciepłe i jasne stanowisko z rozproszonym światłem, a także regularnie podlewaj, a areka będzie zachwycać swoją soczystą zielenią!
                    </p>
                    </ProductDesc>
                    <ProductAdditional aria-label="Dodatkowe informacje o produkcie">
                        <ProductAdditionalTitle>Dodatkowe informacje:</ProductAdditionalTitle>
                        <ProductAdditionalInfoList>
                            <ProductAdditionalInfoListItem>
                                <ProductAdditionalImage 
                                    src={Sun}
                                    alt="ikona pełne słonce"
                                />
                                <ProductAdditionalInfoTitle>
                                    Wysokie nasłoneczenie
                                </ProductAdditionalInfoTitle>
                            </ProductAdditionalInfoListItem>

                            <ProductAdditionalInfoListItem>
                                <ProductAdditionalImage 
                                    src={Pet}
                                    alt="ikona zwierzęta"
                                />
                                <ProductAdditionalInfoTitle>
                                    Przyjazny dla zwierząt
                                </ProductAdditionalInfoTitle>
                            </ProductAdditionalInfoListItem>

                            <ProductAdditionalInfoListItem>
                                <ProductAdditionalImage 
                                    src={Watering}
                                    alt="ikona konewka"
                                />
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
  )
}

export default Product


