import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Sub1, Body2, Small } from 'components/Font';

const Container = styled.section`
    border: 1px solid #000000;
    border-radius: 0px 0px 12px 12px;
`;

const PreviewImage = styled.div`
    display: flex;
    justify-content: center;
`;

const TextInfo = styled.div`
    padding: ${props => props.theme.base_spacing * 7}px ${props => props.theme.base_spacing * 4}px
        ${props => props.theme.base_spacing * 4}px;
    max-width: 70ch;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 8}px;

    a {
        text-decoration: none;
    }

    .intro {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
    }
`;

const Read = styled(Small)`
    @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
        font-size: 1rem;
        font-weight: ${props => props.theme.font_weight.semibold};
    }
`;

const BlogArticleCard = ({ thumbnail, link, title, startingLines, readTime, ...rest }) => {
    return (
        <Container {...rest}>
            {thumbnail && (
                <PreviewImage>
                    <img src={thumbnail} alt={`image ${thumbnail}`} />
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
                <Read as="h4" isItalic weight="bold">
                    Read Time: {readTime}mins
                </Read>
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
