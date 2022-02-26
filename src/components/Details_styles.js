import styled from "styled-components";

export const SECTION = styled.div`
  .details_main {
    width: 100%;
    height: var(--hero-phone-main-height, 33.33vw);
    margin-top: var(--details-margin-top, 0);
    overflow-x: hidden;
    font-family: Montserrat;

    .details_main_container {
      position: relative;
      width: 100%;
      height: 100%;
      padding-right: 0;
      overflow: hidden;

      .details_main_image-container {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: var(--hero-phone-position, absolute);

        .gradient {
          background-image: linear-gradient(
            75deg,
            #000 3.89%,
            transparent 94.59%
          );
          z-index: 1;
          position: absolute;
          width: 100%;
          height: 100%;
          display: var(--show-gradiant, block);
          /* border: 1px solid blue; */
        }
        img {
          position: relative;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-position: top;
          background-size: cover;
          z-index: 0;
        }
      }
      .details_main_content-container {
        position: var(--hero-phone-position, absolute);
        z-index: 2;
        overflow: hidden;
        height: 100%;
        display: flex;
        align-items: center;
        /* border: 1px solid blue; */

        .details_main_content-container_details {
          margin-top: 75px;
          margin-left: 5vw;

          .tags_container {
            width: 100%;
            height: -webkit-fit-content;
            height: -moz-fit-content;
            height: fit-content;
            display: flex;
            margin: 0;
            color: white;
            font-weight: 400;

            .tag_premium {
              display: flex;
              height: calc(
                1.8vw + var(--hero-phone-content-size-increase, 0vw)
              );
              width: 5.4%;
              background: #1a1d1e;
              color: white;
              padding: 0.4%;
              font-size: 15px;
              border: 2px solid #35393f;
              box-sizing: border-box;
              box-shadow: 0 5.8478px 5.8478px rgb(0 0 0 / 25%);
              border-radius: 5.8478px;
              margin-right: 0.9vw;
              font-size: calc(0.7vw + var(--tags-phone-size-increase, 0vw));
              text-align: center;
              align-items: center;
              justify-content: center;
              vertical-align: middle;
              line-height: calc(
                1.8vw + var(--hero-phone-content-size-increase, 0vw)
              );

              .check {
                width: calc(1vw + var(--tags-phone-size-increase, 0vw));
                height: calc(1vw + var(--tags-phone-size-increase, 0vw));
                margin: 0 0.3vw 0 0;
                background-repeat: no-repeat;
                background-size: contain;
              }
            }

            .tag_rating {
              display: flex;
              height: calc(
                1.8vw + var(--hero-phone-content-size-increase, 0vw)
              );
              width: 2.8%;
              background: #1a1d1e;
              border: 2px solid #35393f;
              padding: 0.4%;
              box-sizing: border-box;
              box-shadow: 0 5.8478px 5.8478px rgb(0 0 0 / 25%);
              border-radius: 5.8478px;
              margin-right: 0.9vw;
              font-size: calc(0.7vw + var(--tags-phone-size-increase, 0vw));
              text-align: center;
              align-items: center;
              justify-content: center;
              vertical-align: middle;
              line-height: calc(
                1.8vw + var(--hero-phone-content-size-increase, 0vw)
              );
            }
          }
          .title {
            width: 90%;
            display: inline-block;
            flex-direction: column;
            max-width: var(--title-phone-max-width, 15em);
            margin: 0;
            color: #fff;
            font-size: calc(
              2.5vw + var(--hero-phone-content-size-increase, 0vw)
            );
            font-style: normal;
            font-weight: 900;
            line-height: calc(
              3.5vw + var(--hero-phone-content-size-increase, 0vw)
            );
            letter-spacing: 0;
            text-align: left;
          }
          .general {
            width: 100%;
            font-style: normal;
            font-weight: 600;
            font-size: calc(
              1.1vw + var(--hero-phone-content-size-increase, 0vw)
            );
            line-height: calc(
              1.5vw + var(--hero-phone-content-size-increase, 0vw)
            );
            color: #fff;
            mix-blend-mode: normal;
            opacity: 0.4;

            .extra_genre {
              margin: 2px;
            }
            p {
              display: block;
              margin-block-start: 1em;
              margin-block-end: 1em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
            }
          }
          .description {
            width: 55%;
            font-style: normal;
            font-weight: 400;
            font-size: calc(
              1.1vw + var(--hero-phone-content-size-increase, 0vw)
            );
            line-height: calc(
              1.5vw + var(--hero-phone-content-size-increase, 0vw)
            );
            display: flex;
            align-items: center;
            color: #fff;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            text-transform: capitalize;
            word-wrap: break-word;
            text-overflow: ellipsis;
          }
          div {
            margin-bottom: calc(
              1.2vw + var(--hero-phone-content-size-increase, 0vw)
            );
          }
          .actions {
            height: auto;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            width: fit-content;
            display: flex;
            z-index: 2;

            .wrapper {
              display: flex;
              flex-direction: column;
              -webkit-animation: fadein 2s;
              animation: fadein 2s;

              .top_button_container {
                margin: 0;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;

                .play_trailer {
                  margin: 0.5rem;
                  width: -webkit-fit-content;
                  width: -moz-fit-content;
                  width: fit-content;
                  height: 40px;
                  font-size: 10px;
                  font-weight: 600;
                  min-width: 132px;
                  background-color: hsl(195, 7%, 10%);
                  color: white;
                  border: 1px solid gray;
                  font-size: 13px;
                  border-radius: 30px;
                }
                .subscribe_now {
                  margin: 0.5rem;
                  width: -webkit-fit-content;
                  width: -moz-fit-content;
                  width: fit-content;
                  height: 40px;
                  background: linear-gradient(180deg, #b61a09 -86.4%, #ff6d2e);

                  font-size: 10px;
                  font-weight: 600;
                  min-width: 132px;
                  /* background-color: tomato; */
                  color: white;
                  border: none;
                  font-size: 13px;
                  border-radius: 30px;
                }
              }
              .bottom_button_container {
                display: flex;
                align-items: flex-start;

                .share_button {
                  background: linear-gradient(180deg, #3b4046 9.38%, #2d3037);
                  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
                  border-radius: 50%;
                  border-style: none;
                  height: 2.5rem;
                  width: 2.5rem;
                  margin: 2vw 2vw 2vw 0.5rem;
                  position: relative;
                  cursor: pointer;

                  div {
                    display: flex;
                    justify-content: center;
                    padding-top: 2px;

                    p {
                      display: block;
                      margin-block-start: 1em;
                      margin-block-end: 1em;
                      margin-inline-start: 0px;
                      margin-inline-end: 0px;
                    }

                    .icon_name {
                      color: #fff;
                      position: absolute;
                      width: auto;
                      text-align: center;
                      top: 88%;
                      font-size: 10px;
                    }

                    .icon {
                      vertical-align: middle;
                      padding-top: 15%;
                      padding-right: 7%;
                      top: 50%;
                      left: 50%;
                      width: 80%;
                      height: 100%;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .details_content {
    margin-top: 0.5vh;
    margin-left: 0;

    .tabmenu {
      font-size: 1rem;
      line-height: 1.5;
      color: #7f7e86;
      padding-left: 0;

      #wrapper {
        display: flex;
      }

      .tabs {
        width: 100%;
        border-radius: 0.5rem;
        margin-top: 1.1rem;

        input[type="radio" i] {
          background-color: initial;
          cursor: default;
          appearance: auto;
          box-sizing: border-box;
          margin: 3px 3px 0px 5px;
          padding: initial;
          border: initial;
        }

        .tab_control {
          display: inline-block;
          border-bottom: 2px solid transparent;
          font-size: 1rem;
          padding: 0.6rem 1rem;
          cursor: pointer;
          transition: all 0.25s ease;
          font-weight: 600;
          color: #fff;
          /* border-bottom-color: #ff6d2e; */
        }

        /* .tab_control {
          font-weight: 600;
          color: #fff;
          border-bottom-color: #ff6d2e;
        } */

        .tab_content {
          border-top: 1px solid hsla(0, 0%, 89.8%, 0.2901960784313726);
          padding: calc(2vw + 1rem) 1rem 1rem 0;
          margin-left: 2rem;
          margin-top: -1px;

          .container {
            display: flex;
            flex-flow: row wrap;
            margin-left: 0;
            padding-left: 1rem;

            .cast_container {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-top: 30px;
              margin-right: 50px;
              width: -webkit-fit-content;
              width: -moz-fit-content;
              width: fit-content;

              img {
                border-radius: 8px;
                width: 6rem;
                height: 6rem;
              }

              .cast_title {
                color: #fff;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 16px;
                margin-top: 4px;
                margin-bottom: 10px;
                white-space: nowrap;
                align-self: start;
              }
            }
          }

          .details {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            width: 20vw;
            color: #fff;

            .details_column {
              display: flex;
              flex-direction: column;
              flex-basis: 50%;
              flex: 1;

              .details_column_title {
                line-height: 34px;
                opacity: 0.3;
                mix-blend-mode: normal;
              }

              .details_column_name {
                line-height: 34px;
                text-transform: capitalize;
              }
            }
          }
        }
      }
    }
  }
`;
