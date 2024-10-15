import CampaignAsideContent from "./aside-content-campaign";
import ArtistAsideContent from "./aside-content-artist";
import { createArtworkStore } from "@/store/artwork-store";
import "./art-default-aside.scss";
import Image from "next/image";

const ArtDefaultAside = ({ ...item }) => {
  const { isModalTypeArtist } = createArtworkStore();

  return (
    <aside className="art_modal_aside">
      {item.logoImgUrl === "" ? null : (
        <figure>
          <Image
            className={`logo ${isModalTypeArtist === false && `stree`}`}
            src={`${item.logoImgUrl}`}
            width={200}
            height={200}
            style={{}}
            alt={`${item.artist}-logo`}
          />
        </figure>
      )}
      {isModalTypeArtist === false ? (
        <CampaignAsideContent {...item} />
      ) : (
        <ArtistAsideContent {...item} />
      )}
    </aside>
  );
};

export default ArtDefaultAside;
