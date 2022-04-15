import styled from "styled-components";

const ShowCss = styled.div`
  position: absolute;
  width: 100%;
  bottom: 70px;
  height: 40%;
  overflow: auto;

  .ant-collapse {
    border: none;
    background: #282c34;

    .ant-collapse-header {
      border: none;
      color: white;
    }

    .ant-collapse-item {
      background: #434752;
      border-radius: 32px;
      border: 22px solid #2b2f38;
    }

    .ant-collapse-content {
      border: none;
      background: #2b2f38;

      .ant-radio-wrapper, .ant-checkbox-wrapper {
        color: white;
      }
    }
  }
`

export default ShowCss;