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
    { src: 'images/conf/AllHands2k18.jpg', label: 'Mozilla All Hands 2018, Orlando' },
    {
        src: 'images/conf/FBDC.jpg',
        label: 'React Fundamentals and State management in Facebook Develper Cirlces, Kolkata',
    },
    {
        src: 'images/conf/googleIo.jpg',
        label:
            'Developer Student Club Kolkata organised Google IO Extended. Core Organiser and gave talk on PWA',
    },
    {
        src: 'images/conf/gnx.jpeg',
        label: 'Getting $0 mentors via open source - NSEC Kolkata',
    },
    {
        src: 'images/conf/graphQLAsia.jpg',
        label: 'Received Scholarship for GraphQL Asia 2019',
    },
];

const frameColors = ['brand', 'secondary'];

const renderImage = ({ src, label }, ind) => {
    return <ImageFrame src={src} label={label} frameColor={frameColors[ind & 1]} />;
};

const ImagesContainer = styled.div`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 15}px;
`;

const Events = () => {
    return (
        <>
            <Head>
                <title>Events - Biboswan Roy</title>
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
