import styled from 'styled-components'

export const ContainerCard = styled.div`
    padding: 147px calc((100vw - 1070px) / 2);
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const BigText = styled.div`
    color: #000000;
    font-size: 52px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
`

export const SmallText = styled.div`
    font-size: 25px;
    color: #9B9B9B;
    text-align: center;
`

export const ImgCard = styled.img`
    width: 100%;
    max-width: 1016px;
    height: 180px;
    margin-top: 43px;
`

export const ButtonCard = styled.button`
    background-color: #ED1B24;
    width: 324px;
    height: 61px;
    margin-top: 15px;
    text-transform: uppercase;
    color: #fff;
    border: none;
    align-self: center;
    font-weight: bold;
`
export const HelpCard = styled.p`
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    color: #ED1B24;
`