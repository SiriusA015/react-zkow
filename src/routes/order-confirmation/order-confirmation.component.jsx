import {
  ApplyBtn,
  ConfirmationContainer,
  ConfirmationContent,
  Description,
  PayTitle,
  Payment,
  PaymentContent,
  PaymentWrapper,
} from "./order-confirmation.styles";
import Credit from "../../assets/credit.png";
import Paypal from "../../assets/paypal.png";
import Bitcoin from "../../assets/bitcoin.png";
import NextBtn from "../../assets/next.png";

const OrderConfirmation = () => {

  return (
    <ConfirmationContainer>
      <ConfirmationContent>
        Thank you for your order, pay here ...
      </ConfirmationContent>
      <PaymentContent>
        <PayTitle>Payment method</PayTitle>
        <Description>Choose your payment method to pay</Description>
        <PaymentWrapper>
          <Payment>
            <img src={Credit} /><span>Credit Card</span>
          </Payment>
          <ApplyBtn src={NextBtn} />     
        </PaymentWrapper>
        <PaymentWrapper>
          <Payment>
            <img src={Paypal} /><span>Paypal</span>
          </Payment>
          <ApplyBtn src={NextBtn} />     
        </PaymentWrapper>
        <PaymentWrapper>
          <Payment>
            <img src={Bitcoin} /><span>Bitcoin</span>
          </Payment>
          <ApplyBtn src={NextBtn} />     
        </PaymentWrapper>       
      </PaymentContent>
    </ConfirmationContainer>
  );
};

export default OrderConfirmation;
