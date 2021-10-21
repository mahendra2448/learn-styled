import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fafafa;
    border-radius: .8rem;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    margin: 2.2rem 0;
    padding: 3.2rem;
    flex-direction: ${({layout}) => layout || 'row'};

    img {
        width: 75%;
        padding: 1rem;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`