import Head from 'next/head';
import styled from 'styled-components';
import MainContainer from 'components/MainContainer';
import { H4, Body1 } from 'components/Font';
import ImageFrame from 'components/ImageFrame';

const Heading = styled(H4)`
    margin-top: ${props => props.theme.base_spacing * 11}px;
`;
const Subheading = styled(Body1)`
    margin: ${props => props.theme.base_spacing * 6}px 0 ${props => props.theme.base_spacing * 10}px;
`;

const ImagesData = [
    {
        src: require('public/processed-images/conf/440/dubaiTechTuesday.jpg'),
        label: 'Dubai Tech Tuesday, 2025',
        width: 440,
        height: 660,
    },
    {
        src: require('public/processed-images/conf/440/javascriptLondon.jpg'),
        label: 'Javascript London Meetup, October 2024',
        width: 440,
        height: 330,
    },
    {
        src: require('public/processed-images/conf/440/AllHands2k18.jpg'),
        label: 'Mozilla All Hands 2018, Orlando',
        width: 440,
        height: 550,
    },
    {
        src: require('public/processed-images/conf/440/apollo2urql.jpeg'),
        label:
            'Migrating partially from Apollo to Urql in a Nextjs application, GeekyAnts Meetup Bangalore',
        width: 440,
        height: 294,
    },
    {
        src: require('public/processed-images/conf/440/FBDC.jpg'),
        label: 'React Fundamentals and State management in Facebook Develper Cirlces, Kolkata',
        width: 440,
        height: 330,
    },
    {
        src: require('public/processed-images/conf/440/googleIo.jpg'),
        label:
            'Developer Student Club Kolkata organised Google IO Extended. Core Organiser and gave talk on PWA',
        width: 440,
        height: 587,
    },
    {
        src: require('public/processed-images/conf/440/gnx.jpeg'),
        label: 'Getting $0 mentors via open source - NSEC Kolkata',
        width: 440,
        height: 293,
    },
    {
        src: require('public/processed-images/conf/440/graphQLAsia.jpg'),
        label: 'Received Scholarship for GraphQL Asia 2019',
        width: 440,
        height: 330,
    },
    {
        src: require('public/processed-images/conf/440/abcofreact.png'),
        label: 'Virtual session at Google Developer Student Club Techno India University',
        width: 440,
        height: 246,
    },
];

const frameColors = ['brand', 'secondary'];

const renderImage = ({ src, label, width, height }, ind) => {
    return (
        <ImageFrame
            className="imageItem"
            key={label}
            src={src}
            label={label}
            frameColor={frameColors[ind & 1]}
            imageWidth={width}
            imageHeight={height}
        />
    );
};

const ImagesContainer = styled.div`
    margin-bottom: -${props => props.theme.base_spacing * 15}px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: start;

    .imageItem {
        max-width: 440px;
        margin: 0 auto ${props => props.theme.base_spacing * 15}px;
    }
`;

const Events = () => {
    return (
        <>
            <Head>
                <title>Events - Biboswan Roy</title>
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
                <meta
                    property="og:image"
                    content={require('public/images/conf/AllHands2k18.jpg')}
                />
                <meta property="og:type" content="website" />
                <meta name="twitter:title" content="Biboswan Roy" />
                <meta
                    name="twitter:description"
                    content="Frontend and full stackish engineer,passionate about open source and public speaking"
                />
                <meta
                    name="twitter:image"
                    content={require('public/images/conf/AllHands2k18.jpg')}
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@Biboswan98" />
            </Head>
            <MainContainer>
                <Heading as="h1">Communities & Confs</Heading>
                <Subheading>
                    Can I say tech events are one of my hangout places where I find some peace of
                    mind.
                </Subheading>
                <ImagesContainer>{ImagesData.map(renderImage)}</ImagesContainer>
            </MainContainer>
        </>
    );
};

export default Events;
