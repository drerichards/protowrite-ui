export const validateForm = (formData, setErrors) => {
  let newErrors = {};

  if (!formData.username) {
    newErrors.username = "Name is required";
  }

  if (!formData.email) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  if (!formData.password) {
    newErrors.password = "Password confirmation is required";
  } else if (formData.password !== formData.password2) {
    newErrors.password = "Entered passwords do not match ";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
