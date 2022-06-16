import styled from "styled-components"

const Index = () => {
  return (
    <>
      <Eyecatch>Rayback</Eyecatch>
    </>
  );
}

const Eyecatch = styled.h1`
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 10vw;
    font-weight: bold;
    margin: 0;
    min-height: 200px;
    padding: 0;
    height: 100vh;
    background-color: #ffffff;
    color: var(--base-color);
`

export default Index;
