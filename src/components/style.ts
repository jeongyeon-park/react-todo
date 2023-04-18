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
    @media ${(props)=>props.theme.mobile}{
        height: 93vh;
    }
    height: 70vh;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    padding: 20px;
    box-shadow:  0 20px 38px #c6c9e1, 0 15px 12px #c6c9e1;
    background-color:#fbf8fb;
`;
const size = {
    mobile: "500px"
}

export const theme = {
    mobile: `(max-width: ${size.mobile})`
}

// export const ComponentWrap = tw.div`
//     flex,
//     flex-col,

// `

export const ToDoButtonStyle = {backgroundColor:"#fee894", color:"#5f4ca5", fontWeight: 'bold'};
export const PendingButtonStyle = {backgroundColor:"#80eaff", color:"#5f4ca5", fontWeight: 'bold'};
export const DoneButtonStyle = {backgroundColor:"#5f4ca5", color:"white", fontWeight: 'bold' };