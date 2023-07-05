import React, { useEffect, useState } from 'react';
import { ConfirmContainer } from './confirmation.styles';

const ConfirmationPage = () => {
  const bankAccountDetails = {
    accountNumber: '1234567890',
    accountHolder: 'Małgorzata Kolarska',
    bankName: 'PKO BP',
    swiftCode: 'ABCD1234',
  };
  const [orderNum, setOrderNum] = useState();
  const [bankNum, setBankNum] = useState();
  useEffect(()=>{
    const ordernum = Math.floor(Math.random() * 9000000000) + 1000000000;
    setOrderNum(ordernum);
    const banknum = Math.floor(Math.random() * 90000000) + 10000000;
    setBankNum(banknum);
  }, [])

  return (
    <ConfirmContainer>
      <h1>Potwierdzenie zamówienia</h1>
      <p style={{fontFamily: 'bold', fontSize: '22px'}}>Dziękujemy za złożenie zamówienia!</p>
      <p style={{marginTop: '40px'}}>Twój numer zamówienia to: #{orderNum}</p>
      <p>Wkrótce otrzymasz wiadomość email z potwierdzeniem.</p>

      <h2 style={{marginTop: '30px'}}>Szczegóły płatności</h2>
      <p>Numer konta bankowego: {bankNum}</p>
      <p>Tytuł przelewu: Numer zamówienia - #{orderNum}</p>
      <p>Właściciel konta: {bankAccountDetails.accountHolder}</p>
      <p>Nazwa banku: {bankAccountDetails.bankName}</p>
      <p>SWIFT/BIC: {bankAccountDetails.swiftCode}</p>
    </ConfirmContainer>
  );
};

export default ConfirmationPage;
