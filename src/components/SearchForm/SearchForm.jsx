import { useState } from 'react';
import { useForm } from 'react-hook-form';

// const myIp = "176.38.11.175"
const SearchForm = () => {
  const [inputValue, setInputValue] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data.ip);
    setInputValue(data.ip);
    console.log(inputValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('ip', {
          required: 'IP address is required',
          pattern: {
            value: /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/,
            message: 'Please enter a valid IP address',
          },
        })}
        placeholder="Enter IP address"
      />
      {errors.ip && <span>{errors.ip.message}</span>}
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
