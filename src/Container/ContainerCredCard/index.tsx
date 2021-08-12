import React from "react";
import {
  ContainerCard,
  BigText,
  SmallText,
  ImgCard,
  ButtonCard,
  HelpCard,
} from "./style";
import CardCredit from "../../assets/cards.png";

export const ContainerCredCard = () => {
  return (
    <ContainerCard>
      <BigText>Marvel mastercard</BigText>
      <SmallText>Desbloqueie seus poderes</SmallText>
      <ImgCard src={CardCredit} />
      <ButtonCard>Cadastre-se agora</ButtonCard>
      <HelpCard>Entenda como funciona</HelpCard>
    </ContainerCard>
  );
};
