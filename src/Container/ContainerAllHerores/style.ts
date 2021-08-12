import styled from 'styled-components'

export const ContainerAllHeroes = styled.div`
    background-color: #fff;
    padding: 147px calc((100vw - 1070px) / 2);
`
export const TextAllHeroes = styled.p`
    font-size: 28px;
    text-transform: uppercase;
    color: #000;
    font-weight: bold;
    margin-bottom: -59px;
`

export const ContainerPagination = styled.div`
    margin-top: 195px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &&& .ant-pagination-prev{
        display: none;
    }

    &&& .ant-pagination-next{
        display: none;
    }

    &&& .ant-pagination-item{
        border: none;
    }
    &&& .ant-pagination-item-active{
        background-color: red;
    }

    &&& .ant-pagination-item-active a{
        color: #fff;
    }

    &&& .ant-pagination-options{
        display: none;
    }
`