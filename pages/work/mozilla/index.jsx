import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H4, Body2, H5, H6, Sub1, Strong, Pre, Code } from 'components/Font';
import TechTag from 'components/TechTag';
import MainContainer from 'components/MainContainer';
import { WorkStories } from 'app-constants';

const {
    mozilla: { title, techTags, image },
} = WorkStories;

const Container = styled(MainContainer)`
    padding-top: ${props => props.theme.base_spacing * 15}px;
`;

const Introduction = styled.div`
    display: grid;
    max-width: 65ch;
    row-gap: ${props => props.theme.base_spacing * 10}px;
    margin-bottom: ${props => props.theme.base_spacing * 26}px;
`;

const TechTagsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    max-width: 60ch;
    list-style: none;
    margin: ${props => props.theme.base_spacing * 7}px -${props => props.theme.base_spacing * 7}px ${props =>
            props.theme.base_spacing * 15}px 0;

    .techtag {
        margin-bottom: ${props => props.theme.base_spacing * 4}px;
        margin-right: ${props => props.theme.base_spacing * 7}px;
    }
`;

const BannerImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: ${props => props.theme.base_spacing * 8}px auto
        ${props => props.theme.base_spacing * 12}px;

    video {
        height: auto;
    }
`;

const SubtopicSection = styled.div`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 10}px;
    max-width: 65ch;
`;

const SubtopicTitle = styled(Sub1)`
    max-width: 50ch;
`;

const SubtopicsContainer = styled.div`
    max-width: 65ch;
    margin-top: ${props => props.theme.base_spacing * 10}px;
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 15}px;
`;

const Image = styled.img`
    margin: auto;
    height: auto;
`;

const TaskclusterServiceInfoContainer = styled.div`
    display: grid;
    max-width: 65ch;
    row-gap: ${props => props.theme.base_spacing * 10}px;
`;

const SemiStrong = styled.strong`
    font-weight: 600;
`;

const metaDesciption =
    'I wanted to code like professionals and write the best software. That motivated me towards open source and being aware of the “Mozilla” keyword as a browser, I chose to dive in there.  Mainly on taskcluster and out of curiosity, other projects FireFox Devtools, FixMe. etc';
const bannerImageURl = require('public/images/seo/mozwork.jpg');

const BodyPara = ({ children }) => (
    <Body2 as="p" weight="light">
        {children}
    </Body2>
);

BodyPara.propTypes = {
    children: PropTypes.any,
};

const Quote = styled.q`
    font-style: italic;
`;

const WorkSectionsTopContainer = styled.div`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 20}px;
`;

const jsoneSnip = `template:
$map: [2, 4, 6]
$each(x): {$eval: 'x + a'}
context:  {a: 1}
result:   [3, 5, 7];`;

