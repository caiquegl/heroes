import React from "react";
import {
  CardSub,
  ImgCardSub,
  NameHeroSub,
} from "./style";
import { Col } from "antd";

export const SmallCard = ({hero}: any) => {
  return (
    <Col span={4}>
      <CardSub>
        <ImgCardSub image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>
        <NameHeroSub>{hero.name}</NameHeroSub>
      </CardSub>
    </Col>
  );
};
