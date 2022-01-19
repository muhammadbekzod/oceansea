import React from 'react'
import { Container, Wrapper } from './MiniMegaStyle'
import photo from '../../../media/img/imgCard.jpeg'
import lock from '../../../media/icons/lock.svg'
import heart from '../../../media/icons/heart.svg'
const MiniMega = ({value}) => {
    return (
        <Container>
            <Wrapper>
                <Wrapper.Photo src={photo}/>
                <Wrapper.Info>
                    <Wrapper.InfoName>
                    {value?.card?.name ||"Not Available"}
                    <p>Best Offer</p>
                    </Wrapper.InfoName>
                    <Wrapper.InfoTitle>
                    {value?.card?.title ||"Not Available"}
                    <p>
                    {value?.card?.cost ||"Not Available"}
                    </p>
                    </Wrapper.InfoTitle>
                    <Wrapper.InfoType>
                    {value?.card?.type ||"Not Available"}
                    <p>
                    {value?.card?.lcost ||"Not Available"}
                    </p>
                    </Wrapper.InfoType>
                </Wrapper.Info>
                <Wrapper.Footer>
                    <Wrapper.Icon src={lock}/>
                    <Wrapper.IconWrap>
                    <Wrapper.Icon src={heart}/>
                    <p>200</p>
                   
                    </Wrapper.IconWrap>
                </Wrapper.Footer>
            </Wrapper>
        </Container>
    )
}

export default MiniMega
