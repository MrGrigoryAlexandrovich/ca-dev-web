import * as yup from "yup";

export const userSchema = yup.object().shape({
  username: yup.string().required("Field is required"),
  password: yup.string().required("Field is required"),
});
