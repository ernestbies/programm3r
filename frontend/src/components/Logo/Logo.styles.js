import styled, {css} from 'styled-components';

export const StyledLogo = styled.img`
    margin-right: 10px;
    width: ${({width}) => (width+'px')};    
    width: ${({height}) => (height+'px')};    
    ${props => props.lightMode && css`
        filter: invert(100%) hue-rotate(50deg);
    `}
`;