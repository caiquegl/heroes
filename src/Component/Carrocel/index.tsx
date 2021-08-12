import React, { useEffect, useState } from "react";
import { ContainerCarrocel, CarouselEdit } from "./style";
import { BIgCard, IHeroes } from "../BigCard";
import md5 from "md5";
import api from "../../services/api";
import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons"

export const CarroselC = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  const [loading, setLoading] = useState(true)

  const getHeroes = async () => {
    try {
      setLoading(true);
      let timestamp = Math.floor(Date.now() / 1000);
      let publicKey = "1a494e7ebe4e6ba0868781950a832a57";
      let keyMd5 = md5(
        `${timestamp}a4ccaee47308470f924fcd041d29710e11f9eaeb${publicKey}`
      );

      const hulk = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&id=1009351`
      );
      const spiderMan = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&id=1012200`
      );
      const thanos = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&id=1009652`
      );
      const thor = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&id=1009664`
      );
      const ironMan = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&id=1009368`
      );
      const blackWindow = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&id=1009189`
      );
      const blackPanter = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&id=1009187`
      );

      let data = [
        {
          name: "Hulk",
          id: 1009351,
          image: `${hulk.data.data.results[0].thumbnail.path}.${hulk.data.data.results[0].thumbnail.extension}`,
        },
        {
          name: "Homem Aranha",
          id: 1012200,
          image: `${spiderMan.data.data.results[0].thumbnail.path}.${spiderMan.data.data.results[0].thumbnail.extension}`,
        },
        {
          name: "Thanos",
          id: 1009652,
          image: `${thanos.data.data.results[0].thumbnail.path}.${thanos.data.data.results[0].thumbnail.extension}`,
        },
        {
          name: "Thor",
          id: 1009664,
          image: `${thor.data.data.results[0].thumbnail.path}.${thor.data.data.results[0].thumbnail.extension}`,
        },
        {
          name: "Homem de ferro",
          id: 1009368,
          image: `${ironMan.data.data.results[0].thumbnail.path}.${ironMan.data.data.results[0].thumbnail.extension}`,
        },
        {
          name: "Viúva Negra",
          id: 1009189,
          image: `${blackWindow.data.data.results[0].thumbnail.path}.${blackWindow.data.data.results[0].thumbnail.extension}`,
        },
        {
          name: "Pantera Negra",
          id: 1009187,
          image: `${blackPanter.data.data.results[0].thumbnail.path}.${blackPanter.data.data.results[0].thumbnail.extension}`,
        },
      ];
      setHeroes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);
  return (
    <>
    {loading === false &&
      <CarouselEdit effect="fade" arrows nextArrow={<RightSquareOutlined />} prevArrow={<LeftSquareOutlined/>}>
        <div>
          <ContainerCarrocel>
            <BIgCard image={heroes[0].image} name={heroes[0].name} />
            <BIgCard image={heroes[1].image} name={heroes[1].name} />
            <BIgCard image={heroes[2].image} name={heroes[2].name} />
            <BIgCard image={heroes[3].image} name={heroes[3].name} />
          </ContainerCarrocel>
        </div>
        <div>
          <ContainerCarrocel>
            <BIgCard image={heroes[4].image} name={heroes[4].name} />
            <BIgCard image={heroes[5].image} name={heroes[5].name} />
            <BIgCard image={heroes[6].image} name={heroes[6].name} />
          </ContainerCarrocel>
        </div>
      </CarouselEdit>
    }
    </>
  );
};
