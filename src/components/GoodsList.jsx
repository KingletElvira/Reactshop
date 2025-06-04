import { GoodsItem } from "./GoodsItem";

export function GoodsList({ goods = [], addToBasket }) {
  if (!goods.length) {
    return <h3>Not found</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
}