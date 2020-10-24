import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sub1, Body2, Small } from 'components/Font';
import useToggle from 'custom-hooks/useToggle';
import { useCallback } from 'react';

const Container = styled.section`
    border: 1px solid #000000;
    border-radius: 12px;
`;

const PreviewImage = styled.div`
    display: flex;
    justify-content: center;
    border-radius: 12px 12px 0 0;

    img {
        border-radius: 12px 12px 0 0;
    }
`;

const TextInfo = styled.div`
    padding: ${props => props.theme.base_spacing * 7}px ${props => props.theme.base_spacing * 4}px
        ${props => props.theme.base_spacing * 8}px;
    max-width: 70ch;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 8}px;

    a {
        text-decoration: none;

        h2 :hover {
            background: ${props =>
                `-webkit-linear-gradient(${props.theme.color.brand}, ${props.theme.color.secondary})`};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    .intro {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
`;

const ReadAndCopy = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Read = styled(Small)`
    @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
        font-size: 1rem;
        font-weight: ${props => props.theme.font_weight.semibold};
    }
`;

const Button = styled.button`
    background-color: ${props => props.theme.color.blue[900]};
    color: ${props => props.theme.color.white};
    border-radius: 8px;
    min-width: 48px;
    min-height: 48px;
    box-sizing: border-box;
    padding: ${props => props.theme.base_spacing * 2}px ${props => props.theme.base_spacing * 6}px;
    cursor: pointer;
    border: none;

    &:hover {
        background-color: ${props => props.theme.color.secondary};
    }
`;

const CopyURLButton = ({ textToCopy, ...rest }) => {
    const [isCopied, toggleCopied] = useToggle();

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            toggleCopied();
            setTimeout(toggleCopied, 300);
        } catch (err) {
            //
        }
    }, []);

    return (
        <Button onClick={handleCopy} {...rest}>
            {isCopied ? 'Copied!' : 'Copy URL'}
        </Button>
    );
};

CopyURLButton.propTypes = {
    textToCopy: PropTypes.string.isRequired,
};

const BlogArticleCard = ({ thumbnail, link, title, startingLines, readTime, ...rest }) => {
    return (
        <Container {...rest}>
            {thumbnail && (
                <PreviewImage>
                    <img
                        src={thumbnail}
                        alt="Preview image | Image detail available from original source website"
                    />
                </PreviewImage>
            )}
            <TextInfo>
                <a href={link}>
                    <Sub1 family={2} weight="bold" as="h2">
                        {title}
                    </Sub1>
                </a>
                <Body2 className="intro" as="p">
                    {startingLines}
                </Body2>
                <ReadAndCopy>
                    <Read as="h4" isItalic weight="bold">
                        Read Time: {readTime}mins
                    </Read>
                    <CopyURLButton textToCopy={link} />
                </ReadAndCopy>
            </TextInfo>
        </Container>
    );
};

BlogArticleCard.propTypes = {
    thumbnail: PropTypes.string,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startingLines: PropTypes.string,
    readTime: PropTypes.number,
};

export default BlogArticleCard;
