import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 2.986rem;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const H2 = styled.h2`
    font-size: 2.488rem;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const H3 = styled.h3`
    font-size: 2.488rem;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const H4 = styled.h4`
    font-size: 2.074rem;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const H5 = styled.h5`
    font-size: 1.728rem;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const H6 = styled.h6`
    font-size: 1.44rem;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const Sub1 = styled.div`
    font-size: 1.2rem;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const Sub2 = styled.div`
    font-size: 1.2rem;
    font-family: ${props => props.theme.font_family.two};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
`;

export const Body1 = styled.div`
    font-size: 1rem;
    font-family: ${props => props.theme.font_family.two};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
`;

export const Body2 = styled.div`
    font-family: ${props => props.theme.font_family.two};
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
`;

export const Small = styled.div`
    font-family: ${props => props.theme.font_family.two};
    font-size: 0.833rem;
    color: ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
`;
