import styled from 'styled-components';

const Button = styled.button`
    width:3rem;
    height:2rem;
    border:none;
    border-radius:0.5rem;
    color:white;
    margin:1rem;
    &:active{
        border:none;
    }
    background-color:${props => props.color};
`;

export default Button;