import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.img`
    width: 100%;
    border-radius: 50%;
    height: auto;
`;

const ProfilePic = props => {
    const { className } = props;
    return (
        <Image
            alt="profile picture in browish yellow shirt (1/3 of body)"
            width="200"
            height="200"
            className={className}
            src={require('public/images/profile-pic.jpeg')}
        />
    );
};

ProfilePic.propTypes = {
    className: PropTypes.string,
};

export default ProfilePic;
