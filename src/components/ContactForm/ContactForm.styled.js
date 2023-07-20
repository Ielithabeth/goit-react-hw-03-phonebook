import { Form, ErrorMessage } from "formik";
import styled from "styled-components";

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 40px;

  button {
    margin-top: 20px;

    width: 200px;
    height: 36px;

    border-radius: 18px;
  }
`

export const Error = styled(ErrorMessage)`
  margin-left: 8px;
  font-size: 8px;
`