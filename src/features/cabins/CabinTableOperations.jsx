import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "No discount", label: "No discount" },
          { value: "With discount", label: "With discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
