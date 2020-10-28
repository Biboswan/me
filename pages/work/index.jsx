import Head from 'next/head';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import MainContainer from 'components/MainContainer';
import { H2, Body1, H5, H4 } from 'components/Font';
import ProjectCard from 'components/ProjectCard';
import { Projects, CERTS, Testimonials } from 'app-constants';
import BlueValleyOBlob from 'components/Svgs/BlueValleyOBlob';
import Testimonial from 'components/Testimonial';
import useIsMobileDevice from 'custom-hooks/useIsMobileDevice';
import usePrefersReducedMotion from 'custom-hooks/usePrefersReducedMotion';

const WorkSummary = styled.article`
    margin-top: ${props => props.theme.base_spacing * 6}px;
    margin-bottom: ${props => props.theme.base_spacing * 8}px;
    max-width: 65ch;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 10}px;
`;

const WorkSummaryStrongTerm = styled.strong`
    font-weight: ${props => props.theme.font_weight.medium};
    font-style: italic;
    color: ${props => props.theme.color.blue[600]};
`;

const ProjectCertTestContainer = styled.div`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 15}px;
`;

const ProjectContainer = styled.section`
    background: linear-gradient(180deg, rgba(67, 70, 241, 0.81) 0%, rgba(255, 143, 68, 0.9) 100%);
    margin: 0 -${props => props.theme.spacing.pageside.sm}px 0;
    padding: ${props => props.theme.base_spacing * 10}px
        ${props => props.theme.spacing.pageside.sm}px ${props => props.theme.base_spacing * 20}px;

    @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
        margin-left: -${props => props.theme.spacing.pageside.md}px;
        margin-right: -${props => props.theme.spacing.pageside.md}px;

        padding-left: ${props => props.theme.spacing.pageside.md}px;
        padding-right: ${props => props.theme.spacing.pageside.md}px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        margin-left: -${props => props.theme.spacing.pageside.lg}px;
        margin-right: -${props => props.theme.spacing.pageside.lg}px;
        padding-left: ${props => props.theme.spacing.pageside.lg}px;
        padding-right: ${props => props.theme.spacing.pageside.lg}px;
    }

    .projectInMindHeading {
        margin-bottom: ${props => props.theme.base_spacing * 6}px;
    }
`;

const ProjectCardsContainer = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: ${props => props.theme.base_spacing * 10}px 0 0;
    flex-wrap: wrap;

    .projectCardItem {
        max-width: 480px;
        margin-bottom: ${props => props.theme.base_spacing * 15}px;
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

    @media only screen and (min-width: ${props => props.theme.breakpoint.sm}px) {
        margin-left: -${props => props.theme.spacing.pageside.md}px;
        margin-right: -${props => props.theme.spacing.pageside.md}px;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        margin: 0 -${props => props.theme.spacing.pageside.sm}px;
    }
`;

const TestimonialList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: ${props => props.theme.base_spacing * 15}px -${props =>
            props.theme.spacing.pageside.sm}px -${props => props.theme.base_spacing * 15}px -${({ theme }) => theme.spacing.pageside.sm}px;

    .testimonialListItem {
        max-width: 450px;
        margin-bottom: ${props => props.theme.base_spacing * 15}px;
    }
`;

const CertificateSection = () => {
    const renderListItem = (item, index) => {
        return (
            <Body1 key={index} as="li">
                {item}
            </Body1>
        );
    };
    return (
        <section>
            <H4 as="h2">Certifications / Courses</H4>
            <CertificationList>{CERTS.map(renderListItem)}</CertificationList>
            <BlueValleyOBlobStyled />
        </section>
    );
};

const TestimonialSection = () => {
    const { color } = useContext(ThemeContext);
    const bgColors = [color.brand, color.green[500], color.secondary];

    const renderTestimonial = ({ words, by }, index) => {
        return (
            <li className="testimonialListItem" key={index}>
                <Testimonial words={words} by={by} bgColor={bgColors[index % 3]} />
            </li>
        );
    };

    return (
        <section>
            <H4 as="h2">Testimonials</H4>
            <TestimonialList>{Testimonials.map(renderTestimonial)}</TestimonialList>
        </section>
    );
};

const Work = () => {
    const isMobileDevice = useIsMobileDevice();
    const prefersReducedMotion = usePrefersReducedMotion();

    const renderProjectCard = ({ image, title, techTags, storyLink, intro }) => {
        return (
            <li className="projectCardItem" key={title}>
                <ProjectCard
                    image={image}
                    title={title}
                    techTags={techTags}
                    storyLink={storyLink}
                    intro={intro}
                    isAnimateCard={!(isMobileDevice || prefersReducedMotion)}
                />
            </li>
        );
    };

    return (
        <>
            <Head>
                <title>Work - Biboswan Roy</title>
                <meta
                    name="description"
                    content="Frontend and full stackish engineer, passionate about open source and public speaking"
                />
                <meta
                    name="keywords"
                    content="portfolio, full-stack, javascript, react, software engineer"
                />
                <meta property="og:title" content="Biboswan Roy" />
                <meta property="og:url" content="https://biboswanroy.com/" />
                <meta
                    property="og:description"
                    content="Frontend and full stackish engineer,passionate about open source and public speaking"
                />
                <meta property="og:image" content={require('public/images/seo/work.jpeg')} />
                <meta name="twitter:title" content="Biboswan Roy" />
                <meta
                    name="twitter:description"
                    content="Frontend and full stackish engineer,passionate about open source and public speaking"
                />
                <meta name="twitter:image" content={require('public/images/seo/work.jpeg')} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Biboswan98" />
            </Head>
            <MainContainer>
                <WorkSummary>
                    <Body1 weight="light" as="p">
                        I software engineered at Resto-G(intern),{' '}
                        <WorkSummaryStrongTerm>Mozilla</WorkSummaryStrongTerm> (contributor),{' '}
                        <WorkSummaryStrongTerm>StudioYou</WorkSummaryStrongTerm> (intern) and{' '}
                        <WorkSummaryStrongTerm>Creatella</WorkSummaryStrongTerm> (part-time dev).
                        Each was a unique experience owing to their different company cultures and
                        phases the respective companies were at.
                    </Body1>
                    <Body1 weight="light" as="p">
                        I have also interned at{' '}
                        <WorkSummaryStrongTerm>IIM Lucknow</WorkSummaryStrongTerm> in Data Science
                        and Anaytics.
                    </Body1>
                    <Body1 weight="light" as="p">
                        Somehow everything remote till date.
                    </Body1>
                </WorkSummary>
                <ProjectCertTestContainer>
                    <ProjectContainer>
                        <H2 as="h1" weight="bold" color="white">
                            Projects
                        </H2>
                        <Body1 weight="light" color="white">
                            Below is a some of what of I have done so far.
                        </Body1>
                        <ProjectCardsContainer>
                            {Projects.map(renderProjectCard)}
                        </ProjectCardsContainer>
                        <H5 as="h3" className="projectInMindHeading">
                            Project in mind
                        </H5>
                        <Body1 weight="medium">
                            I at times find the need to compare files. Hence a cli to easliy compare
                            different files.{' '}
                            <a href="https://www.npmjs.com/package/filediffer-cli">
                                filediffer-cli
                            </a>
                        </Body1>
                    </ProjectContainer>
                    <CertificateSection />
                    <TestimonialSection />
                </ProjectCertTestContainer>
            </MainContainer>
        </>
    );
};

export default Work;
