import { useForm } from 'react-hook-form';

const SearchForm = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    onSearch(data.ip);
    reset()
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
