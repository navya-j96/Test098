import React from 'react';
import LoginForm from '../components/LoginForm';

const Login: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Login attempt with:', { email, password });
    // Here you would typically call your authentication service
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Login to your account</h1>
            <p className="mt-2 text-gray-600">Welcome back! Please enter your details.</p>
          </div>
          <LoginForm onSubmit={handleLogin} />
        </div>
      </div>
      
      {/* Right side - Image/Banner */}
      <div className="hidden md:block md:w-1/2 bg-blue-600">
        <div className="h-full flex items-center justify-center p-10">
          <div className="max-w-md text-white">
            <h2 className="text-4xl font-bold mb-6">Start your journey with us today</h2>
            <p className="text-lg opacity-90 mb-8">
              Join thousands of users who have already transformed their experience with our platform.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-500/30 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Easy Access</h3>
                <p className="text-sm opacity-90">Login once and access all your resources seamlessly.</p>
              </div>
              <div className="bg-blue-500/30 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Secure</h3>
                <p className="text-sm opacity-90">Your data is protected with industry-leading encryption.</p>
              </div>
              <div className="bg-blue-500/30 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Fast</h3>
                <p className="text-sm opacity-90">Optimized performance for quick access to your content.</p>
              </div>
              <div className="bg-blue-500/30 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-bold text-xl mb-2">Reliable</h3>
                <p className="text-sm opacity-90">99.9% uptime guarantee for uninterrupted service.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="User avatar" 
                className="w-12 h-12 rounded-full object-cover border-2 border-white"
              />
              <div>
                <p className="font-medium">"This platform has completely transformed how we work!"</p>
                <p className="text-sm opacity-75">Sarah Johnson, Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;