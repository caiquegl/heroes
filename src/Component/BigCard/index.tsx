import React from "react";
import { Card, ImgCarrocel, NameHero } from "./style";

export interface IHeroes {
  id?: number;
  image: string;
  name: string;
}
export const BIgCard = ({id, image, name}: IHeroes) => {
  console.log(image)
  return (
    <Card>
      <ImgCarrocel bg={image ? image : ''}>
        <NameHero>{name ? name : ''}</NameHero>
      </ImgCarrocel>
    </Card>
  );
};
