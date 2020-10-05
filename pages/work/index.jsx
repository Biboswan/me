import Head from 'next/head';
import styled from 'styled-components';
import MainContainer from 'components/MainContainer';
import { H2, Body1, H5, H4 } from 'components/Font';
import ProjectCard from 'components/ProjectCard';
import { Projects, CERTS } from 'app-constants';
import BlueValleyOBlob from 'components/Svgs/BlueValleyOBlob';
import Testimonial from 'components/Testimonial';

const ProjectContainer = styled.section`
    background: linear-gradient(180deg, rgba(67, 70, 241, 0.81) 0%, rgba(255, 143, 68, 0.9) 100%);
    margin: 0 -${props => props.theme.spacing.pageside.sm}px 0;
    padding: ${props => props.theme.base_spacing * 10}px
        ${props => props.theme.spacing.pageside.sm}px ${props => props.theme.base_spacing * 20}px;
`;

const ProjectCardsContainer = styled.div`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 15}px;
    margin: ${props => props.theme.base_spacing * 10}px 0
        ${props => props.theme.base_spacing * 15}px;
`;

const WorkSummary = styled.article`
    margin-top: ${props => props.theme.base_spacing * 6}px;
    margin-bottom: ${props => props.theme.base_spacing * 8}px;
    max-width: 65ch;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 10}px;
    .strong {
        font-weight: ${props => props.theme.font_weight.bold};
    }
`;

const CertificationList = styled.ul`
    display: grid;
    list-style: none;
    margin-top: ${props => props.theme.base_spacing * 10}px;
    row-gap: ${props => props.theme.base_spacing * 9}px;
`;

const BlueValleyOBlobStyled = styled(BlueValleyOBlob)`
    margin: 0 -${props => props.theme.spacing.pageside.sm}px;
`;

const CertificateSection = () => {
    const renderListItem = item => {
        return <Body1 as="li">{item}</Body1>;
    };
    return (
        <section>
            <H4 as="h2">Certifications/Courses</H4>
            <CertificationList>{CERTS.map(renderListItem)}</CertificationList>
            <BlueValleyOBlobStyled />
        </section>
    );
};

const TestimonialList = styled.ul`
    list-style: none;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 15}px;
`;

const TestimonialSection = () => {
    return (
        <section>
            <H4 as="h2">Testimonials</H4>
            <TestimonialList>
                <Testimonial
                    words="broy27 have been contributing to taskcluster and involved in discussions around the upcoming taskcluster-events refactoring."
                    by={['Jonas Finnemann Jensen', 'Ex-Mozilla, Software Engineer at Google']}
                />
            </TestimonialList>
        </section>
    );
};

const Work = () => {
    const renderProjectCard = ({ image, title, techTags, storyLink, intro }) => {
        return (
            <ProjectCard
                key={title}
                image={image}
                title={title}
                techTags={techTags}
                storyLink={storyLink}
                intro={intro}
            />
        );
    };

    return (
        <>
            <Head>
                <title>Work - Biboswan Roy</title>
            </Head>
            <MainContainer>
                <WorkSummary>
                    <Body1 weight="light" as="p">
                        I software engineered at Resto-G(intern),{' '}
                        <span className="strong">Mozilla </span>
                        (contributor), <span className="strong">StudioYou</span> (intern) and
                        <span className="strong"> Creatella</span> (part-time dev). Each was a
                        unique experience owing to their different company cultures and phases the
                        respective companies were at.
                    </Body1>
                    <Body1 weight="light" as="p">
                        I have also interned at <span className="strong">IIM Lucknow</span> in Data
                        Science and Anaytics.
                    </Body1>
                    <Body1 weight="light" as="p">
                        Somehow everything remote till date.
                    </Body1>
                </WorkSummary>
                <ProjectContainer>
                    <H2 as="h1" weight="bold" color="white">
                        Projects
                    </H2>
                    <Body1 weight="light" color="white">
                        Below is a some of what of I have done so far.
                    </Body1>
                    <ProjectCardsContainer>{Projects.map(renderProjectCard)}</ProjectCardsContainer>
                    <H5 weight="bold" color="white">
                        Project in mind
                    </H5>
                    <Body1 weight="semibold" color="white">
                        I at times find the need to compare files. Hence a cli to easliy compare
                        different files. https://www.npmjs.com/package/filediffer-cli
                    </Body1>
                </ProjectContainer>
                <CertificateSection />
                <TestimonialSection />
            </MainContainer>
        </>
    );
};

export default Work;
