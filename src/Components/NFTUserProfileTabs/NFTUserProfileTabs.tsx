import { useState } from "react";
import {
  NFT_USER_PROFILE_TABS,
  NFT_USER_PROFILE_TABS_LIST,
} from "@Constants/index";
import NFTCollectionList from "@Components/NFTCollectionList/NFTCollectionList";
import { INFTCollectionItem } from "@Interfaces/index";

export interface INFTUserProfileTabsProps {
  nftCollectionList: INFTCollectionItem[];
  setCountFetchNftCollectionList: React.Dispatch<React.SetStateAction<number>>;
}

const NFTUserProfileTabs = ({
  nftCollectionList,
  setCountFetchNftCollectionList,
}: INFTUserProfileTabsProps) => {
  const [currentTab, setCurrentTab] = useState(NFT_USER_PROFILE_TABS.COLLECTED);

  const handleChangeTab = (tab: NFT_USER_PROFILE_TABS) => {
    if (currentTab === tab) return;
    setCurrentTab(tab);
  };

  return (
    <div>
      <div className="flex my-8">
        {NFT_USER_PROFILE_TABS_LIST.length > 0 &&
          NFT_USER_PROFILE_TABS_LIST.map((item) => (
            <div
              className={`mr-12 py-4 cursor-pointer font-bold border-b-2 ${
                currentTab === item
                  ? "text-gray-600 border-gray-600"
                  : "text-gray-400 border-transparent"
              }`}
              onClick={() => handleChangeTab(item)}
            >
              {item}
            </div>
          ))}
      </div>
      {currentTab === NFT_USER_PROFILE_TABS.COLLECTED && (
        <NFTCollectionList
          nftCollectionList={nftCollectionList}
          key={1}
          setCountFetchNftCollectionList={setCountFetchNftCollectionList}
        />
      )}
      {currentTab === NFT_USER_PROFILE_TABS.CREATED && (
        <NFTCollectionList
          nftCollectionList={nftCollectionList}
          key={2}
          setCountFetchNftCollectionList={setCountFetchNftCollectionList}
        />
      )}
      {currentTab === NFT_USER_PROFILE_TABS.FAVORITED && (
        <NFTCollectionList
          nftCollectionList={nftCollectionList}
          key={3}
          setCountFetchNftCollectionList={setCountFetchNftCollectionList}
        />
      )}
    </div>
  );
};

export default NFTUserProfileTabs;
