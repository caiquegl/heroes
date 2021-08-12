import React from "react"
import {
    Banner,
    ImgBanner,
    TextBanner,
  } from "./style"
export const ContainerBanner = () => {
  return (
    <Banner>
      <ImgBanner />
      <TextBanner>conheça nossos personagens</TextBanner>
    </Banner>
  );
};
