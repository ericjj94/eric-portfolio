import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem 3rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;

  span:last-child {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textFaint};
  }
`;

export const Track = styled.div`
  height: 8px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgElevated};
  border-radius: 999px;
  overflow: hidden;
`;

export const Fill = styled.div`
  height: 100%;
  width: ${({ $rating }) => $rating * 20}%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accentStrong},
    ${({ theme }) => theme.colors.accent}
  );
  border-radius: 999px;
`;
