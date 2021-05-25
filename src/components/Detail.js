import React from 'react'
import styled from "styled-components"

function Detail() {
    return (
        <Container>
            <Background>
                <img src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-199952-GettyImages-86131109.jpg?resize=1800,1200&w=1800" />
            </Background>
            <ImageTitle>
                <img src="https://slingshotecommerce.com/wp-content/uploads/2017/08/Ramones-Logo2.png" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                2003 | 1h 50min | Documentary, Biography, Music  
            </SubTitle>
            <Description>
            In 1974, the New York City music scene was shocked into consciousness by the violently new and raw sound of a band of misfits from Queens, called The Ramones. Playing in a seedy Bowery bar to a small group of fellow struggling musicians, the band struck a chord of disharmony that rocked the foundation of the mid-'70s music scene. This quartet of unlikely rock stars traveled across the country and around the world connecting with the disenfranchised everywhere, while sparking a movement that would resonate with two generations of outcasts across the globe. Although the band never reached the top of the Billboard charts, it managed to endure by maintaining a rigorous touring schedule for 22 years.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    
    img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    }

`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249,249,249);
    border: none; 
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background-color: rgb(198,198,198);
    }

`
const TrailerButton = styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border: 1px solid white;
    color: white;


`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1.5px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
`
const GroupWatchButton = styled(AddButton)`
    background-color: black;

`
const SubTitle = styled.div`
    color: rgb(249, 249,249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;


`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249,249);
    max-width: 760px;

`