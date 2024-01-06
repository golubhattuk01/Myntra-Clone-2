import { useSelector } from "react-redux";
import BagSummary from "./BagSummary";
import { useState, useEffect } from "react";

const LoadSide = () => {
  const [obj, setObj] = useState({
    size: 0,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  });
  const bagList = useSelector((store) => store.bagitem);
  const [finalMrp, setFinalMrp] = useState(0);
  const [disc, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  const price = (item) => {
    return (
      item.current_price - (item.current_price * item.discount_percentage) / 100
    );
  };

  const discount = (item) => {
    return (item.current_price * item.discount_percentage) / 100;
  };

  const totalMrp = (item) => {
    return item.current_price;
  };

  useEffect(() => {
    let finalMrpValue = 0;
    let discountValue = 0;
    let totalValue = 0;

    bagList.forEach((item) => {
      finalMrpValue += price(item);
    });

    bagList.forEach((item) => {
      discountValue += discount(item);
    });

    bagList.forEach((item) => {
      totalValue += totalMrp(item);
    });

    setFinalMrp(finalMrpValue);
    setDiscount(discountValue);
    setTotal(totalValue);

    setObj({
      size: bagList.length,
      totalMRP: Math.round(totalValue),
      totalDiscount: Math.round(discountValue),
      finalPayment: bagList.length === 0 ? 0 : Math.round(finalMrpValue) + 99,
    });
  }, [bagList]);

  if (bagList.length !== 0) return <BagSummary obj={obj}></BagSummary>;
  return;
};

export default LoadSide;
