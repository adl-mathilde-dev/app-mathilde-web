import { importShared } from './__federation_fn_import-BKb1h4mk.js';

const {useState,useEffect} = await importShared('react');

const usePasswordValidation = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validations, setValidations] = useState({
    hasMinLength: false,
    hasNumber: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialChar: false
  });
  useEffect(() => {
    setValidations({
      hasMinLength: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  }, [password]);
  const isPasswordValid = () => {
    return password.trim() && confirmPassword.trim() && password === confirmPassword && Object.values(validations).every((v) => v);
  };
  const showError = () => {
    return !isPasswordValid() && password.trim() && confirmPassword.trim();
  };
  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showError,
    validations
  };
};

export { usePasswordValidation as u };
