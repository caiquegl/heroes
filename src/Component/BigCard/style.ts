import styled from 'styled-components'

interface PImage {
    bg: string
}

export const Card = styled.div`
    border-bottom: 4px solid red;
    width:  240px;
    margin-left: 20px;
`


export const ImgCarrocel = styled.div<PImage>`
    background-image: url('${(props) => props.bg}');
    background-position: center;
    background-size: cover;
    width: 240px;
    height: 271px;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column-reverse;

`

export const NameHero = styled.p`
    padding-bottom: 0;
    text-align: center;
    width: 100%;
    height: 50px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
`