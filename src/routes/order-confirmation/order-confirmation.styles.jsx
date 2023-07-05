import styled from "styled-components";

export const ConfirmationContainer = styled.div`
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px auto 0;
`;

export const ConfirmationContent = styled.div`
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  font-family: "Arial", sans-serif;
  color: #4b6a48;
`;

export const PaymentContent = styled.div`
  background-color: #002040;
  border-radius: 10px;
  padding: 20px;
  margin-top: 80px;
  color: #ffffff;
`;

export const PayTitle = styled.div`
  margin-top: 10px;
  font-size: 32px;
  font-weight: bold;
`;

export const Description = styled.div`
  color: #6c757d;
  font-size: 17px;
  margin-top: 20px;
`;

export const PaymentWrapper = styled.div`
  background-color: #89abe3;
  border-radius: 5px;
  padding: 15px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  alignitems: center;
  border: 1px;
  cursor: pointer;
  width: 430px;
  &:hover {
   scale: 1.02;
   transition-delay: 0.1s;   
   transition-duration: 0.2s;   
  }
`;

export const Payment = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  span {
    margin-left: 20px;
  }
`;

export const ApplyBtn = styled.img`
  width: 40px;
  height: 40px;  
`;
