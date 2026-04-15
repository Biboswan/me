import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge, faList } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    gap: ${props => props.theme.base_spacing * 2}px;
`;

const ToggleButton = styled.button`
    width: 40px;
    height: 40px;
    padding: 0;
    cursor: pointer;
    background: ${props => (props.$isActive ? 'var(--color-brand)' : 'transparent')};
    border: 1px solid var(--color-brand);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s ease;

    svg {
        color: ${props => (props.$isActive ? '#fff' : 'var(--color-brand)')};
    }

    &:hover {
        background: ${props => (props.$isActive ? 'var(--color-brand)' : 'rgba(67, 70, 241, 0.1)')};
    }

    &:focus {
        outline: 2px solid var(--color-brand);
        outline-offset: 2px;
    }
`;

const ViewToggle = ({ activeView, onViewChange }) => {
    return (
        <Container>
            <ToggleButton
                $isActive={activeView === 'cards'}
                onClick={() => onViewChange('cards')}
                aria-label="Grid view"
                aria-pressed={activeView === 'cards'}
            >
                <FontAwesomeIcon icon={faThLarge} />
            </ToggleButton>
            <ToggleButton
                $isActive={activeView === 'list'}
                onClick={() => onViewChange('list')}
                aria-label="List view"
                aria-pressed={activeView === 'list'}
            >
                <FontAwesomeIcon icon={faList} />
            </ToggleButton>
        </Container>
    );
};

ViewToggle.propTypes = {
    activeView: PropTypes.oneOf(['cards', 'list']).isRequired,
    onViewChange: PropTypes.func.isRequired,
};

export default ViewToggle;
