import { Header, LogoImg, Menu, CardMenu } from "./style";
import Logo from "../../assets/logo.png";

export const ContainerHeader = () => {
  return (
    <Header>
      <LogoImg src={Logo} />
      <Menu>
        <CardMenu>filmes</CardMenu>
        <CardMenu>quadrinhos</CardMenu>
        <CardMenu>programas de tv</CardMenu>
        <CardMenu>jogos</CardMenu>
      </Menu>
    </Header>
  );
};
