import { Container, TextField, styled } from "@mui/material";
import Button from "./Ul/Button"; // Убедитесь, что путь правильный
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { signUp } from "../store/auth/authThunk"; // Убедитесь, что путь правильный
import { NavLink } from "react-router-dom";

const INPUT_ARRAY = [
  {
    name: "firstName",
    label: "Имя",
    type: "text",
  },
  {
    name: "lastName",
    label: "Фамилия",
    type: "text",
  },
  {
    name: "phoneNumber",
    label: "Номер телефона",
    type: "tel",
  },
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

const schema = yup
  .object({
    firstName: yup.string().required("Заполни все поля"),
    lastName: yup.string().required("Заполни все поля"),
    phoneNumber: yup.string().required("Заполни все поля"),
    email: yup
      .string()
      .email("Неверный формат email")
      .required("Заполни все поля"),
    password: yup
      .string()
      .min(6, "Минимум 6 символов")
      .max(16, "Максимум 16 символов")
      .required("Заполни все поля"),
  })
  .required();

const SignUp = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    dispatch(signUp(data));
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
            {...register(item.name)}
          />
        ))}
        <Button type="submit" variant="contained" size="large">
          Регистрация
        </Button>
        <NavLink to="/signin">Войти</NavLink> {/* Используйте абсолютный путь */}
      </FormContainer>
    </Container>
  );
};

export default SignUp;

const FormContainer = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  border: "1px solid",
  width: "fit-content",
  padding: "20px",
}));
