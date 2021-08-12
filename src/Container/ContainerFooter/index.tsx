import React from "react";
import {
  ContainerBoxFooter,
  About,
  ContainerM,
  TextM,
  Company,
  TitleCompany,
  ListCompany,
  Blog,
  ContainerNews,
  ContentBlog,
  ImageBlog,
  TitleBlog,
  MoreBlog,
  ContainerSocial,
  BoxSocial,
  Social,
} from "./style";
import Face from "../../assets/icons/facebook.svg";
import Spotify from "../../assets/icons/instagram.svg";
import Insta from "../../assets/icons/spotify.svg";
import Youtube from "../../assets/icons/youtube.svg";

export const ContainerFooter = () => {
  return (
    <ContainerBoxFooter>
      <About>
        <ContainerM>
          <TextM>M</TextM>
        </ContainerM>
        <Company>
          <TitleCompany>A Marvel</TitleCompany>
          <ListCompany>Sobre a Marvel</ListCompany>
          <ListCompany>Ajuda</ListCompany>
          <ListCompany>Carreiras</ListCompany>
        </Company>
        <Company>
          <TitleCompany>Mídia</TitleCompany>
          <ListCompany>Filmes</ListCompany>
          <ListCompany>Quadrinhos</ListCompany>
          <ListCompany>Programas de TV</ListCompany>
          <ListCompany>Jogos</ListCompany>
        </Company>
      </About>
      <Blog>
        <ContainerNews>
          <TitleCompany>Último do blog</TitleCompany>
          <ContentBlog>
            <ImageBlog src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2021/07/legiao_ZcvySztd6bXR.png.jpeg" />
            <TitleBlog>
              Captain marvel Challange invadiu o tapete vermelho do oscar
            </TitleBlog>
          </ContentBlog>
          <MoreBlog>Continuar lendo</MoreBlog>
        </ContainerNews>
        <ContainerSocial>
          <TitleCompany>Siga a Marvel</TitleCompany>
          <BoxSocial>
            <Social src={Face} />
            <Social src={Spotify} />
            <Social src={Insta} />
            <Social src={Youtube} />
          </BoxSocial>
        </ContainerSocial>
      </Blog>
    </ContainerBoxFooter>
  );
};
