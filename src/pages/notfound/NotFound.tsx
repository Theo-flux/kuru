import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 text-center">
      <h1 className="text-8xl font-bold text-cerise">404</h1>
      <p className="text-2xl mt-4">Oops! The page you're looking for doesn't exist.</p>
      <button onClick={() => navigate('/')} className="btn btn-link btn-primary">
        Go Back Home
      </button>
    </div>
  );
};

export default ErrorPage;
