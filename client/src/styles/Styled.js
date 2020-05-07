import styled from 'styled-components';

export const ActionHomeDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 10%;

    @media(max-width: 600px){
        flex-direction: column;
        a {
            margin: 5% 0;
        }
    }
`;