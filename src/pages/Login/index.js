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

const useStyles = makeStyles((theme) => ({
  root: {
    background: "black",
    height: "100%",
    width: "100%",
    margin: 38,
    paddingBottom: 50,
    width: 500,
    borderRadius: 30,
    alignSelf: "center",
    alignItems: "center",
    border: "5px solid #6dd5fa",
    "&:hover": {
      border: "5px solid #fff",
    },
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 30,
    },
  },
  logo: {
    marginTop: -35,
    width: 170,
    height: 170,
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 100,
    },
  },
  "@keyframes fade": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  signIn: {
    padding: 25,
    fontFamily: "Lexend Deca",
    fontSize: 64,
    color: "#fff",
    background: "linear-gradient(to right, #2980b9, #6dd5fa, #ffffff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `$fade 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  login: {
    marginTop: 36,
    width: 150,
    height: 40,
    fontSize: 20,
    animation: `$fade 3000ms ${theme.transitions.easing.easeInOut}`,
    color: "#6dd5fa",
    border: "2px solid #6dd5fa",
    "&:hover": {
      color: "#fff",
      border: "2px solid #fff",
    },
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
}));

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
