import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useState } from "react";
import { useRouter } from "next/router";
import { INFTCollectionItem } from "@Interfaces/index";

export interface INFTCollectionTableListProps {
  nftCollectionList: INFTCollectionItem[];
}

const NFTCollectionTableList = ({
  nftCollectionList,
}: INFTCollectionTableListProps) => {
  const [selectedNFTs, setSelectedNFTs] = useState(null);
  const router = useRouter();

  const imageBodyTemplate = (rowData: INFTCollectionItem) => {
    return (
      <img
        src={
          rowData.imageSrc ||
          "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
        }
        alt="item image"
        className="product-image"
      />
    );
  };

  const priceBodyTemplate = (rowData: INFTCollectionItem): number => {
    return rowData?.listing?.price || 0;
  };

  const nameBodyTemplate = (rowData: INFTCollectionItem) => {
    return (
      <div>
        <a style={{ cursor: "pointer" }} onClick={() => router.push("/detail")}>
          {rowData.name || "Item name"}
        </a>
      </div>
    );
  };

  return (
    <div className="nft-collection-table-list">
      <div className="datatable-templating-demo ">
        <div className="card">
          <DataTable
            value={nftCollectionList}
            selection={selectedNFTs}
            onSelectionChange={(e) => setSelectedNFTs(e.value)}
            dataKey="id"
            responsiveLayout="scroll"
          >
            <Column
              selectionMode="multiple"
              headerStyle={{ width: "3em" }}
            ></Column>
            <Column field="name" header="Name" body={nameBodyTemplate}></Column>
            <Column header="Image" body={imageBodyTemplate}></Column>
            <Column
              field="price"
              header="Current Price"
              body={priceBodyTemplate}
            ></Column>
            <Column header="Best Offer"></Column>
            <Column header="Last Sale"></Column>
            <Column header="Owner"></Column>
            <Column header="Time Listed"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default NFTCollectionTableList;
