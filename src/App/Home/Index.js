import styled from "styled-components"

import Rayback from "./Index/Photos/rayback.jpg"
import Timeline from "./Index/Timeline"

const Index = () => {
  return (
    <>
      <Eyecatch>
        <p>Rayback</p>
      </Eyecatch>
      <Timeline />
    </>
  );
}

const Eyecatch = styled.div`
    position: relative;
    height: 100vh;
    background-image: url(${Rayback});

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
