import { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  Button,
  InputAdornment,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@mui/styles";
import { navigate } from "@reach/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/logo.png";
import { axiosInstance } from "../../services";
import { userSchema } from "./userSchema";

const useStyles = makeStyles({
  root: {
    background: "black",
    height: "100%",
    width: "100%",
    margin: 50,
    paddingBottom: 50,
    width: 500,
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    border: "5px solid #fff",
  },
  logo: {
    width: 170,
    height: 170,
  },
  signIn: {
    fontFamily: "Lexend Deca",
    fontWeight: 400,
    fontSize: 64,
    color: "#fff",
  },
  login: {
    marginTop: 36,
    width: 150,
    height: 40,
    fontSize: 20,
  },
  visibilityIcon: {
    cursor: "pointer",
    fill: "#fff",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function LoginPage() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const userNotExistMessage = "Wrong username";
  const wrongPasswordMessage = "Wrong password";
  const requiredFieldMessage = "Field is required";

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    reValidateMode: "onSubmit",
    resolver: yupResolver(userSchema),
  });

  const onSubmit = async () => {
    try {
      const { data } = await axiosInstance.post("/users/login", {
        username,
        password,
      });
      localStorage.setItem("token", data.token);
      navigate("/admin");
    } catch (err) {
      clearErrors();
      if (err.response.data.message === "Cannot find user") {
        setError("username", { type: "custom", message: userNotExistMessage });
      } else {
        setError("password", { type: "custom", message: wrongPasswordMessage });
      }
    }
  };

  useEffect(() => {
    setValue("username", username);
  }, [username]);

  useEffect(() => {
    setValue("password", password);
  }, [password]);

  return (
    <Stack className={classes.root}>
      <p variant="h3" className={classes.signIn}>
        Sign In
      </p>
      <img src={logo} alt="logo" className={classes.logo} />
      <Stack mt={4} width="50%">
        <form
          className={classes.form}
          onSubmit={handleSubmit(() => onSubmit())}
        >
          <Stack width="100%">
            <TextField
              {...register("username")}
              variant="outlined"
              label="Username"
              error={Boolean(errors.username)}
              fullWidth
              onChange={(e) => {
                setUsername(e.target.value);
                if (e.target.value) {
                  clearErrors("username");
                } else {
                  setError("username", {
                    type: "required",
                    message: requiredFieldMessage,
                  });
                }
                if (password) {
                  clearErrors("password");
                }
              }}
            />
            {errors.username && (
              <Typography color="error" variant="subtitle2">
                {errors.username.message}
              </Typography>
            )}
          </Stack>
          <Stack width="100%" mt={3}>
            <TextField
              {...register("password")}
              variant="outlined"
              label="Password"
              type={showPassword ? "text" : "password"}
              error={Boolean(errors.password)}
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value) {
                  clearErrors("password");
                } else {
                  setError("password", {
                    type: "required",
                    message: requiredFieldMessage,
                  });
                }
              }}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showPassword ? (
                      <Visibility
                        className={classes.visibilityIcon}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <VisibilityOff
                        className={classes.visibilityIcon}
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )}
                  </InputAdornment>
                ),
              }}
            />
            {errors.password && (
              <Typography color="error" variant="subtitle2">
                {errors.password.message}
              </Typography>
            )}
          </Stack>
          <Button
            variant="outlined"
            className={classes.login}
            type="submit"
            disabled={Object.keys(errors).length > 0}
          >
            Sign In
          </Button>
        </form>
      </Stack>
    </Stack>
  );
}
