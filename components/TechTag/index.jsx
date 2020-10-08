import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Body2 } from 'components/Font';

const Tag = styled.div`
    background: linear-gradient(180deg, #2db392 68.75%, rgba(0, 154, 116, 0) 100%);
    padding: ${props => props.theme.base_spacing * 2}px;
    border-radius: 12px;
    width: max-content;
`;

const TechTag = ({ label, ...rest }) => {
    return (
        <Tag {...rest}>
            <Body2>{label}</Body2>
        </Tag>
    );
};

TechTag.propTypes = {
    label: PropTypes.string.isRequired,
};

export default TechTag;
