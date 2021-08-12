import React from 'react'
import {
    Favoriteds,
    Navgation,
    TextFavorited,
  } from "./style"
import {CarroselC} from '../../Component/Carrocel'

export const ContainerFavoriteds = () => {
    return (
        <Favoriteds>
        <Navgation>
          <TextFavorited>personagens em destaques</TextFavorited>
        </Navgation>
        <CarroselC />
      </Favoriteds>
    )
}
