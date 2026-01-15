import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../services/newsService';

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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-corporate-red/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-corporate-red/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-corporate-red/10 border border-corporate-red/30 backdrop-blur-md rounded-xl p-4 mb-6">
            <svg className="w-12 h-12 sm:w-14 sm:h-14 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Acceso Restringido
          </h1>
          <p className="text-white/60 text-sm sm:text-base">
            Sistema de administración
          </p>
        </div>

        {/* Login Card - Mejorado */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-2xl shadow-2xl border border-white/10 p-8 sm:p-10 backdrop-blur-sm">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 text-center">
            Iniciar Sesión
          </h2>
          <p className="text-white/40 text-xs sm:text-sm text-center mb-8">
            Ingrese sus credenciales de administrador
          </p>

          {error && (
            <div className="bg-corporate-red/20 border border-corporate-red/50 text-white p-4 rounded-lg mb-6 flex items-start gap-3">
              <svg className="w-5 h-5 text-corporate-red flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username/Email */}
            <div>
              <label htmlFor="username" className="block text-xs sm:text-sm font-display font-semibold text-white mb-2.5">
                Usuario / Email
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-white/20 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all duration-300 text-white placeholder-white/40"
                placeholder="Ingrese su usuario"
                required
                autoFocus
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-xs sm:text-sm font-display font-semibold text-white mb-2.5">
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3.5 bg-[#0a0a0a] border border-white/20 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all duration-300 text-white placeholder-white/40"
                placeholder="Ingrese su contraseña"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-corporate-red to-red-700 hover:from-red-700 hover:to-red-800 text-white font-display font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-corporate-red/30 mt-8"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verificando...
                </span>
              ) : (
                'Ingresar'
              )}
            </button>
          </form>
        </div>

        {/* Back to Site */}
        <div className="mt-8 text-center">
          <a 
            href="/"
            className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors duration-300 inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
