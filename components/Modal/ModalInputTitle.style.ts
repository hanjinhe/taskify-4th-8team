import styled from 'styled-components';
import { device } from '@/styles/breakpoints';

export const ModalInputTitleWrapper = styled.div`
  min-width: 45rem;
  min-height: 7.9rem;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media ${device.mobileResponsive} {
    min-width: 28.7rem;
    min-height: 7.1rem;
  }
`;

export const ModalInputTitleLabel = styled.label`
  color: var(--black_050, #333236);
  font-size: 1.8rem;
  font-weight: 500;

  @media ${device.mobileResponsive} {
    font-size: 1.6rem;
  }
`;

export const ModalInputTitleLabelStar = styled.span`
  color: var(--violet_000, #5534da);
  font-size: 1.8rem;
  font-weight: 500;

  @media ${device.mobileResponsive} {
    font-size: 1.6rem;
  }
`;

export const ModalInputTitleInput = styled.input<{ $customHeight?: string }>`
  width: 100%;
  height: ${({ $customHeight }) => $customHeight || '4.8rem'};
  padding: 1.4rem 1.6rem;
  border-radius: 0.6rem;
  border: 0.1rem solid var(--gray_060, #d9d9d9);
  background: var(--white_100, #fff);
  outline: none;
  font-size: 1.6rem;

  ::placeholder {
    color: var(--gray_020, #9fa6b2);
    font-size: 1.6rem;
  }

  @media ${device.mobileResponsive} {
    height: ${({ $customHeight }) => $customHeight || '4.2rem'};
    padding: 1.2rem 1.6rem 1.3rem;
    font-size: 1.4rem;

    ::placeholder {
      font-size: 1.4rem;
    }
  }
`;

export const ModalInputTitleTextarea = styled(ModalInputTitleInput).attrs({
  as: 'textarea',
})`
  resize: none;
  overflow: hidden;

  &:focus {
    overflow: auto;
  }

  @media ${device.mobileResponsive} {
    height: 8.4rem;
  }
`;
