"use client";

import { createArtworkStore } from "@/store/artwork-store";
import { gsap } from "gsap";
import SectionContent from "./section-content";

const ArtDefaultSection = ({
  isSecondPage,
}: {
  isSecondPage: boolean;
}) => {
  const {
    isModalTypeArtist,
    selectedArtistData,
    selectedCampaignData,
  } = createArtworkStore();

  gsap.registerPlugin(gsap);

  return (
    <section className="art_modal_container">
      {isModalTypeArtist === false
        ? selectedCampaignData.map((item, i) => {
            const props = { isSecondPage, ...item };
            return (
              <div
                className={`art_modal_grid ${
                  isSecondPage === true ? `no_aside` : ""
                }`}
                key={i}>
                {isSecondPage === false ? (
                  <SectionContent {...props} />
                ) : (
                  <SectionContent {...props} />
                )}
              </div>
            );
          })
        : selectedArtistData.map((item, i) => {
            const props = { isSecondPage, ...item };
            return (
              <div
                className={`art_modal_grid ${
                  item.hasSeries === false ? `no_footer` : ""
                }`}
                key={i}>
                {isSecondPage === false ? (
                  <SectionContent {...props} />
                ) : (
                  <SectionContent {...props} />
                )}
              </div>
            );
          })}
    </section>
  );
};

export default ArtDefaultSection;
