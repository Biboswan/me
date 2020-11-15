import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Sub2 } from 'components/Font';
import Hanger from 'components/Svgs/Hanger';

const Image = styled.img`
    max-width: 100%;
    width: 100%;
    height: auto;
    border: 5px solid
        ${props => (props.color ? `var(--color-${props.color})` : props.theme.color.black)};
    box-sizing: border-box;
    border-radius: 24px;
    margin-bottom: ${props => props.theme.base_spacing * 6}px;
`;

const Container = styled.div`
    display: grid;
`;

const ImageFrame = props => {
    const { src, label, frameColor, className, imageWidth, imageHeight, ...rest } = props;
    return (
        <>
            <Container className={className} {...rest}>
                <Hanger className="image-hanger" />
                <figure>
                    <Image
                        src={src}
                        alt={label}
                        color={frameColor}
                        width={imageWidth}
                        height={imageHeight}
                    />
                    <Sub2 as="figcaption" isItalic weight="semi_bold">
                        {label}
                    </Sub2>
                </figure>
            </Container>
            <style global jsx>{`
                .image-hanger {
                    margin: 0 auto -8px;
                    width: 35%;
                }
                .image-hanger > path {
                    stroke: var(--color-secondaryText);
                }
            `}</style>
        </>
    );
};

ImageFrame.propTypes = {
    label: PropTypes.string,
    src: PropTypes.string.isRequired,
    frameColor: PropTypes.string,
    className: PropTypes.string,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
};

export default ImageFrame;
