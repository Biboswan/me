import styled from 'styled-components';

const d = 1440 - 360;
const diff = (a, b) => a - b;

// Bold & vibrant typography with tighter letter-spacing for impact
export const H1 = styled.h1`
    font-size: min(calc(3.583rem + ${diff(7.43, 3.583)} * 16 * (100vw - 360px) / ${d}), 7.43rem);
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.heavy};
    letter-spacing: -0.03em;
    line-height: 1.1;
`;

export const H2 = styled.h2`
    font-size: min(calc(2.488rem + ${diff(5.16, 2.488)} * 16 * (100vw - 360px) / ${d}), 5.16rem);
    line-height: 1.15;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.ebold};
    letter-spacing: -0.02em;
`;

export const H3 = styled.h3`
    font-size: min(calc(2.488rem + ${diff(4.3, 2.488)} * 16 * (100vw - 360px) / ${d}), 4.3rem);
    line-height: 1.2;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.bold};
    letter-spacing: -0.015em;
`;

export const H4 = styled.h4`
    font-size: min(calc(2.074rem + ${diff(3.583, 2.074)} * 16 * (100vw - 360px) / ${d}), 3.583rem);
    line-height: 1.25;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.bold};
    letter-spacing: -0.01em;
`;

export const H5 = styled.h5`
    font-size: min(calc(1.728rem + ${diff(2.986, 1.728)} * 16 * (100vw - 360px) / ${d}), 2.986rem);
    line-height: 1.3;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.semibold};
    letter-spacing: -0.005em;
`;

export const H6 = styled.h6`
    font-size: min(calc(1.44rem + ${diff(2.074, 1.44)} * 16 * (100vw - 360px) / ${d}), 2.074rem);
    line-height: 1.35;
    font-family: ${props => props.theme.font_family.one};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.semibold};
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
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.semibold};
    line-height: 1.4;
`;

export const Sub2 = styled.div`
    font-size: 1.2rem;
    font-family: ${props => props.theme.font_family.two};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.semibold};
    line-height: 1.5;
`;

export const Body1 = styled.div`
    font-size: min(
        max(1.0625rem, calc(1.0625rem + ${diff(1.5, 1.0625)} * 16 * (100vw - 360px) / ${d})),
        1.5rem
    );
    letter-spacing: 0.01em;
    font-family: ${props => props.theme.font_family.two};
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
    line-height: 1.75;
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`;

export const Body2 = styled.div`
    font-size: min(max(1rem, calc(1rem + ${diff(1.25, 1)} * 16 * (100vw - 360px) / ${d})), 1.25rem);
    font-family: ${props => props.theme.font_family.two};
    letter-spacing: 0.01em;
    line-height: 1.7;
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.normal};
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
`;

export const Small = styled.div`
    font-family: ${props => props.theme.font_family.two};
    font-size: 0.875rem;
    letter-spacing: 0.02em;
    color: ${props => (props.color ? `var(--color-${props.color})` : 'var(--color-primaryText)')};
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.medium};
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
    line-height: 1.5;
`;

export const Strong = styled.strong`
    font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
    color: var(--color-strong);
    font-weight: ${props =>
        props.weight ? props.theme.font_weight[props.weight] : props.theme.font_weight.semibold};
`;

export const Code = styled.code`
    font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    font-size: 0.9em;
    background-color: var(--color-codeBg);
    padding: 0.15em 0.4em;
    border-radius: 4px;
`;

export const Pre = styled.pre`
    background-color: var(--color-codeBg);
    padding: ${props => props.theme.base_spacing * 5}px;
    max-width: 65ch;
    border-radius: 8px;
    overflow-x: auto;
`;

// Gradient text for vibrant, bold headings
export const GradientText = styled.span`
    background: var(--color-gradientText);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;
