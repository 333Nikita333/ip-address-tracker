import { useForm } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
import { Button, Form, Input } from './SearchForm.styled';

const SearchForm = ({ onSearch }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    onSearch(data.ip);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
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
      <Button type="submit">
        <FaChevronRight color="#fff" size={15} />
      </Button>
    </Form>
  );
};

export default SearchForm;
