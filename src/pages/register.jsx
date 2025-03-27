import RegistrationForm from '../components/form';

function Register() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default Register;
