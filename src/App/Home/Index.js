import styled from "styled-components"

import Rayback from "./Index/Photos/rayback.JPG"
import Timeline from "./Index/Timeline"

const Index = () => {
  return (
    <>
      <Eyecatch>
        <img src={Rayback} alt="Rayback" />
        <p>Rayback</p>
      </Eyecatch>
      <Timeline />
    </>
  );
}

const Eyecatch = styled.div`
    position: relative;

    img{
        width: 100vw;
    }

    p{
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        margin:0;
        padding:0;
        font-size: 10vw;
        font-weight: bold;
        color: white;
    }
`

export default Index;
