import style from "@components/PriceListItem.module.css";

type Props = {
  itemName: string;
  itemPrice: string;
};

export default function PriceListItem({ itemName, itemPrice }: Props) {
  return (
    <li className={style.item}>
      <span className={style.name}>
        {itemName}
        <span className={style.leaders} aria-hidden="true"></span>
      </span>
      <span className={style.price}>{itemPrice}</span>
    </li>
  );
}
