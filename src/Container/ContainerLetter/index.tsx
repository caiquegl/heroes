import React from "react"
import {
  ContainerSubFooter,
  LetterFooter,
  TextLetter,
  Newsletter,
  TitleLetter,
  ContainerInput,
  Label,
  BoxInput,
  Input,
  Button,
} from "./style"

export const ContainerLetter = () => {
  return (
    <ContainerSubFooter>
      <LetterFooter>
        <TextLetter>receba as novidades da marvel</TextLetter>
      </LetterFooter>
      <Newsletter>
        <TitleLetter>
          Cadastre-se para receber nossas notícias em primeira mão!
        </TitleLetter>
        <ContainerInput>
          <Label>seu melhor e-mail</Label>
          <BoxInput>
            <Input placeholder="Informe seu melhor email" />
            <Button>Enviar</Button>
          </BoxInput>
        </ContainerInput>
      </Newsletter>
    </ContainerSubFooter>
  );
};
