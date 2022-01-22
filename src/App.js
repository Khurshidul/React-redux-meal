import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartvisiblity,
  selectCartLoading,
  selectCartError,
  showCart,
  hideCart,
} from "./features/cart/cartSlice";
import Cart from "./components/cart/Cart";
import dummyMeals from "./meals";
import MainHeader from "./components/layout/MainHeader";
import Banner from "./components/layout/Banner";
import Container from "./components/ui/Container";
import Meals from "./components/meals/Meals";
import Footer from "./components/layout/Footer";

function App() {
  const dispatch = useDispatch();
  const cartIsShown = useSelector(selectCartvisiblity);
  const isLoading = useSelector(selectCartLoading);
  const isError = useSelector(selectCartError);

  const showCartHandler = () => {
    dispatch(showCart());
  };
  const hideCartHandler = () => {
    dispatch(hideCart());
  };

  return (
    <>
      {cartIsShown && <Cart onCartClose={hideCartHandler} />}
      <MainHeader onShowCart={showCartHandler} />
      <main>
        <Banner />
        {isLoading && (
          <Container>
            <p className="text-center">loading</p>
          </Container>
        )}
        {!isLoading && <Meals itemList={dummyMeals} />}
        {isError && (
          <Container>
            <p className="text-center">{isError}</p>
          </Container>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
