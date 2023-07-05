import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Routes, Route } from 'react-router-dom';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import { setCurrentUser } from './store/user/user.reducer';
import Contact from './routes/contact/contact.component';
import Footer from './routes/footer/footer.component';
import Product from './routes/product/product.component';
import WelcomeScreen from './components/welcomeScreen/welcomeScreen.component';
import ProductPage from './routes/product/product.component';
import OrderConfirmation from './routes/order-confirmation/order-confirmation.component';
import ConfirmationPage from './routes/confirmation/confirmation.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      console.log(setCurrentUser(pickedUser));
      dispatch(setCurrentUser(pickedUser));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
        <Route path='/' element={<Footer />} />
        <Route index element={<Home />} />
        <Route path='sklep/*' element={<Shop />} />
        <Route exact path="/sklep/:title/:id" element={<ProductPage />} />
        <Route path='mojekonto' element={<Authentication />} />
        <Route path='kasa' element={<Checkout />} />
        <Route path='kontakt' element={<Contact />} />
        <Route path='produkt' element={<Product />} />
        <Route path='potwierdzenie' element={<ConfirmationPage />} />
        {/* <Route path='potwierdzenie' element={<OrderConfirmation />} /> */}
      </Route>
    </Routes>
  );
};

export default App;