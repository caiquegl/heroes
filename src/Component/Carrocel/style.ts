import styled from 'styled-components'
import { Carousel } from "antd";

export const ContainerCarrocel = styled.div`
width: 1070px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const CarouselEdit = styled(Carousel)`
    max-width: 1100px;

    &&& .slick-dots-bottom{
        margin-bottom: -50px;
    }

   &&& .slick-arrow {
       color: #fff;
       font-size: 30px;
   }
`