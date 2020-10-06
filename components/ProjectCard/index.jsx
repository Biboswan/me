import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Sub1, H6, Body1 } from 'components/Font';
import TechTag from 'components/TechTag';

const Container = styled.div``;

const PreviewImage = styled.img`
    max-width: 100%;
`;
//rgba(179, 182, 229, 1);
//rgba(135, 198, 202, 1)
const Description = styled.div`
    padding: ${props => props.theme.base_spacing * 7}px ${props => props.theme.base_spacing * 4}px;
    border: 1px solid #000000;
    border-radius: 0px 0px 12px 12px;
    background: ${props => props.theme.color.blue[100]};
`;

const Brief = styled.ul`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 10}px;
    margin-bottom: ${props => props.theme.base_spacing * 10}px;
    list-style: ${props => (props.listLen > 1 ? 'disc' : 'none')};
    list-style-position: inside;
`;

const TechTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    column-gap: ${props => props.theme.base_spacing * 7}px;
    row-gap: ${props => props.theme.base_spacing * 4}px;
    margin: ${props => props.theme.base_spacing * 7}px 0 ${props => props.theme.base_spacing * 9}px;
`;

const ProjectCard = props => {
    const { image, title, techTags, storyLink, intro, className, ...rest } = props;

    const renderTechTag = label => {
        return <TechTag key={label} label={label} />;
    };

    const renderInfoPoint = (point, index) => {
        return (
            <Body1 key={index} as="li">
                {point}
            </Body1>
        );
    };

    return (
        <Container className={className || ''} {...rest}>
            <PreviewImage src={image.url} alt={image.label} />
            <Description>
                <H6 as="h3" weight="semibold">
                    {title}
                </H6>
                <TechTagsContainer>{techTags.map(renderTechTag)}</TechTagsContainer>
                <Brief listLen={intro.length}>{intro.map(renderInfoPoint)}</Brief>
                <Link
                    href={
                        storyLink ||
                        'https://www.timeout.com/london/theatre/the-ten-best-shakespeare-plays-of-all-time'
                    }
                    passHref
                >
                    <Sub1 isItalic as="a">
                        Read Story...
                    </Sub1>
                </Link>
            </Description>
        </Container>
    );
};

ProjectCard.propTypes = {
    className: PropTypes.string,
    image: PropTypes.shape({
        url: PropTypes.string,
        label: PropTypes.string,
    }).isRequired,
    title: PropTypes.string.isRequired,
    techTags: PropTypes.arrayOf(PropTypes.string).isRequired,
    storyLink: PropTypes.string,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;
