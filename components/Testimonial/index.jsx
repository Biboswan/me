import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Body1 } from 'components/Font';
import LShapped from 'components/Svgs/LShapped';

const Container = styled.div`
    width: 100%;
`;

const Quote = styled(Body1)`
    padding: ${props => props.theme.base_spacing * 10}px ${props => props.theme.base_spacing * 4}px;
    background: ${props => props.theme.color[props.bgColor]};
`;

const MaskedLShapped = styled(LShapped)``;
const Testimonial = props => {
    const { words, by, bgColor, ...rest } = props;

    return (
        <Container {...rest}>
            <Quote bgColor={bgColor} as="blockquote">
                {words}
            </Quote>
            <div>
                -
                {by.map(text => (
                    <Body1 key={text} isItalic weight="bold">
                        {text}
                    </Body1>
                ))}
            </div>
            <MaskedLShapped color={bgColor} />
        </Container>
    );
};

Testimonial.propTypes = {
    words: PropTypes.any.isRequired,
    by: PropTypes.any.isRequired,
    bgColor: PropTypes.string,
};

export default Testimonial;
