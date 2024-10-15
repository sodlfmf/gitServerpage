"use client";

import "./page.scss";

import MenuModal from "@/components/menu-modal";
import ArtworkModal from "@/components/artwork-modal/artwork-modal";
import { campaignData } from "@/mock/artwork/campaign";
import { artistData } from "@/mock/artwork/artist";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { artistImgType, campImgType } from "@/types";
import CampaignImgItem from "@/components/artwork-component/campaign-img-Item";
import ArtistImgItem from "@/components/artwork-component/artist-img-Item";

const Artwork = () => {
  gsap.registerPlugin(gsap);

  useGSAP(() => {
    const { toArray } = gsap.utils;

    let horizonDefaults = {
      defaults: {
        ease: "none",
        repeat: -1,
      },
    };

    let lines = [
      {
        container: toArray(".camp.item_container"),
        xPercent: -45,
        items: toArray(".camp.imgItem"),
        tl: gsap.timeline(horizonDefaults),
        tlParam: { speed: 15, duration: 30, repeatDelay: -8 },
      },
      {
        container: toArray(".artist.item_container"),
        xPercent: 45,
        items: toArray(".artist.imgItem"),
        tl: gsap.timeline(horizonDefaults),
        tlParam: { speed: -20, duration: 40, repeatDelay: -6 },
      },
    ];

    lines.map(
      ({
        container,
        xPercent,
        items,
        tl,
        tlParam: { speed, duration, repeatDelay },
      }) => {
        gsap.set(container, { xPercent: xPercent });
        tl.to(items, {
          x() {
            return this._targets[0].offsetWidth * speed;
          },
          duration,
          repeatDelay,
        });
        // items.map((item: any) => {
        //   item.querySelector("img").addEventListener("click", () => {
        //     tl.pause();
        //   });
        // });
      }
    );
  });

  return (
    <section className="artwork_container">
      <h1>ART WORK</h1>

      <article className="camp item_container">
        {campaignData.map(({ id, ImgUrl, title }) => {
          const imgProps: campImgType = { id, ImgUrl, title };
          return (
            <div key={id} className="camp imgItem">
              <CampaignImgItem imgProps={imgProps} />
            </div>
          );
        })}
      </article>
      <article className="artist item_container">
        {artistData.map(({ id, ImgUrl, artist }) => {
          const imgProps: artistImgType = {
            id,
            ImgUrl,
            artist,
          };
          return (
            <div key={id} className="artist imgItem">
              <ArtistImgItem imgProps={imgProps} />
            </div>
          );
        })}
      </article>

      <MenuModal />
      <ArtworkModal />
    </section>
  );
};

export default Artwork;
