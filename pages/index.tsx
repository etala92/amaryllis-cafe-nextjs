import PriceList, { type PriceListItems } from "@components/PriceList";
import PriceListItem from "@components/PriceListItem";
import priceListItems from "@data/pricelist.json";

export default function Home({
  priceListItems,
}: {
  priceListItems: PriceListItems;
}) {
  const groupList = [
    ...new Set(priceListItems.map((priceListItem) => priceListItem.itemGroup)),
  ];
  return (
    <>
      {groupList.map((groupName) => (
        <PriceList
          key={groupName}
          groupName={groupName}
          priceListItems={priceListItems.filter(
            (item) => item.itemGroup === groupName
          )}
        />
      ))}
    </>
  );
}

// Fetching data from the JSON file
export async function getStaticProps() {
  return {
    props: { priceListItems },
  };
}
