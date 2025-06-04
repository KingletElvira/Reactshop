import { useState, useEffect } from "react";
import { Preloader } from "../Preloader";
import { GoodsList } from "../GoodsList";
import { API_KEY, API_URL } from "../config";
import { Cart } from "../Cart";
import { BasketList } from "../BasketList";
import { Tooltip } from "../Tooltip";

export function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_URL, {
        headers: { Authorisation: API_KEY },
      });
      const data = await response.json();
      setGoods(data.shop);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if(isTooltipVisible){
      const timer = setTimeout(() => {
        setTooltipVisible(false)
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isTooltipVisible]);

  const addToBasket = (item) => {
    setOrder((prevOrder) => {
      const itemIndex = prevOrder.findIndex(
        (orderItem) => orderItem.mainId === item.mainId
      );

      if (itemIndex < 0) {
        return [...orderItem, { ...item, quantity: 1 }];
      }
  
      return prevOrder.map((orderItem, index) => 
        index === itemIndex
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
    );
  });
};

  const removeFromBasket = (mainId) => {
    setOrder((prevOrder) => prevOrder.filter((item) => item.mainId !== mainId));
  };

  const incrementQuantity = (mainId) => {
    setOrder((prevOrder) =>
      prevOrder.map((item) =>
        item.mainId === mainId ? { ...item, quantity: item.quantity + 1} : item
      )
    );
  };

  const decrementQuantity = (mainId) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) => {
          if (item.mainId === mainId) {
            return item.quantity > 1
              ? { ...item, quantity: item.quantity - 1}
              : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const handleBasketShow = () => {
    setIsBasketShow((prev) => !prev);
  };

  const closeModal = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setBasketShow(false);
    }
  };

  return (
    <main className="container content">
      <div className="cart-container">
        <div className="cart" onClick={handleBasketShow}>
          <i className="mater">shop</i>
        </div>
      </div>
    </main>
  );
}