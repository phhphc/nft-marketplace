import NFTCollectionList from "@Components/NFTCollectionList/NFTCollectionList";
import ImageProfile from "@Components/NFTProfile/ImageProfile";
import NFTInfor from "@Components/NFTProfile/NFTInfor";
import { NFT_COLLECTION_MODE } from "@Constants/index";
import { getNFTCollectionListService } from "@Services/ApiService";
import { useState, useEffect, useContext, useRef } from "react";
import { INFTCollectionItem } from "@Interfaces/index";
import { AppContext } from "@Store/index";
import { Toast } from "primereact/toast";

const NFTCollectionContainer = () => {
  const [nftCollectionList, setNftCollectionList] = useState<
    INFTCollectionItem[]
  >([]);
  const [countFetchNftCollectionList, setCountFetchNftCollectionList] =
    useState<number>(0);

  const toast = useRef<any>(null);

  const web3Context = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      getNFTCollectionListService().then((data) => {
        if (data) {
          setNftCollectionList(data.nfts);
        } else {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "Fail to load collections",
            life: 3000,
          });
        }
      });
    };

    fetchData();
  }, [countFetchNftCollectionList]);
  return (
    <>
        <Toast ref={toast} position="bottom-right" />
        <ImageProfile></ImageProfile>
        <NFTInfor></NFTInfor>
        <NFTCollectionList
          nftCollectionList={nftCollectionList}
          mode={NFT_COLLECTION_MODE.CAN_BUY}
          setCountFetchNftCollectionList={setCountFetchNftCollectionList}
        />
        </>
  );
};

export default NFTCollectionContainer;
