export const handleChange = ({ e, setValues, values }) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value,
  });
};
