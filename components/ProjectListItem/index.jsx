import { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { H6, Body2, Sub1 } from 'components/Font';
import TechTag from 'components/TechTag';

const Container = styled.div`
    display: flex;
    gap: ${props => props.theme.base_spacing * 6}px;
    padding: ${props => props.theme.base_spacing * 6}px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &:first-child {
        padding-top: 0;
    }

    @media only screen and (max-width: ${props => props.theme.breakpoint.xs}px) {
        flex-direction: column;
        gap: ${props => props.theme.base_spacing * 4}px;
    }
`;

const Thumbnail = styled.div`
    flex-shrink: 0;
    width: 120px;

    @media only screen and (max-width: ${props => props.theme.breakpoint.xs}px) {
        width: 100%;
        max-width: 200px;
    }
`;

const PreviewImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
`;

const PreviewVideo = styled.video`
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
`;

const Content = styled.div`
    flex: 1;
    min-width: 0;
`;

const Title = styled(H6)`
    margin-bottom: ${props => props.theme.base_spacing * 2}px;
`;

const TechTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.theme.base_spacing * 2}px;
    margin-bottom: ${props => props.theme.base_spacing * 3}px;
`;

const IntroList = styled.ul`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 2}px;
    margin-bottom: ${props => props.theme.base_spacing * 2}px;
    list-style: ${props => (props.$listLen > 1 ? 'disc' : 'none')};
    list-style-position: inside;
    color: var(--color-projectSectionTitle);
`;

const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: ${props => props.theme.base_spacing * 4}px;
    flex-wrap: wrap;
`;

const ExpandButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    color: var(--color-projectMoreColor);
    font-size: inherit;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: ${props => props.theme.base_spacing}px;

    svg {
        transition: transform 0.2s ease;
        transform: rotate(${props => (props.$expanded ? '180deg' : '0deg')});
        font-size: 0.75em;
    }

    &:hover {
        text-decoration: underline;
    }
`;

const ProjectListItem = ({ image, title, techTags, storyLink, intro }) => {
    const [expanded, setExpanded] = useState(false);
    const hasMultiplePoints = intro.length > 1;

    const isNewTabAttributes = storyLink?.includes('http')
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};

    return (
        <Container>
            <Thumbnail>
                {!image.isVideo ? (
                    <PreviewImage
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                    />
                ) : (
                    <PreviewVideo autoPlay loop muted playsInline title={image.alt}>
                        <source src={image.url} type="video/webm" />
                        <source src={image.url2} type="video/mp4" />
                    </PreviewVideo>
                )}
            </Thumbnail>
            <Content>
                <Title as="h3" weight="semibold">
                    {title}
                </Title>
                <TechTagsContainer>
                    {techTags.slice(0, 4).map(tag => (
                        <TechTag key={tag} label={tag} />
                    ))}
                </TechTagsContainer>
                <IntroList $listLen={expanded ? intro.length : 1}>
                    {(expanded ? intro : [intro[0]]).map((point, index) => (
                        <Body2 key={index} as="li" color="projectSectionTitle">
                            {point}
                        </Body2>
                    ))}
                </IntroList>
                <Actions>
                    {hasMultiplePoints && (
                        <ExpandButton $expanded={expanded} onClick={() => setExpanded(!expanded)}>
                            {expanded ? 'Less' : 'More'}
                            <FontAwesomeIcon icon={faChevronDown} />
                        </ExpandButton>
                    )}
                    {storyLink && (
                        <Link href={storyLink} passHref>
                            <Sub1
                                isItalic
                                as="a"
                                color="projectReadStoryColor"
                                {...isNewTabAttributes}
                            >
                                Read Story...
                            </Sub1>
                        </Link>
                    )}
                </Actions>
            </Content>
        </Container>
    );
};

ProjectListItem.propTypes = {
    image: PropTypes.shape({
        url: PropTypes.string,
        url2: PropTypes.string,
        alt: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        isVideo: PropTypes.bool,
    }).isRequired,
    title: PropTypes.string.isRequired,
    techTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    storyLink: PropTypes.string,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectListItem;
