import React from "react"
import { ContainerBanner } from "../../Container/ContainerBanner"
import { ContainerHeader } from "../../Container/ContainerHeader"
import { ContainerFavoriteds } from "../../Container/ContainerFavoriteds"
import { ContainerAllHerores } from "../../Container/ContainerAllHerores"
import { ContainerCredCard } from "../../Container/ContainerCredCard"
import { ContainerLetter } from "../../Container/ContainerLetter"
import { ContainerFooter } from "../../Container/ContainerFooter"

export const Home = () => {

  return (
    <>
      <ContainerHeader />
      <ContainerBanner />
      <ContainerFavoriteds />
      <ContainerAllHerores />
      <ContainerCredCard />
      <ContainerLetter />
      <ContainerFooter />
    </>
  )
}
