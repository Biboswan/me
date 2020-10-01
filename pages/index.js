import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Fragment } from 'react';
import { H1, H2 } from 'components/Font';

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

const AnimatedBanner = styled(H2)`
    max-width: 45ch;
    margin: auto;
`;
const HI = styled(H1)``;

const BANNER_TEXT = `I’m a software engineer
physically based in India, inclined towards the web. Loves open source, tech
communities and dancing too :). Open to write code in any programming language but
if it can be done with Javascript, would certainly do so.`;

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
            <div>
                <HI>HI!</HI>
                <AnimatedBanner as="h1">
                    {BANNER_TEXT.substr(0, bannerLength)}
                    {bannerLength < BANNER_TEXT.length && <Cursor />}
                </AnimatedBanner>
            </div>
        </Fragment>
    );
};

export default Home;

/**
 *
 */
