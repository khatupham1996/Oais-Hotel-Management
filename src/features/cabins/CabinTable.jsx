// import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
// import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Empty from "../../ui/Empty";

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
  width: 100%;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins = cabins;

  if (filterValue === "No discount") {
    // Changed from "no-discount"
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  } else if (filterValue === "With discount") {
    // Changed from "with-discount"
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  }

  return (
    <Menus>
      <Table>
        <TableHeader>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </TableHeader>
        {filteredCabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </Table>
    </Menus>
  );
}

export default CabinTable;
