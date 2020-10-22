import Head from 'next/head';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MainContainer from 'components/MainContainer';
import BlogArticleCard from 'components/BlogArticleCard';
import { H4, Body1 } from 'components/Font';
import { parse } from 'node-html-parser';

const STORIES_APT =
    'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Biboswan98';

const Subheading = styled(Body1)`
    margin: ${props => props.theme.base_spacing * 6}px 0 ${props => props.theme.base_spacing * 10}px;
    max-width: 65ch;
`;

const ArticlesContainer = styled.div`
    display: grid;
    row-gap: ${props => props.theme.base_spacing * 15}px;

    .articleCard {
        max-width: 480px;
        box-sizing: border-box;
        margin: auto;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoint.md}px) {
        grid-template-columns: 1fr 1fr;
        column-gap: 
        align-items: ;
    }
`;

const Blog = ({ stories }) => {
    const renderBlogArticleCard = item => {
        return <BlogArticleCard className="articleCard" key={item.title} {...item} />;
    };

    return (
        <>
            <Head>
                <title>Blog - Biboswan Roy</title>
            </Head>
            <MainContainer>
                <H4 as="h1">Blog</H4>
                <Subheading as="h2">
                    Below are some of my articles from other platforms. Any new article short or
                    long on tech or other thought shall appear here in my blog now.
                </Subheading>
                <ArticlesContainer>{stories.map(renderBlogArticleCard)}</ArticlesContainer>
            </MainContainer>
        </>
    );
};

Blog.propTypes = {
    stories: PropTypes.array,
};

export async function getStaticProps() {
    const res = await fetch(STORIES_APT);
    const { items } = await res.json();

    const getReadTime = content => {
        const wordlen = content.split(' ').length;
        const r1 = wordlen / 200;
        const readTime = Math.round(Math.round(r1) + (r1 - Math.round(r1)) * 0.6);
        return readTime;
    };

    const getStartingLines = content => {
        const dm = parse(content);
        const para = dm.querySelector('p').text;
        return para.substring(0, 240);
    };

    return {
        props: {
            stories: items
                .filter(item => item.categories.length > 0)
                .map(({ content, ...rest }) => {
                    return {
                        readTime: getReadTime(content),
                        startingLines: getStartingLines(content),
                        ...rest,
                    };
                }),
        },
    };
}

export default Blog;
