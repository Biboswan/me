import { MDXProvider as MarkDownJSXProvider } from '@mdx-js/react';
import { H4, H5, H6, Sub1, Sub2, Strong, Body2 } from 'components/Font';
import PropTypes from 'prop-types';

const mdComponents = {
    h1: function Heading1(props) { return <H4 as='hi' {...props} /> },
    h2: function Heading2(props) { return <H5 as='h2' {...props} /> },
    h3: function Heading3(props) { return <H6 as='h3' {...props} /> },
    h4: function Heading4(props) { return <Sub1 as='h4' {...props} /> },
    h5: function Heading4(props) { return <Sub2 as='h5' {...props} /> },
    p:  function Paragraph(props) { return <Body2 as='p' {...props} /> },
    strong: Strong
};

const MDXProvider = props => {
    const { children } = props;

    return (
        <MarkDownJSXProvider components={mdComponents}>
            {children}
        </MarkDownJSXProvider>
    );
};

MDXProvider.propTypes = {
    children: PropTypes.any.isRequired,
};

export default MDXProvider;
