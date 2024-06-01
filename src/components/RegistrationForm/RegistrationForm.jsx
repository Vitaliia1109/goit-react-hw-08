import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Username
          <Field className={css.inputU} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <Field className={css.inputE} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <Field className={css.inputP} type="password" name="password" />
        </label>
              <button className={css.btn} type="submit">Register</button>
      </Form>
    </Formik>
  );
}
