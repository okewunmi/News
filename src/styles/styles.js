"use client";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: #fff;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
`;

export const Content = styled.div`
  color: #fff;
  width: 100%;
  max-height: 100%;
  padding: 0 1.5rem 0 0;

  .card {
    height: 80vh;
    padding: 0.5rem 2rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
    place-items: center;

    .box {
      width: 23rem;
      /* height: 26rem; */
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      /* padding-bottom: 20rem; */

      .image {
        border-radius: 1rem;
        width: 400px;
        height: 200px;
        border: 1px solid #fff;
      }
    }
  }
  .card::-webkit-scrollbar {
    width: 7px; /* for vertical scrollbar */
    height: 5px; /* for horizontal scrollbar */
  }

  .card::-webkit-scrollbar-track {
    background: red;
    border-radius: 5px;
  }

  .card::-webkit-scrollbar-thumb {
    background: #487aff;
    border-radius: 5px;
  }

  .card::-webkit-scrollbar-button {
    width: 5px;
  }
  .head__box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn_next {
      color: #000;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }

  .heading {
    color: #000;
    padding: 1rem 0 1rem 2rem;
    font-size: 1.3rem;
    font-weight: bolder;
    font-family: var(--font-roboto), sans-serif;
  }
  figcaption {
    width: 21rem;
    height: 17rem;
    background: white;
    color: #000;
    transform: translateY(-3rem);
    border-radius: 1.2rem;
    padding: 1rem 1.2rem;
    box-shadow: 5px 5px 5px #ebeae5;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      font-size: 0.8rem;
      font-family: var(--font-roboto), sans-serif;
      font-weight: bold;

      &__time {
        color: #487aff;
      }
      &__date {
      }
    }

    .head {
      color: #000;
      font-size: 0.95rem;
      font-weight: 800;
      font-family: var(--font-garamond), sans-serif;
      width: 100%;
      line-height: 20px;
    }
    .txt {
      font-size: 0.85rem;
      font-weight: 400;
      font-family: var(--font-roboto), sans-serif;
      color: gray;
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__num {
        display: flex;
        flex-direction: column;
        font-family: var(--font-roboto), sans-serif;
      }
      .num {
        font-weight: bold;
      }
      &__link {
        display: flex;
        gap: 1rem;

        .btn {
          transition: all 0.3s;
          &:hover {
            color: red;
            cursor: pointer;
            transform: scale(1.4);
          }
        }
      }
    }
  }
`;

export const Details = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  width: 65%;
  max-height: 100%;
  /* background: grey; */
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 80vh;
  padding: 0.5rem 1.5rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;

  &::-webkit-scrollbar {
    width: 7px; /* for vertical scrollbar */
    height: 5px; /* for horizontal scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: red;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: #487aff;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-button {
    width: 5px;
  }

  .image {
    border-radius: 1.2rem;
    width: 100%;
    height: 90%;
    object-fit: cover;
    border: 1px solid #ccce;
  }
  .txt__box {
    padding: 2.2rem;
    background: #fff;
    width: 92%;
    height: 50rem;
    border-radius: 1rem;
    margin-top: -5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 5px 5px 5px #ebeae5;
    gap: 2rem;

    .txt {
      display: flex;
      flex-direction: column;
    }

    .head {
      font-size: 2.1rem;
      font-weight: bolder;
      line-height: 1.2;
      margin: 2rem 0;
    }
    .paragraph {
      font-size: 1.05rem;
      line-height: 1.8;
      text-align: justify;
    }

    .bottom {
      display: flex;
      gap: 2rem;
      flex-direction: column;
      align-items: center;

      &__link {
        gap: 0.7rem;
        display: flex;
        flex-direction: column;

        button,
        .redirectLink {
          border: 1px solid grey;
          padding: 0.5rem;
          border-radius: 100%;

          &:hover {
            color: red;
          }
        }
      }
      &__num {
        display: flex;
        flex-direction: column;
        align-items: center;

        .num {
          font-weight: bold;
        }
      }
    }
  }
  .time {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-family: var(--font-roboto), sans-serif;
    font-weight: bold;

    &__time {
      color: #487aff;

      span {
        color: #000;
      }
    }
    &__date {
    }
  }
`;

export const Other = styled.div`
  width: 35%;
  max-height: 100%;
  padding: 1.2rem 0rem 1rem 3rem;
  display: flex;
  flex-direction: column;
  position: relative;

  .list {
    height: 75vh;
    width: 90%;
    overflow-x: auto;
    scroll-behavior: smooth;
    overscroll-behavior-inline: contain;
    scroll-snap-type: inline mandatory;
    position: relative;
    top: 1rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .box {
      width: 90%;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-bottom: 1rem;
      padding-bottom: 0.5rem;

      &__image {
        width: 100%;
        height: 10rem;
        .image {
          width: 100%;
          height: 100%;
          border-radius: 0.6rem;
        }
      }
      &__title {
        font-size: 0.95rem;
        font-weight: bold;
        line-height: 1.3;
      }
      &__txt {
        font-size: 0.8rem;
        color: gray;
        text-align: justify;
        font-weight: 600;
      }
      &__date {
        font-size: 0.8rem;
        color: gray;
        font-weight: bold;
      }

      &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;

        .num {
          display: flex;
          flex-direction: column;
          font-size: 1rem;

          .number {
            font-weight: bold;
          }
          .people {
            color: gray;
            font-weight: 500;
          }
        }
      }
      /* &__link {
        display: flex;
        gap: 0.5rem;
      } */
      &__link {
        gap: 0.5rem;
        display: flex;
        align-items: center;

        button,
        .redirectLink {
          padding: 0.5rem;
          border-radius: 100%;

          &:hover {
            color: red;
          }
        }
      }
    }
  }
  .list::-webkit-scrollbar {
    width: 5px; /* for vertical scrollbar */
    height: 2px; /* for horizontal scrollbar */
  }

  .list::-webkit-scrollbar-track {
    background: white;
    border-radius: 5px;
  }

  .list::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 5px;
  }

  .list::-webkit-scrollbar-button {
    width: 5px;
  }
  .head {
    color: #000;
    font-size: 1.2rem;
    font-weight: 700;
    font-family: var(--font-garamond), sans-serif;
    width: 100%;
    line-height: 20px;
  }
`;
