
import styled from "styled-components";

export const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(26, 26, 25, 0.72);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.a`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 500;
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Links = styled.nav`
  display: flex;
  gap: 1.75rem;

  a {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.textMuted};
    transition: color 0.15s ease;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 640px) {
    gap: 1.1rem;
    a:nth-child(n + 4) {
      display: none;
    }
  }
`;