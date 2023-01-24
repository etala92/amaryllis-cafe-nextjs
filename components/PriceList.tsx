import style from "@components/PriceList.module.css";
import PriceListItem from "./PriceListItem";

export type PriceListItems = {
  itemName: string;
  itemPrice: string;
  itemGroup: string;
}[];

type Props = {
  groupName: string;
  priceListItems: PriceListItems;
};

export default function PriceList({ groupName, priceListItems }: Props) {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <h3 className={style.title}>{groupName}</h3>
        <ul>
          {priceListItems.map((priceListItem) => (
            <PriceListItem
              key={priceListItem.itemName}
              itemName={priceListItem.itemName}
              itemPrice={priceListItem.itemPrice}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
