import { Button, TextField, Container, styled } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { signInAsyns } from "../store/auth/authThunk";

const INPUT_ARRAY = [
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Пароль",
    type: "password",
  },
];

const SignIn = () => {

    const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const submitHandler = (data) => {
    
    dispatch(signInAsyns(data))
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(submitHandler)}>
        {INPUT_ARRAY.map((item) => (
          <TextField
            key={item.name}
            placeholder={item.label}
            label={item.label}
            type={item.type}
            error={!!errors[item.name]}
            helperText={errors[item.name]?.message}
            {...register(item.name, { required: true })}
          />
        ))}
        <Button type="submit" variant="contained" size="large">
          Войти
        </Button>
        <NavLink to="/signup">Регистрация</NavLink>
      </FormContainer>
    </Container>
  );
};

export default SignIn;

const FormContainer = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  border: "1px solid",
  width: "fit-content",
  padding: "20px",
}));
