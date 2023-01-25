import PriceList, { type PriceListItems } from "@components/PriceList";
import groupList from "@data/categories.json";
import priceListItems from "@data/pricelist.json";

export default function Home({
  priceListItems,
}: {
  priceListItems: PriceListItems;
}) {
  return (
    <>
      {groupList.map((group) => (
        <PriceList
          key={group.name}
          groupName={group.name}
          groupImageUrl={group.image}
          priceListItems={priceListItems.filter(
            (item) => item.itemGroup === group.name
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
