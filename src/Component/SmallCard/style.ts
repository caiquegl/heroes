import styled from 'styled-components'

interface Props {
    image: string
}

export const CardSub = styled.div`
    width:  170px;
    height: 193px;
    margin-top: 100px;
`

export const ImgCardSub = styled.div<Props>`
    border-bottom: 4px solid red;
    width: 100%;
    height: 100%;
    background-image: url('${(props) => props.image}');
    background-position: center;
    background-size: cover;
`

export const NameHeroSub = styled.div`
    width: 100%;
    height: 79px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background-color: rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
`
