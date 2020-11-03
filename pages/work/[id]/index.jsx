import Head from 'next/head';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { H4, Body2, H5, H6, Sub1 } from 'components/Font';
import { WorkStories } from 'app-constants';
import MainContainer from 'components/MainContainer';
import TechTag from 'components/TechTag';

const BannerImage = styled.img`
    width: 100%;
    margin: ${props => props.theme.base_spacing * 8}px auto
        ${props => props.theme.base_spacing * 12}px;
`;

const Container = styled(MainContainer)`
    padding-top: ${props => props.theme.base_spacing * 15}px;
`;

const Introduction = styled.div`
    display: grid;
    max-width: 65ch;
    row-gap: ${props => props.theme.base_spacing * 10}px;
    margin-bottom: ${props => props.theme.base_spacing * 26}px;
`;

const TechTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 60ch;
    margin: ${props => props.theme.base_spacing * 7}px -${props => props.theme.base_spacing * 7}px ${props =>
            props.theme.base_spacing * 15}px 0;

    .techtag {
        margin-bottom: ${props => props.theme.base_spacing * 4}px;
        margin-right: ${props => props.theme.base_spacing * 7}px;
    }
`;

const SubtopicsContainer = styled.div`
    margin-top: ${props => props.theme.base_spacing * 10}px;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 15}px;
`;

const SubtopicTitle = styled(Sub1)`
    max-width: 50ch;
`;

const SubtopicSection = styled.section`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 10}px;

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        grid-template-columns: 1fr 1fr;
        align-items: center;
        column-gap: ${props => props.theme.base_spacing * 4}px;
    }
`;

const SubtopicTextData = styled.div`
    display: contents;

    .paragraph-spacing {
        display: grid;
        row-gap: ${props => props.theme.base_spacing * 7}px;
        max-width: 60ch;

        strong {
            color: ${props => props.theme.color.blue[600]};
        }
    }

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        display: grid;
        row-gap: ${props => props.theme.base_spacing * 7}px;
    }
`;

const WorkStory = ({ title, intro, bannerImage, techTags, subtopics, id }) => {
    const renderTechTag = label => {
        return <TechTag className="techtag" key={label} label={label} />;
    };

    const renderSubtopic = ({ title, desc, image }, index) => {
        const renderPara = (para, index) => (
            <Body2 dangerouslySetInnerHTML={{ __html: para }} key={index} as="p" weight="light" />
        );

        return (
            <SubtopicSection key={title}>
                {index % 2 === 0 ? (
                    <>
                        <SubtopicTextData>
                            <SubtopicTitle as="h4" weight="semibold" family={2} isItalic>
                                {title}
                            </SubtopicTitle>
                            <div className="paragraph-spacing">{desc.map(renderPara)}</div>
                        </SubtopicTextData>
                        {image && image.url && <img src={image.url} alt={image.alt} />}
                    </>
                ) : (
                    <>
                        {image && image.url && <img src={image.url} alt={image.alt} />}
                        <SubtopicTextData>
                            <SubtopicTitle as="h4" weight="semibold" family={2} isItalic>
                                {title}
                            </SubtopicTitle>
                            <div className="paragraph-spacing">{desc.map(renderPara)}</div>
                        </SubtopicTextData>
                    </>
                )}
            </SubtopicSection>
        );
    };

    const renderIntroPara = (para, index) => (
        <Body2 weight="light" key={index} as="p">
            {para}
        </Body2>
    );

    return (
        <>
            <Head>
                <title>Work - {title}</title>
                <meta name="description" content={intro} />
                <meta
                    name="keywords"
                    content="work experience, javascript, react, software engineer,"
                />
                <meta property="og:title" content={title} />
                <meta property="og:url" content={`https://biboswanroy.com/work/${id}`} />
                <meta property="og:description" content={intro.toString().substring(0, 300)} />
                <meta property="og:image" content={bannerImage.url} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={intro.toString().substring(0, 300)} />
                <meta name="twitter:image" content={bannerImage.url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Biboswan98" />
            </Head>
            <Container>
                <article>
                    <H4 as="h1" weight="bold">
                        {title}
                    </H4>
                    <BannerImage src={bannerImage.url} />
                    <Introduction>{intro.map(renderIntroPara)}</Introduction>
                    <section>
                        <H6 weight="medium" as="h3">
                            Some Related Tags
                        </H6>
                        <TechTagsContainer>{techTags.map(renderTechTag)}</TechTagsContainer>
                    </section>
                    <section>
                        <H5 as="h2" weight="bold">
                            Challenges and My take
                        </H5>
                        <SubtopicsContainer>{subtopics.map(renderSubtopic)}</SubtopicsContainer>
                    </section>
                </article>
            </Container>
        </>
    );
};

WorkStory.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    intro: PropTypes.any.isRequired,
    techTags: PropTypes.array,
    bannerImage: PropTypes.object,
    subtopics: PropTypes.array,
};

export default WorkStory;

export async function getStaticProps({ params: { id } }) {
    return { props: { ...WorkStories[id], id } };
}

export async function getStaticPaths() {
    return {
        paths: Object.keys(WorkStories)
            .filter(key => !key.includes('mozilla'))
            .map(key => ({ params: { id: key } })),
        fallback: false,
    };
}
