"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  background: #487aff;
  width: 4.5rem;
  /* margin-left: 1rem; */
  border-top-left-radius: 1rem;
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  color: #ffff;
  align-self: center;
  border-bottom-left-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    width: 5rem;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .link {
      font-weight: 500;
      font-size: 1.2rem;
      padding: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.3rem;
      transition: all 0.4s;

      &:hover {
        background: #ffff;
        border-radius: 100%;
        color: black;
        transform: scale(1.2);
      }
      .profile {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background: green;
      }
    }

    header {
      height: 5%;
      display: flex;
      gap: 0.3rem;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      font-size: 1.4rem;
      margin-bottom: 1.7rem;
      padding: 0.5rem;
      border: 1px solid white;
      border-radius: 100%;
    }
  }
`;
