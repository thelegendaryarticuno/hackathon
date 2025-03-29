import React from 'react';
import { Helmet } from 'react-helmet';
import RegistrationForm from '../components/form';

function Register() {
  return (
    <>
      <Helmet>
        <title>Register | Hackorate</title>
        <meta name="description" content="Register for Hackorate - Join our exciting hackathon and showcase your skills. Complete the registration form to participate and compete for prizes worth ₹7,000+" />
        <meta name="keywords" content="hackathon registration, hackorate signup, coding competition registration, tech event registration" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Register for Hackorate" />
        <meta property="og:description" content="Register for Hackorate - Join our exciting hackathon and compete for prizes worth ₹7,000+" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Register for Hackorate" />
        <meta name="twitter:description" content="Register for Hackorate - Join our exciting hackathon and compete for prizes worth ₹7,000+" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <RegistrationForm />
        </div>
      </div>
    </>
  );
}

export default Register;
