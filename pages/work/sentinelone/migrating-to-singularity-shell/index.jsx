import React from 'react';
import styled from 'styled-components';
import MainContainer from 'components/MainContainer';
import { H3, H5, Body1, Body2 } from 'components/Font';
import TechTag from 'components/TechTag';

const Article = styled.article`
    padding-top: ${props => props.theme.base_spacing * 5}px;
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
            color: var(--color-strong);
        }
    }

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        display: grid;
        row-gap: ${props => props.theme.base_spacing * 7}px;
    }
`;

const ExternalLink = styled.a`
    color: var(--color-strong);
    text-decoration: none;
    border-bottom: 1px solid var(--color-strong);
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`;

const ArchitectureImage = styled.img`
    width: 100%;
    max-width: 800px;
    margin: ${props => props.theme.base_spacing * 15}px auto;
    display: block;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ImageCaption = styled(Body2)`
    text-align: center;
    color: var(--color-secondaryText);
    margin-top: ${props => props.theme.base_spacing * 4}px;
    margin-bottom: ${props => props.theme.base_spacing * 15}px;
`;

const ShellIframeArchitecture = () => {
    const techTags = [
        'React',
        'Angular',
        'TypeScript',
        'iframe',
        'Authentication',
        'Routing',
        'State Management',
    ];

    const subtopics = [
        {
            title: 'Unified User Experience',
            desc: [
                'Implemented a consistent look and feel across different applications while maintaining their individual functionalities.',
                'Coordinated styling, theming, and UI components across all integrated apps.',
                'Developed a shared design system that worked across different frontend frameworks.',
            ],
        },
        {
            title: 'Seamless Navigation',
            desc: [
                'Developed a sophisticated routing system that enabled smooth transitions between different applications.',
                'Implemented deep linking capabilities and state management across apps.',
                'Created a unified navigation experience without requiring multiple browser tabs.',
            ],
        },
        {
            title: 'Authentication Flow',
            desc: [
                'Created an efficient login mechanism that handled automatic redirection after authentication.',
                'Implemented secure token management and session handling across applications.',
                'Ensured smooth user experience while maintaining security across all integrated applications.',
            ],
        },
        {
            title: 'Inter-App Communication',
            desc: [
                'Implemented a robust communication layer between the shell and iframed applications.',
                'Developed efficient route synchronization and state management across different apps.',
                'Created a secure messaging system for cross-application communication.',
            ],
        },
        {
            title: 'Console Dialogs Architecture',
            desc: [
                'Developed a transparent background iframe system for dialogs (concept by Eduard Stankovic).',
                'Implemented a postMessage-based communication system for dialog management.',
                'Created a dual-console architecture with separate iframes for dialogs and regular pages.',
                'Integrated the initial login form into the dialog iframe system.',
            ],
        },
        {
            title: 'Login Flow',
            desc: [
                'Designed a seamless login flow where the console dialogs iframe handles initial authentication.',
                'Implemented automatic redirection to inner apps after successful login.',
                'Created a system where apps are initiated by login and redirect links.',
                'Developed automatic app redirection as if the user clicked the link manually.',
            ],
        },
    ];

    const renderTechTag = label => {
        return <TechTag className="techtag" key={label} label={label} />;
    };

    const renderSubtopic = ({ title, desc }) => {
        const renderPara = (para, index) => (
            <Body2 key={index} as="p" weight="light">
                {para}
            </Body2>
        );

        return (
            <SubtopicSection key={title}>
                <H5 as="h3">{title}</H5>
                <SubtopicTextData>
                    <div className="paragraph-spacing">{desc.map(renderPara)}</div>
                </SubtopicTextData>
            </SubtopicSection>
        );
    };

    return (
        <MainContainer>
            <Article>
                <H3 as="h1">Shell Iframe Architecture</H3>
                <Body1 as="p" color="secondaryText">
                    SentinelOne - Unified Console Integration Project
                </Body1>

                <Introduction>
                    <Body1>
                        The Shell Iframe Architecture project was a significant initiative at
                        SentinelOne that unified multiple applications into a single, cohesive
                        console experience. This project brought together diverse applications
                        including the MGMT console, Attivo, and Skylight, each built with different
                        frontend frameworks, into a seamless user interface.
                    </Body1>
                    <Body1>
                        This work contributed to the development of the{' '}
                        <ExternalLink
                            href="https://www.sentinelone.com/blog/unify-the-analyst-experience-with-singularity-operations-center/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Singularity Operations Center
                        </ExternalLink>
                        , a unified security console that centralizes security management with
                        unified alerts, asset inventory management, and a correlation engine to
                        accelerate detection, triage, and investigation.
                    </Body1>
                </Introduction>

                <ArchitectureImage
                    src="/processed-images/work/sentinelone/singularity-shell-architecture.png"
                    alt="Singularity Shell Architecture - Unified Console Integration"
                />
                <ImageCaption>
                    Singularity Shell Architecture - Unified Console Integration
                </ImageCaption>

                <TechTagsContainer>{techTags.map(renderTechTag)}</TechTagsContainer>

                <SubtopicsContainer>{subtopics.map(renderSubtopic)}</SubtopicsContainer>

                <SubtopicSection>
                    <H5 as="h3">Impact & Results</H5>
                    <SubtopicTextData>
                        <div className="paragraph-spacing">
                            <Body2 weight="light">
                                The Shell Iframe Architecture project successfully unified multiple
                                applications into a single console, providing users with a seamless
                                experience while maintaining the individual strengths of each
                                application. The solution was implemented with minimal code changes
                                across various apps, demonstrating the project's efficiency and
                                effectiveness in achieving its goals.
                            </Body2>
                        </div>
                    </SubtopicTextData>
                </SubtopicSection>
            </Article>
        </MainContainer>
    );
};

export default ShellIframeArchitecture;
