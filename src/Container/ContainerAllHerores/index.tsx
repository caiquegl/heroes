import React, { useEffect, useState } from "react";
import {
  ContainerAllHeroes,
  TextAllHeroes,
  ContainerPagination
} from "./style";
import { Row, Pagination } from "antd"
import { SmallCard } from "../../Component/SmallCard";
import api from "../../services/api";
import md5 from "md5";

export const ContainerAllHerores = () => {

  const [paginete, setPaginate] = useState({
    defaultCurrent: 1,
    offset: 0,
    limit: 30,
    total: 0,
    results: []
  })

  const getHeroes = async (current?: number) => {
    try {

      let timestamp = Math.floor(Date.now() / 1000);
      let publicKey = "1a494e7ebe4e6ba0868781950a832a57";
      let keyMd5 = md5(`${timestamp}a4ccaee47308470f924fcd041d29710e11f9eaeb${publicKey}`);

      const {data} = await api.get(
        `characters?ts=${timestamp}&apikey=${publicKey}&hash=${keyMd5}&limit=${paginete.limit}&offset=${current && current > 1 ?  current * paginete.limit : 0}`
      );
      setPaginate({...data.data, defaultCurrent: current ? current : 1})
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHeroes();
  }, []);

  return (
    <ContainerAllHeroes>
      <TextAllHeroes>lista de personagens da marvel</TextAllHeroes>
      <Row gutter={[30, 30]}>
        {paginete.results && paginete.results.length > 0 && paginete.results.map((item: any) => (
          <SmallCard  hero={item}/>
        ))}
      </Row>
      <ContainerPagination>
        <Pagination
          onChange={getHeroes}
          defaultCurrent={paginete.defaultCurrent}
          total={paginete.total}
        />
      </ContainerPagination>
    </ContainerAllHeroes>
  );
};
