import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 2.986rem;
    font-family: ${props => props.theme.font_family.one} sans-serif;
`;

export const H2 = styled.h2`
    font-size: 2.488rem;
    font-family: ${props => props.theme.font_family.one} sans-serif;
`;

export const H3 = styled.h3`
    font-size: 2.074rem;
    font-family: ${props => props.theme.font_family.one} sans-serif;
`;

export const H4 = styled.h4`
    font-size: 1.728rem;
    font-family: ${props => props.theme.font_family.one} sans-serif;
`;

export default styled.div`
    font-size: 1rem;
`;
