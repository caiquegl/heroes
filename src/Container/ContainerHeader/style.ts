import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    height: 105px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
`

export const LogoImg = styled.img`
    width: 139px;
    height: 62px;
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
`

export const CardMenu = styled.div`
    height: 105px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    :hover{
        transition: all 0.2s;
        background-color: #494949;
    }
`

