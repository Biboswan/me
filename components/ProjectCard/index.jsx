import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Sub1, H6, Body2 } from 'components/Font';
import TechTag from 'components/TechTag';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.07];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Container = styled(animated.div)`
    will-change: transform;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);

    :hover {
        box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
    }
`;

const PreviewImage = styled.img`
    max-width: 100%;
    margin: auto;
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
    margin: ${props => props.theme.base_spacing * 7}px -${props => props.theme.base_spacing * 7}px ${props =>
            props.theme.base_spacing * 5}px 0;

    .techtag {
        margin-bottom: ${props => props.theme.base_spacing * 4}px;
        margin-right: ${props => props.theme.base_spacing * 7}px;
    }
`;

const ProjectCard = props => {
    const { image, title, techTags, storyLink, intro, className, ...rest } = props;
    const [springprops, setSpringprops] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 },
    }));

    const renderTechTag = label => {
        return <TechTag className="techtag" key={label} label={label} />;
    };

    const renderInfoPoint = (point, index) => {
        return (
            <Body2 key={index} as="li">
                {point}
            </Body2>
        );
    };

    return (
        <Container
            className={className || ''}
            onMouseMove={({ clientX: x, clientY: y }) => setSpringprops({ xys: calc(x, y) })}
            onMouseLeave={() => setSpringprops({ xys: [0, 0, 1] })}
            style={{ transform: springprops.xys.to(trans) }}
            {...rest}
        >
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
