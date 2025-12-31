import React, { useState } from 'react';
import { User, Lock, AlertCircle } from 'lucide-react';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!password) {
      setError('Please enter your password');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(email, password);
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg px-8 pt-8 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        
        {error && (
          <div className="mb-4 flex items-center p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        )}
        
        <div className="mb-6 relative">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="px-3 py-2 text-gray-500">
              <User className="h-5 w-5" />
            </span>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-3 text-gray-700 focus:outline-none"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6 relative">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-gray-700 text-sm font-semibold" htmlFor="password">
              Password
            </label>
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <span className="px-3 py-2 text-gray-500">
              <Lock className="h-5 w-5" />
            </span>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-3 text-gray-700 focus:outline-none"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <span className="ml-2 text-sm text-gray-700">Remember me</span>
          </label>
        </div>
        
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition-all duration-200 flex justify-center ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Sign In'}
          </button>
          
          <div className="flex items-center my-4">
            <div className="flex-1 border-t border-gray-300"></div>
            <div className="px-4 text-sm text-gray-500">or continue with</div>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          <div className="flex gap-2">
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#EA4335"
                  d="M12 5c1.617 0 3.101.554 4.256 1.479l3.126-3.126C17.243 1.272 14.776 0 12 0 7.392 0 3.397 2.6 1.386 6.41l3.202 2.488C5.397 6.5 8.3 5 12 5z"
                />
                <path
                  fill="#4285F4"
                  d="M23.896 13.502C23.96 12.867 24 12.228 24 11.5c0-.789-.07-1.539-.194-2.26H12v4.642h6.774c-.293 1.554-1.174 2.876-2.502 3.758l3.143 2.439c1.835-1.688 2.899-4.174 2.899-7.076z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.418 14.257c-.115-.265-.215-.537-.301-.813L1.386 16.09C2.7 19.45 6.068 22 12 22c2.835 0 5.21-1.206 6.94-2.661l-3.143-2.439c-.866.587-1.971.935-3.797.935-3.704 0-6.846-2.497-7.946-5.859l-3.636.281z"
                />
                <path
                  fill="#34A853"
                  d="M12 23.5c3.834 0 7.01-1.151 9.338-3.109l-3.143-2.439c-.866.587-1.979.935-3.805.935-3.704 0-6.846-2.497-7.946-5.859l-3.636.281C5.147 18.756 8.386 23.5 12 23.5z"
                />
              </svg>
              Google
            </button>
            <button
              type="button"
              className="flex-1 flex items-center justify-center gap-2 bg-[#1877F2] text-white font-medium py-2 px-4 rounded-lg hover:bg-[#166FE5] transition-all duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-5.8-4.703-10.503-10.503-10.503S3.022 6.273 3.022 12.073c0 5.242 3.84 9.585 8.852 10.373v-7.337h-2.663v-3.036h2.663V9.87c0-2.63 1.567-4.083 3.962-4.083 1.148 0 2.349.205 2.349.205v2.584h-1.323c-1.302 0-1.71.808-1.71 1.636v1.962h2.911l-.465 3.036h-2.446v7.337c5.012-.788 8.851-5.131 8.851-10.373z" />
              </svg>
              Facebook
            </button>
          </div>
        </div>
      </form>
      
      <p className="text-center text-gray-600 text-sm">
        Don't have an account?{' '}
        <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;