import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #edf2ff;
`;
export const ComponentWrap = styled.div`
    width: 800px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    box-shadow:  0 20px 38px #c6c9e1, 0 15px 12px #c6c9e1;
    background-color:#fbf8fb;
`;

// export const ComponentWrap = tw.div`
//     flex,
//     flex-col,

// `