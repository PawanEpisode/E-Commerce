import { useState, useEffect } from 'react';
import { Products } from '../../type';

const useTotalAmount = (productData: Products[]) => {
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = (data: Products[]) => {
    return data.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  useEffect(() => {
    setTotalAmount(calculateTotalAmount(productData));
  }, [productData]);

  return totalAmount;
};

export default useTotalAmount;