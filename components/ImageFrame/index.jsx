import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Sub2 } from 'components/Font';
import Hanger from 'components/Svgs/Hanger';

const Image = styled.img`
    max-width: 100%;
    width: 100%;
    border: 5px solid
        ${props => (props.color ? props.theme.color[props.color] : props.theme.color.black)};
    box-sizing: border-box;
    border-radius: 24px;
    margin-bottom: ${props => props.theme.base_spacing * 6}px;
`;

const Container = styled.div`
    display: grid;

    .image-hanger {
        margin: 0 auto -8px;
        width: 35%;
    }
`;

const ImageCaption = styled(Sub2)`
    text-decoration: underline;
`;

const ImageFrame = props => {
    const { src, label, frameColor, className, ...rest } = props;
    return (
        <Container className={className} {...rest}>
            <Hanger className="image-hanger" />
            <figure>
                <Image src={src} alt={label} color={frameColor} />
                <ImageCaption as="figcaption" isItalic weight="semi_bold">
                    {label}
                </ImageCaption>
            </figure>
        </Container>
    );
};

ImageFrame.propTypes = {
    label: PropTypes.string,
    src: PropTypes.string.isRequired,
    frameColor: PropTypes.string,
    className: PropTypes.string,
};

export default ImageFrame;
