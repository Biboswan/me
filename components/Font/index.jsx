import styled from 'styled-components';

const d = 1440 - 360;
const diff = (a, b) => a - b;

export const H1 = styled.h1`
    font-size: min(calc(3.583rem + ${diff(7.43, 3.583)} * 16 * (100vw - 360px) / ${d}), 7.43rem);
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
`;

export const H2 = styled.h2`
    font-size: min(calc(2.488rem + ${diff(5.16, 2.488)} * 16 * (100vw - 360px) / ${d}), 5.16rem);
    line-height: 1.476em;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
`;

export const H3 = styled.h3`
    font-size: min(calc(2.488rem + ${diff(4.3, 2.488)} * 16 * (100vw - 360px) / ${d}), 4.3rem);
    line-height: 1.476em;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
`;

export const H4 = styled.h4`
    font-size: min(calc(2.074rem + ${diff(3.583, 2.074)} * 16 * (100vw - 360px) / ${d}), 3.583rem);
    line-height: 1.485em;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.semibold};
`;

export const H5 = styled.h5`
    font-size: min(calc(1.728rem + ${diff(2.986, 1.728)} * 16 * (100vw - 360px) / ${d}), 2.986rem);
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.semibold};
`;

export const H6 = styled.h6`
    font-size: min(calc(1.44rem + ${diff(2.074, 1.44)} * 16 * (100vw - 360px) / ${d}), 2.074rem);
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.bold};
`;

export const Sub1 = styled.div`
    font-size: min(calc(1.2rem + ${diff(1.728, 1.2)} * 16 * (100vw - 360px) / ${d}), 1.728rem);
    font-family: ${props =>
        props.family && props.family === 2
            ? props.theme.font_family.two
            : props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.medium};
`;

export const Sub2 = styled.div`
    font-size: 1.2rem;
    font-family: ${props => props.theme.font_family.two};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.medium};
`;

export const Body1 = styled.div`
    font-size: min(max(1rem, calc(1rem + ${diff(1.44, 1)} * 16 * (100vw - 360px) / ${d})), 1.44rem);
    letter-spacing: 0.5px;
    font-family: ${props => props.theme.font_family.two};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
    line-height: 1.688em;
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`;

export const Body2 = styled.div`
    font-size: min(max(1rem, calc(1rem + ${diff(1.2, 1)} * 16 * (100vw - 360px) / ${d})), 1.2rem);
    font-family: ${props => props.theme.font_family.two};
    letter-spacing: 0.5px;
    line-height: 1.688em;
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`;

export const Small = styled.div`
    font-family: ${props => props.theme.font_family.two};
    font-size: 0.833rem;
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`;

export const Strong = styled.strong`
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
    color: var(--color-strong);
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
`;

export const Code = styled.code``;

export const Pre = styled.pre`
    background-color: ${({ theme }) => theme.color.blue[50]};
    padding: ${props => props.theme.base_spacing * 4}px;
    max-width: 65ch;
`;
