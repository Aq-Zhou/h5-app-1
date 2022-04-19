import styled from "styled-components";

// const ShowCss = styled.div`
//   position: absolute;
//   width: 100%;
//   bottom: 70px;
//   height: 40%;
//   overflow: auto;
//
//
//
//   .ant-collapse > .ant-collapse-item:last-child > .ant-collapse-header {
//     border-radius: 12px;
//
//   }
//
//   .ant-collapse {
//     border: none;
//     background: #282c34;
//
//     .btncss {
//       border: 1px solid;
//     }
//
//     .ant-collapse-header {
//       border: none;
//       border-radius: 12px;
//       color: white;
//
//     }
//
//     .ant-collapse-item {
//       background: #434752;
//       display: flex;
//       flex-direction: column;
//       margin: 20px;
//       border-radius: 12px;
//       border: none;
//       &.ant-collapse-item-active {
//
//         &.antPanel {
//           border-radius: 12px;
//           border: 1px solid white;
//         }
//
//         &.ant-collapse-no-arrow {
//           &.antCo {
//             border: 1px white solid;
//             .ant-collapse-content-box {
//               display: none;
//             }
//           }
//         }
//       }
//
//     }
//
//
//     .ant-collapse-content {
//       border: none;
//       background: #2b2f38;
//
//
//
//       .ant-radio-wrapper, .ant-checkbox-wrapper {
//         color: white;
//
//       }
//     }
//   }
// `

const Showing = styled.div`
  position: absolute;
  width: 100%;
  height: 40%;
  bottom: 70px;
  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .collapseClass {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: rgb(43, 47, 56);
    border: none;

    .ant-collapse-item {
      border: none;
      background-color: rgb(67, 71, 82);
      border-radius: 12px;

      &.ant-collapse-item-active {

        &.antPanel {
          border-radius: 12px;
          border: 1px solid white;
        }

        &.ant-collapse-no-arrow {
          &.antCo {
            border: 1px white solid;

            .ant-collapse-content-box {
              display: none;
            }
          }
        }
      }

      .ant-collapse-header {
        color: white;
      }

      .ant-collapse-content {
        background-color: rgb(43, 47, 56);
        border: none;
        border-radius: 12px;

        .ant-collapse-content-box {
          background-color: rgb(67, 71, 82);
          border-radius: 0 0 12px 12px;
          color: white;
        }
      }

    }

  }
  
  .ant-btn {
    border: none;
    width: 316px;
    height: 46px;
    background: rgb(67, 71, 82);
    margin: 10px 0 10px 0;
    border-radius: 12px;

  }

`

export default Showing;