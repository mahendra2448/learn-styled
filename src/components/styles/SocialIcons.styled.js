import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
        
    background-color: ${({ theme }) => theme.colors.footer};
    color: #fff;
    padding: 100px 0 60px;
    ul {
        list-style: none;
    }
    ul li {
        margin-bottom: 20px;
    }
    p {
        text-align: right;
    }
    li {
      list-style: none;
    }
    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
        transition: all .2s ease;

        &:hover {
            opacity: .8;
        }
    }
    @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
        ul {
            padding: 0;
        }
        p {
            text-align: center;
        }
    }
`