const Error = ({ message }) => {
  return <div className='bg-red-500 text-white p-4'> {message}</div>;
};

const Success = ({ message }) => {
  return <div className='bg-green-500 text-white p-4'> {message}</div>;
};

const UIMessage = ({ messageType, message }) => {
  {
    return messageType === 'error' ? (
      <Error message={message} />
    ) : (
      <Success message={message} />
    );
  }
};

export default UIMessage;
