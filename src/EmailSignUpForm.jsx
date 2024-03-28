import { useForm } from "react-hook-form";
import "./EmailSignUpForm.css";
import Button from "./Button";

function EmailSignUpForm({ togglePage }) {
  const {
    label,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleError = (errors) => {};

  const onSubmit = () => {
    togglePage();
  };

  const registerOptions = {
    email: {
      required: "Email required",
      validate: {
        matchPattern: (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "Valid email required",
      },
    },
  };

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit, handleError)}>
      {/* <label htmlFor="email">Email:</label> */}
      <div className="input-text">
        <label className="email-label">Email address: </label>
        <small className="not-valid">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <input
        className={errors?.email ? "invalid-input" : "valid-input"}
        placeholder="email@company.com"
        type="text"
        name="email"
        // onInvalid={(e) => e.target.setCustomValidity("invalid email")}
        {...register("email", registerOptions.email)}
      />
      <Button text="Subscribe to monthly newsletter" />
      {/* <button onClick={handleClick}>Subscribe to monthly newsletter</button> */}
    </form>
  );
}

export default EmailSignUpForm;
