import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEthereum, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faEye, faClock } from "@fortawesome/free-regular-svg-icons";
import {
    faBoltLightning,
    faShapes,
    faCircleCheck,
    faTicketSimple,
    faShareNodes,
    faEllipsis,
    faChartSimple,
    faClipboard,
    faInfoCircle,
    faBars,
    faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import { Tooltip } from "primereact/tooltip";
import { Accordion, AccordionTab } from "primereact/accordion";

interface ISale {
    end: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
}

export interface INFTDetail {
    chain: string;
    imageSrc: string;
    author: string;
    name: string;
    id: string;
    owner: string;
    view: number;
    favorite: number;
    category: string;
    sale: ISale;
    priceEth: number;
    priceDol: number;
}

import { nftDetail } from "@Components/NFTDetail/mockData";

const NFTDetail = () => {
    return (
        <div id="nft-detail" className="flex flex-wrap space-x-5 px-3">
            <div id="left-side" className="w-5/12 h-full">
                <div
                    id="image-head-bar"
                    className="border rounded-t-lg flex items-center w-full justify-between h-12 px-4 text-black font-bold"
                >
                    <Tooltip target=".chain" position="top">
                        {nftDetail.chain}
                    </Tooltip>
                    <i className="chain cursor-pointer">
                        <FontAwesomeIcon icon={faEthereum} />
                    </i>
                    <div className="flex items-center space-x-2">
                        <span className="text-xs">{nftDetail.favorite}</span>
                        <Tooltip target=".favorite" position="top">
                            Favorite
                        </Tooltip>
                        <i className="favorite cursor-pointer">
                            <FontAwesomeIcon icon={faHeart} />
                        </i>
                    </div>
                </div>
                <img
                    id="image"
                    src={nftDetail.imageSrc}
                    alt="detail"
                    className="nft-detail-img rounded-b-lg h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                <div id="table" className="mt-5">
                    <div className="table-tab border rounded-t-lg">
                        <div className="table-header border-b p-5 space-x-3 font-bold">
                            <FontAwesomeIcon icon={faBars} />
                            <span>Description</span>
                        </div>
                        <div className="table-content p-5">
                            By GEMMA-Factory GEMMA (The Generative Electronic Museum of Metaverse Art) is a
                            comprehensive generative art collection by Tristan Eaton. Combining Eaton’s stunning
                            portraiture and layered collage, each piece carries its own unique personality and identity.
                        </div>
                    </div>
                    <Accordion multiple>
                        <AccordionTab
                            className="properties"
                            header={
                                <div className="flex space-x-2">
                                    <FontAwesomeIcon icon={faChartSimple} />
                                    <p>Properties</p>
                                </div>
                            }
                        >
                            <div className="grid grid-cols-3">
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">BACKGOUND</span>
                                    <span className="text-lg text-black">Blue</span>
                                    <span className="text-sm text-gray-500">7% have this trait</span>
                                </div>
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">FACIAL TEARS</span>
                                    <span className="text-lg text-black">CMYK</span>
                                    <span className="text-sm text-gray-500">68% have this trait</span>
                                </div>
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">BACKGOUND</span>
                                    <span className="text-lg text-black">Blue</span>
                                    <span className="text-sm text-gray-500">7% have this trait</span>
                                </div>
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">FACIAL TEARS</span>
                                    <span className="text-lg text-black">CMYK</span>
                                    <span className="text-sm text-gray-500">68% have this trait</span>
                                </div>
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">BACKGOUND</span>
                                    <span className="text-lg text-black">Blue</span>
                                    <span className="text-sm text-gray-500">7% have this trait</span>
                                </div>
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">FACIAL TEARS</span>
                                    <span className="text-lg text-black">CMYK</span>
                                    <span className="text-sm text-gray-500">68% have this trait</span>
                                </div>
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">BACKGOUND</span>
                                    <span className="text-lg text-black">Blue</span>
                                    <span className="text-sm text-gray-500">7% have this trait</span>
                                </div>
                                <div className="properties-item flex flex-col items-center bg-sky-100 h-30 p-3 m-1 rounded-lg border border-blue-300">
                                    <span className="text-xs text-sky-500">FACIAL TEARS</span>
                                    <span className="text-lg text-black">CMYK</span>
                                    <span className="text-sm text-gray-500">68% have this trait</span>
                                </div>
                            </div>
                        </AccordionTab>

                        <AccordionTab
                            className="about"
                            header={
                                <div className="flex space-x-2">
                                    <FontAwesomeIcon icon={faClipboard} />
                                    <p>
                                        About {nftDetail.name} BY {nftDetail.author}
                                    </p>
                                </div>
                            }
                        >
                            <div className="flex space-x-3">
                                <img
                                    className="avatar w-6 h-6 rounded-3xl mt-2"
                                    src="https://i.seadn.io/gae/FeqZQ2fAjaNqCrxpz2x9ZlNR9PXAP6Ok-lwnaX6ti-BomzyEKmnslCZorU1-aKWM_zq6Mop7RJHT_YqVEKBXh9PIOEciNlxnQYjl?auto=format&w=256"
                                    alt=""
                                />
                                <span className="about-text">
                                    <span className="space-x-1">
                                        <a className="text-blue-500" href="">
                                            GEMMA
                                        </a>
                                        <span>
                                            (The Generative Electronic Museum of Metaverse Art) is a comprehensive
                                            generative art collection by
                                        </span>
                                        <a className="text-blue-500" href="">
                                            Tristan Eaton
                                        </a>
                                        .
                                        <span>
                                            Combining Eaton's stunning portraiture and layered collage, each piece
                                            carries its own unique personality and identity.
                                        </span>
                                    </span>
                                    <br />
                                    <span className="space-x-1">
                                        <span>Category</span>
                                        <span className="font-semibold">{nftDetail.category}</span>
                                    </span>
                                </span>
                            </div>
                            <div className="about-icons my-8 box-content">
                                <Tooltip target=".website" position="top">
                                    Website
                                </Tooltip>
                                <i className="website cursor-pointer px-6 py-5 border-2 rounded-l-lg">
                                    <FontAwesomeIcon icon={faGlobe} />
                                </i>
                                <Tooltip target=".instagram" position="top">
                                    Instagram
                                </Tooltip>
                                <i className="instagram cursor-pointer px-6 py-5 border-2">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </i>
                                <Tooltip target=".twitter" position="top">
                                    Twitter
                                </Tooltip>
                                <i className="twitter cursor-pointer px-6 py-5 border-2 rounded-r-lg">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </i>
                            </div>
                        </AccordionTab>
                        <AccordionTab
                            className="details"
                            header={
                                <div className="flex space-x-2">
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    <p>Details</p>
                                </div>
                            }
                        >
                            <div className="space-y-3">
                                <div className="w-full flex justify-between">
                                    <span>Contract Address</span>
                                    <a className="text-blue-500" href="">
                                        0xc7d8...2aea
                                    </a>
                                </div>
                                <div className="w-full flex justify-between">
                                    <span>Token ID</span>
                                    <a className="text-blue-500" href="">
                                        {nftDetail.id}
                                    </a>
                                </div>
                                <div className="w-full flex justify-between">
                                    <span>Token Standard</span>
                                    <span className="text-gray-500">ERC-721</span>
                                </div>
                                <div className="w-full flex justify-between">
                                    <span>Chain</span>
                                    <span className="text-gray-500">{nftDetail.chain}</span>
                                </div>
                            </div>
                        </AccordionTab>
                    </Accordion>
                </div>
            </div>
            <div id="right-side" className="flex-1">
                <div className="flex justify-between">
                    <a href="/" className="author h-12 flex items-center space-x-2 text-blue-500">
                        <span>
                            {nftDetail.name} BY {nftDetail.author}
                        </span>
                        <i>
                            <FontAwesomeIcon icon={faCircleCheck} />
                        </i>
                    </a>
                    <div className="functions flex items-center space-x-8 text-xl mr-3">
                        <Tooltip target=".share" position="top">
                            Share
                        </Tooltip>
                        <i className="share cursor-pointer">
                            <FontAwesomeIcon icon={faShareNodes} />
                        </i>
                        <Tooltip target=".more" position="top">
                            More
                        </Tooltip>
                        <i className="more cursor-pointer">
                            <FontAwesomeIcon icon={faEllipsis} />
                        </i>
                    </div>
                </div>
                <h1 className="name h-14 text-4xl flex items-center font-semibold mt-2 mb-1">
                    {nftDetail.name} {nftDetail.id}
                </h1>
                <h2 className="owner h-9 flex justify-start items-center space-x-1">
                    <span>Owned by</span>
                    <a href="/" className="text-blue-500">
                        {nftDetail.owner}
                    </a>
                </h2>
                <div className="flex flex-start space-x-8 pt-5 pb-8">
                    <div className="view space-x-1">
                        <i>
                            <FontAwesomeIcon icon={faEye} />
                        </i>
                        <span>{nftDetail.view}</span>
                        <span>views</span>
                    </div>
                    <div className="favorite space-x-1">
                        <i>
                            <FontAwesomeIcon icon={faHeart} />
                        </i>
                        <span>{nftDetail.favorite}</span>
                        <span>favorites</span>
                    </div>
                    <div className="category space-x-1">
                        <i className="">
                            <FontAwesomeIcon icon={faShapes} />
                        </i>
                        <span>{nftDetail.category}</span>
                    </div>
                </div>
                <div className="boxes w-full border rounded-lg">
                    <div className="time-box flex flex-col border-b p-5 text-lg">
                        <div className="space-x-2 ">
                            <i>
                                <FontAwesomeIcon icon={faClock} />
                            </i>
                            <span>Sale ends {nftDetail.sale.end}</span>
                        </div>
                        <div className="time flex item-center space-x-14 mt-2">
                            <div className="day flex flex-col">
                                <span className="font-semibold text-2xl">{nftDetail.sale.day}</span>
                                <span>Days</span>
                            </div>
                            <div className="hour flex flex-col">
                                <span className="font-semibold text-2xl">{nftDetail.sale.hour}</span>
                                <span>Hours</span>
                            </div>
                            <div className="minute flex flex-col">
                                <span className="font-semibold text-2xl">{nftDetail.sale.minute}</span>
                                <span>Minutes</span>
                            </div>
                            <div className="second flex flex-col">
                                <span className="font-semibold text-2xl">{nftDetail.sale.second}</span>
                                <span>Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className="buy-box flex flex-col p-5 ">
                        <span className="text-md text-gray-500">Current price</span>
                        <div className="price flex mb-3 space-x-2">
                            <span className="text-3xl font-bold space-x-1 my-1 ">
                                <span className="price-value">{nftDetail.priceEth}</span>
                                <span>ETH</span>
                            </span>
                            <span className="flex flex-col justify-end text-gray-500 my-1">${nftDetail.priceDol}</span>
                        </div>
                        <div className="buttons h-16 flex space-x-2 font-bold">
                            <div className="w-1/2 rounded-xl text-white bg-blue-500 flex-row-reverse flex">
                                <button className="buy-now-btn w-12">
                                    <i>
                                        <FontAwesomeIcon icon={faBoltLightning} />
                                    </i>
                                    <span className="buy-now-text ml-4 hidden">Buy now</span>
                                </button>
                                <button className="add-to-cart-btn flex-1 border-r">Add to cart</button>
                            </div>
                            <button className="make-ofter-btn w-1/2 border-2 border-slate-300 rounded-xl space-x-2 text-blue-500">
                                <i>
                                    <FontAwesomeIcon icon={faTicketSimple} />
                                </i>
                                <span>Make offer</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NFTDetail;