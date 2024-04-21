import styled, { css } from 'styled-components';

export const ModalInputProgressWrapper = styled.div`
  width: 21.7rem;
  height: 7.9rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalInputProgressTitle = styled.div`
  color: var(--black_050, #333236);
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 1.6rem;
  }
`;

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 21.7rem;
  height: 4.8rem;
  padding: 1.1rem 1.6rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${({ isOpen }) => (isOpen ? 'var(--violet_000, #5534da)' : 'var(--gray_060, #d9d9d9)')};
  background: var(--white_100, #fff);
  cursor: pointer;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const DropdownList = styled.ul`
  width: 21.7rem;
  height: 11.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);
  box-shadow: 0 0.4rem 2rem 0 rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  list-style-type: none;
  padding: 0.65rem 0.8rem;
  margin: 0;
`;

export const DropdownListItem = styled.li`
  padding: 0.6rem;
  display: flex;
  flex-direction: row;

  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }

  .check-image {
    width: 2.2rem;
    height: 2.2rem;
    margin-right: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;