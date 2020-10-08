import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Body2 } from 'components/Font';
import LShapped from 'components/Svgs/LShapped';

const Container = styled.div`
    width: 100%;
`;

const Quote = styled(Body2)`
    padding: ${props => props.theme.base_spacing * 10}px ${props => props.theme.base_spacing * 4}px;
    background: ${props => props.bgColor + '0F'};
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 3}px;
`;

const QuoteByContainer = styled.div`
    position: relative;
`;

const QuoteBy = styled.div`
    padding: ${props => props.theme.base_spacing * 8}px;
    ${props => props.theme.base_spacing * 4}px ${props => props.theme.base_spacing * 4}px;
    position: absolute;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: ${props => props.theme.base_spacing * 2}px;
`;

const Testimonial = props => {
    const { words, by, bgColor, ...rest } = props;

    return (
        <Container {...rest}>
            <Quote bgColor={bgColor} as="blockquote">
                {words}
            </Quote>
            <QuoteByContainer>
                <QuoteBy>
                    <Body2 as="span" isItalic weight="bold">
                        -{'  '}
                    </Body2>
                    <div>
                        {by.map(text => (
                            <Body2 key={text} isItalic weight="bold">
                                {text}
                            </Body2>
                        ))}
                    </div>
                </QuoteBy>
                <LShapped color={bgColor} />
            </QuoteByContainer>
        </Container>
    );
};

Testimonial.propTypes = {
    words: PropTypes.any.isRequired,
    by: PropTypes.any.isRequired,
    bgColor: PropTypes.string,
};

export default Testimonial;