const DevtoolsSection = () => {
    return (
        <section>
            <H5 as="h2" weight="bold">
                FireFox Devtools
            </H5>
            <SubtopicsContainer>
                <BodyPara>
                    I wish I had time to do more here. I had just scratched some molecules, not even
                    the surface.
                </BodyPara>
                <SubtopicSection>
                    <SubtopicTitle as="h4" weight="semibold" family={2} isItalic>
                        Inspector Tools
                    </SubtopicTitle>
                    <BodyPara>
                        Unless you dive into the very details of CSS one may find it weird.{' '}
                        <SemiStrong>Inactive Css</SemiStrong> is a new feature which warns you when
                        you use some css property which cannot effect due to the absence/presence of
                        some other property. Kudos to <SemiStrong>@violasong</SemiStrong> this is
                        her baby as she says.
                    </BodyPara>
                    <BodyPara>
                        At the time of writing this article, FireFox is the only browser which
                        supports inactive-css.
                    </BodyPara>
                    <Image
                        src={require('public/processed-images/work/mozilla/inactivecss.png')}
                        alt="inspector tools - inactive css grid-auto-columns on non grid container"
                        width={525}
                        height={272}
                    />
                    <BodyPara>
                        I added specifically the inactive display property on floated element thing.
                        Major part of the browser code in hosted in mercurial at{' '}
                        <SemiStrong>https://hg.mozilla.org</SemiStrong>
                    </BodyPara>
                    <BodyPara>
                        My bugzilla{' '}
                        <a href="https://bugzilla.mozilla.org/user_profile?user_id=608602">
                            profile
                        </a>
                        .{'  '}
                        <SemiStrong>Note:</SemiStrong> Not every issue is captured here.
                    </BodyPara>
                </SubtopicSection>
                <SubtopicSection>
                    <SubtopicTitle as="h4" weight="semibold" family={2} isItalic>
                        Firefox Profiler
                    </SubtopicTitle>
                    <BodyPara>
                        This tool visualizes performance data recorded from web browsers. It is a
                        tool designed to consume performance profiles from the Gecko Profiler but
                        can visualize data from any profiler able to output in JSON. The interface
                        is a web application built using React and Redux and runs entirely
                        client-side.
                    </BodyPara>
                    <BodyPara>
                        Mozilla develops this tool to help make Firefox silky smooth and fast for
                        millions of its users, and to help make sites and apps faster across the
                        web.
                    </BodyPara>
                    <Image
                        src={require('public/processed-images/work/mozilla/FireFoxProfiler.png')}
                        alt="Screenshot of firefox profiler ui"
                        width={630}
                        height={350}
                    />
                    <BodyPara>
                        So this was a feature I added in the profiler{' '}
                        <Quote cite="https://github.com/firefox-devtools/profiler/issues/2086">
                            {
                                "Sometimes when someone sends me a profiler link, I get confused because the top pane doesn't show the interesting threads. It's a pain especially on Mac, which doesn't show a scrollbar unless I actually scroll down."
                            }
                        </Quote>
                    </BodyPara>
                </SubtopicSection>
            </SubtopicsContainer>
        </section>
    );
};

const TaskclusterSection = () => {
    return (
        <section>
            <H5 as="h2" weight="bold">
                Taskcluster
            </H5>
            <SubtopicsContainer>
                <BodyPara>
                    Taskcluster is Mozilla’s internal CI and task execution framework. Stating
                    directly from the official documentation:
                </BodyPara>
                <SubtopicSection>
                    <SubtopicTitle as="h4" weight="semibold" family={2} isItalic>
                        What does Taskcluster do ?
                    </SubtopicTitle>
                    <BodyPara>
                        Fundamentally, it executes tasks. A task is defined in a JSON object, and
                        placed on a queue. A worker later claims that task, executes it, and updates
                        the task with the results.
                    </BodyPara>
                </SubtopicSection>
                <SubtopicSection>
                    <SubtopicTitle as="h4" weight="semibold" family={2} isItalic>
                        What is Taskcluster ?
                    </SubtopicTitle>
                    <BodyPara>
                        Taskcluster is a set of microservices exposing a REST API, together with a
                        convenient user interface and a set of workers that are responsible for
                        executing tasks. A deployment of Taskcluster consists of running services
                        associated workers (or configuration to start workers on-demand).
                    </BodyPara>
                </SubtopicSection>
                <Image
                    src={require('public/processed-images/work/mozilla/tc-2k18.png')}
                    alt="github contribution in taskcluster platform in 2018"
                    width={630}
                    height={159}
                />
                <Image
                    src={require('public/processed-images/work/mozilla/tc-2k19.png')}
                    alt="github contribution in taskcluster platform in 2019"
                    width={630}
                    height={157}
                />
                <BodyPara>
                    It was damn overwhelming since hacking anything required so much understanding
                    of the entire ecosystem.
                </BodyPara>
                <BodyPara>
                    My first few contributions were on json-e. <SemiStrong>Json-e</SemiStrong> takes
                    a json template and a json context and produces a json output. It comprises
                    several operators. With support in node, go and python.
                </BodyPara>
                <div>
                    <BodyPara>
                        Eg for <Code>$map</Code> and <Code>$each</Code> operator
                    </BodyPara>
                    <Pre>{jsoneSnip}</Pre>
                </div>
                <TaskclusterServiceInfoContainer>
                    <BodyPara>
                        It seemed like a wild ride. Whatever got me curious I dived in, hacking on
                        multiple parts: taskcluster-hooks, taskcluster-notify, taskcluster pulse and{' '}
                        <SemiStrong>tc web</SemiStrong> , json-e,{' '}
                        <SemiStrong>taskcluster-worker</SemiStrong> etc.
                    </BodyPara>
                    <BodyPara>
                        <SemiStrong>Taskcluster Pulse</SemiStrong> is the communication bus for the
                        microservices. It has a pub sub system using RabbitMQ and amqp protocol.
                    </BodyPara>
                    <BodyPara>
                        <SemiStrong>Taskcluster-Hooks</SemiStrong> is a hooks service which creates
                        tasks in response to events (cron job, webhooks, api call, pulse message)
                    </BodyPara>
                    <BodyPara>
                        <SemiStrong>Taskcluster-Notify</SemiStrong> is a notification service for
                        task updates via email, irc, pulse and (now even slack, matrix)
                    </BodyPara>
                </TaskclusterServiceInfoContainer>
            </SubtopicsContainer>
        </section>
    );
};

