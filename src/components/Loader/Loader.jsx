import { Oval } from 'react-loader-spinner';

const Loader = () => {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <Oval
      height={150}
      width={150}
      color="rgb(71, 28, 169)"
      wrapperStyle={wrapperStyles}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="rgb(75, 42, 153)"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export default Loader;
