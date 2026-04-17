import { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    cursor: pointer;
    animation: fadeIn 0.2s ease-out;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const ContentWrapper = styled.div`
    max-width: 90vw;
    max-height: 90vh;
    animation: scaleIn 0.2s ease-out;

    @keyframes scaleIn {
        from {
            transform: scale(0.9);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

const LightboxImage = styled.img`
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
`;

const LightboxVideo = styled.video`
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
`;

const CloseHint = styled.span`
    position: absolute;
    top: 20px;
    right: 24px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
`;

const ImageLightbox = ({ image, onClose }) => {
    const handleKeyDown = useCallback(
        e => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [handleKeyDown]);

    const handleOverlayClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <Overlay onClick={handleOverlayClick}>
            <CloseHint>ESC to close</CloseHint>
            <ContentWrapper onClick={e => e.stopPropagation()}>
                {!image.isVideo ? (
                    <LightboxImage src={image.url} alt={image.alt} />
                ) : (
                    <LightboxVideo autoPlay loop muted playsInline controls title={image.alt}>
                        <source src={image.url} type="video/webm" />
                        {image.url2 && <source src={image.url2} type="video/mp4" />}
                    </LightboxVideo>
                )}
            </ContentWrapper>
        </Overlay>
    );
};

ImageLightbox.propTypes = {
    image: PropTypes.shape({
        url: PropTypes.string.isRequired,
        url2: PropTypes.string,
        alt: PropTypes.string,
        isVideo: PropTypes.bool,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageLightbox;
