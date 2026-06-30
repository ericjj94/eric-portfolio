import React from 'react';
import styled from 'styled-components';

export const Hero = styled.section`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  padding: 4rem 1.5rem;
`;

export const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

export const Kicker = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

export const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;

  span {
    color: ${({ theme }) => theme.colors.accent2};
  }
`;

export const Lead = styled.p`
  max-width: 620px;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textMuted};
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.25rem;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 500;
  font-size: 0.95rem;
  transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  &.primary {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bg};
  }
  &.primary:hover {
    transform: translateY(-2px);
  }

  &.ghost {
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    color: ${({ theme }) => theme.colors.text};
  }
  &.ghost:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;