const MozillaStory = () => {
    const renderTechTag = label => {
        return <TechTag as="li" className="techtag" key={label} label={label} />;
    };

    return (
        <>
            <Head>
                <title>Work - {title}</title>
                <meta name="description" content={metaDesciption} />
                <meta
                    name="keywords"
                    content="work experience, mozilla, open source, javascript, react, software engineer"
                />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={metaDesciption} />
                <meta property="og:image" content={bannerImageURl} />
                <meta property="og:url" content={`https://biboswanroy.com/work/mozilla`} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={metaDesciption} />
                <meta name="twitter:image" content={bannerImageURl} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Biboswan98" />
            </Head>
            <Container>
                <article>
                    <H4 as="h1" weight="bold">
                        {title}
                    </H4>
                    <BannerImageWrapper>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            title={image.alt}
                            width={image.width}
                            height={image.height}
                        >
                            <source src={image.url} type="video/webm"></source>
                            <source src={image.url2} type="video/mp4"></source>
                        </video>
                    </BannerImageWrapper>
                    <Introduction>
                        <BodyPara>
                            I wanted to code like professionals and write the best software. That
                            motivated me towards open source and being aware of the “Mozilla”
                            keyword as a browser, I chose to dive in there. Mainly on{' '}
                            <Strong>Taskcluster</Strong> and out of curiosity, other projects{' '}
                            <Strong>FireFox Devtools</Strong>, <Strong>FixMe</Strong> etc.
                        </BodyPara>
                        <BodyPara>
                            I’m grateful to <SemiStrong>Dustin</SemiStrong> and team for valuing my
                            contributions at Taskcluster and inviting me to Mozilla’s{' '}
                            <SemiStrong>All Hands 2018, Orlando</SemiStrong>.
                        </BodyPara>
                        <BodyPara>
                            I‘m writing about this after way too long. So I find it slightly hard to
                            recall and go into detailed architectures.
                        </BodyPara>
                    </Introduction>
                    <section>
                        <H6 weight="medium" as="h3">
                            Some Related Tags
                        </H6>
                        <TechTagsContainer>{techTags.map(renderTechTag)}</TechTagsContainer>
                    </section>
                    <WorkSectionsTopContainer>
                        <TaskclusterSection />
                        <DevtoolsSection />
                    </WorkSectionsTopContainer>
                </article>
            </Container>
        </>
    );
};

export default MozillaStory;
