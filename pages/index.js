import Head from 'next/head';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
            <Head>
                <title>Home Page - Biboswan Roy</title>
            </Head>
            <p>
                Hello I’m Biboswan Roy. “Biboswan” is a synonym for sungod ! I’m a software engineer
                currently based in India, inclined towards the web. Loves open source, tech
                communities and dancing too :). Open to write code in any programming language but
                if it can be done with Javascript, would certainly do so.
            </p>
        </Fragment>
    );
};

export default Home;
