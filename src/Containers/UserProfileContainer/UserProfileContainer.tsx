import NFTUserProfileTabs from "@Components/NFTUserProfileTabs/NFTUserProfileTabs";
import NFTImageUserProfile from "@Components/UserProfile/UserImage";
import UserInfor from "@Components/UserProfile/UserInfor";
import { useContext, useRef } from "react";
import { AppContext } from "@Store/index";
import { Toast } from "primereact/toast";
import useNFTCollectionList from "@Hooks/useNFTCollectionList";
import { useRouter } from "next/router";
import UserImage from "@Components/UserProfile/UserImage";
import MakeOfferList from "@Components/MakeOfferList/MakeOfferList";
import useMakeOffer from "@Hooks/useMakeOffer";

const UserProfileContainer = () => {
  const web3Context = useContext(AppContext);
  const { nftCollectionList, refetch } = useNFTCollectionList({
    owner: web3Context.state.web3.myAddress as string,
  });
  const { makeOfferList, refetch: makeOfferRefetch } = useMakeOffer(
    web3Context.state.web3.myAddress
  );

  console.log(
    "🚀 ~ file: UserProfileContainer.tsx:19 ~ UserProfileContainer ~ makeOfferList:",
    makeOfferList
  );
  const toast = useRef<Toast>(null);

  return (
    <>
      {web3Context.state.web3.provider ? (
        <>
          <div>
            <Toast ref={toast} position="top-center" />
            <UserImage></UserImage>
            <UserInfor></UserInfor>
            <MakeOfferList makeOfferList={makeOfferList}></MakeOfferList>
            <NFTUserProfileTabs
              nftCollectionList={nftCollectionList}
              refetch={refetch}
            />
          </div>
        </>
      ) : (
        <>Please login</>
      )}
    </>
  );
};

export default UserProfileContainer;
