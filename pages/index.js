import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Fragment } from 'react';
import { H1, H2, Body1 } from 'components/Font';
import MainContainer from 'components/MainContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import ProfilePic from 'components/ProfilePic';
import BlobOrangeBlue from 'public/images/blob_OrangeBlue.svg';

const blink = keyframes`
    0% {
        opacity:1;
    }
    49% {
        opacity:1;
    }
    50% {
        opacity:0;
    }
    100% {
        opacity:0;
    }
`;

const Cursor = styled.span`
    &: after {
        margin-left: 5px;
        display: inline-block;
        content: '|';
        color: transparent;
        width: 10px;
        background-color: green;
        animation-name: ${blink};
        animation-duration: 0.5s;
        animation-iteration-count: infinite;
    }
`;

const AnimatedBanner = styled(Body1)`
    max-width: 45ch;
    margin-top: ${props => props.theme.base_spacing * 8}px;
`;
const HI = styled(H1)`
    color: ${props => props.theme.color.brand};
    span {
        color: ${props => props.theme.color.secondary};
    }
`;

const BlobContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Blob = styled.img`
    position: relative;
`;

const BrandColoredHeading = styled.span`
    color: ${props => props.theme.color.brand};
`;

const ProfilePicContainer = styled.div`
    width: 92px;
    margin-bottom: ${props => props.theme.base_spacing * 8}px;
`;

const BANNER_TEXT = `physically based in India, inclined towards the web. Loves open source, tech communities, green tea (not coffee) and dancing too. 
Building interfaces got me interested lately into Human Computer Interaction because I had always tried to understand why humans behave the way they do.
Open to write code in any programming language but if it can be done with Javascript, would certainly do so.
Open Source contribution has played a huge role in learning about software best practices and pushing high quality code.`;

const Home = () => {
    const [bannerLength, setBannerLength] = useState(0);

    useEffect(() => {
        const progressType = () => {
            setBannerLength(bannerLength => bannerLength + 1);
            if (bannerLength < BANNER_TEXT.length) {
                setTimeout(progressType, 60);
            }
        };

        progressType();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Home Page - Biboswan Roy</title>
            </Head>
            <MainContainer>
                <BlobContainer>
                    <Blob src={BlobOrangeBlue} />
                </BlobContainer>
                <br />
                <ProfilePicContainer>
                    <ProfilePic />
                </ProfilePicContainer>
                <HI>
                    HI<span>!</span>
                </HI>
                <FontAwesomeIcon icon={faPlayCircle} />
                <H2>I’m Biboswan Roy</H2>
                <H2>
                    A <BrandColoredHeading>Software</BrandColoredHeading> Engineer
                </H2>
                <AnimatedBanner as="p" weight="light">
                    {BANNER_TEXT.substr(0, bannerLength)}
                    {bannerLength < BANNER_TEXT.length && <Cursor />}
                </AnimatedBanner>
            </MainContainer>
        </Fragment>
    );
};

export default Home;
