import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../utils/newsManager';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      const result = loginAdmin(formData.username, formData.password);
      
      if (result.success) {
        navigate('/admin/dashboard');
      } else {
        setError(result.error);
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-corporate-dark via-corporate-dark to-corporate-red/20 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6">
            <svg className="w-16 h-16 text-corporate-accent mx-auto" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
            Panel de Administración
          </h1>
          <p className="text-white/70 text-xs sm:text-sm">
            SERVIN INGENIERÍA S.A.
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-corporate-black mb-6 text-center">
            Iniciar Sesión
          </h2>

          {error && (
            <div className="bg-corporate-red border-l-4 border-corporate-red text-corporate-accent p-4 rounded mb-6">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                Usuario
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-transparent transition-all duration-300"
                placeholder="Ingrese su usuario"
                required
                autoFocus
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-transparent transition-all duration-300"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-corporate-red text-white font-display font-semibold py-3 px-6 rounded-lg hover:bg-corporate-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Iniciando sesión...
                </span>
              ) : (
                'Ingresar'
              )}
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 pt-6 border-t border-corporate-gray-200">
            <p className="text-[10px] sm:text-xs text-corporate-gray-500 text-center">
              Credenciales por defecto: <br />
              <span className="font-mono bg-corporate-gray-100 px-2 py-1 rounded">admin / servin2025</span>
            </p>
          </div>
        </div>

        {/* Back to Site */}
        <div className="mt-6 text-center">
          <a 
            href="/"
            className="text-white/70 hover:text-white text-xs sm:text-sm transition-colors duration-300 inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al sitio web
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
