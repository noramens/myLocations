import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const useForm = validate => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  const reset = () => setValues({});
  const handleChange = event => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return {
    handleChange,
    values,
    errors,
    reset,
    setValues
  };
};

useForm.propTypes = {
  validate: PropTypes.func.isRequired
};

export default useForm;
