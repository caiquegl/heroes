import styled from 'styled-components'
import Bg from '../../assets/bgVingadores.jpg'

export const Banner = styled.div`
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 617px;
`

export const ImgBanner = styled.div`
    height: 100%;
    opacity: 0.50;
    width: 100%;
    background-image: url(${Bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
`

export const TextBanner = styled.p`
    padding: 0;
    font-size: 70px;
    width: 592px;
    height: 418px;
    position: absolute;
    color: #fff;
    text-transform: uppercase;
    bottom: 20px;
    left: 10%;
`
