import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
    width: 100%;
    border-radius: 50%;
`;

const ProfilePic = props => {
    const { className } = props;
    return <Image className={className} src={require('public/images/profile-pic.jpeg')} />;
};

ProfilePic.propTypes = {
    className: PropTypes.string,
};

export default ProfilePic;
