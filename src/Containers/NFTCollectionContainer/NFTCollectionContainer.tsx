import NFTCollectionList from "@Components/NFTCollectionList/NFTCollectionList";
import ImageProfile from "@Components/NFTProfile/ImageProfile";
import NFTInfor from "@Components/NFTProfile/NFTInfor";
import { getNFTCollectionListService } from "@Services/ApiService";
import { useState, useEffect, useRef } from "react";
import { INFTCollectionItem } from "@Interfaces/index";
import { Toast } from "primereact/toast";
import { useRouter } from "next/router";

const NFTCollectionContainer = () => {
  const [nftCollectionList, setNftCollectionList] = useState<
    INFTCollectionItem[]
  >([]);
  const [countFetchNftCollectionList, setCountFetchNftCollectionList] =
    useState<number>(0);

  const toast = useRef<Toast>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      getNFTCollectionListService().then((data) => {
        if (data) {
          setNftCollectionList(data.nfts);
        } else {
          toast.current &&
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
  }, [countFetchNftCollectionList, router]);
  return (
    <>
      <Toast ref={toast} position="top-center" />
      <ImageProfile nftCollectionList={nftCollectionList}></ImageProfile>
      <NFTInfor nftCollectionList={nftCollectionList}></NFTInfor>
      <NFTCollectionList
        nftCollectionList={nftCollectionList}
        setCountFetchNftCollectionList={setCountFetchNftCollectionList}
      />
    </>
  );
};

export default NFTCollectionContainer;
