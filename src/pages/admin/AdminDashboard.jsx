import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  isAdminAuthenticated, 
  logoutAdmin, 
  deleteNews,
  createNews,
  updateNews,
  uploadNewsImage,
  categories
} from '../../services/newsService';
import { useNews } from '../../context/NewsContext';
import RichContentEditor from '../../components/admin/RichContentEditor';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { loadAllNews, invalidateCache } = useNews();
  const [newsList, setNewsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const getLocalDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: [{ id: '1', type: 'text', content: '' }],
    category: categories[0],
    location: '',
    image: '',
    date: getLocalDate(),
    status: 'draft',
    showOnHome: false
  });

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin/login');
      return;
    }
    loadNews();
  }, [navigate]);

  const loadNews = async () => {
    try {
      const news = await loadAllNews();
      setNewsList(news);
    } catch (error) {
      console.error('Error loading news:', error);
      alert('Error al cargar las novedades');
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin/login');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          image: reader.result
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingNews) {
        await updateNews(editingNews.id, formData);
      } else {
        await createNews(formData);
      }
      
      // Invalidate cache to force refresh
      invalidateCache();
      
      resetForm();
      await loadNews();
    } catch (error) {
      console.error('Error saving news:', error);
      alert('Error al guardar la novedad');
    }
  };

  const handleEdit = (news) => {
    setEditingNews(news);
    
    // Convert legacy string content to blocks format
    let contentBlocks = news.content;
    if (typeof news.content === 'string') {
      contentBlocks = [{ id: '1', type: 'text', content: news.content }];
    } else if (!Array.isArray(news.content) || news.content.length === 0) {
      contentBlocks = [{ id: '1', type: 'text', content: '' }];
    }
    
    setFormData({
      title: news.title,
      summary: news.summary,
      content: contentBlocks,
      category: news.category,
      location: news.location || '',
      image: news.image || '',
      date: news.date,
      status: news.status,
      showOnHome: news.showOnHome || false
    });
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar esta novedad?')) {
      try {
        await deleteNews(id);
        // Invalidate cache to force refresh
        invalidateCache();
        await loadNews();
      } catch (error) {
        console.error('Error deleting news:', error);
        alert('Error al eliminar la novedad');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      summary: '',
      content: [{ id: '1', type: 'text', content: '' }],
      category: categories[0],
      location: '',
      image: '',
      date: getLocalDate(),
      status: 'draft',
      showOnHome: false
    });
    setEditingNews(null);
    setShowForm(false);
  };

  const formatDate = (dateString) => {
    // Parse date as local time by adding time component
    const [year, month, day] = dateString.split('-');
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('es-AR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Admin Header */}
      <header className="bg-gradient-to-r from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] border-b-2 border-corporate-red fixed top-0 left-0 right-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5">
          <div className="flex flex-row items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
              {/* Admin Badge */}
              <div className="hidden sm:block bg-corporate-red px-3 py-1.5 sm:px-4 sm:py-2 rounded-md shadow-md">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-.257-.257A6 6 0 1118 8zm-1.5 0a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.5 2.121l-1.06-1.061a1.5 1.5 0 112.12-2.121l1.061 1.06-2.121 2.122z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider">ADMIN</span>
                </div>
              </div>
              
              {/* Title Group */}
              <div className="leading-tight flex-1 min-w-0">
                <h1 className="font-display text-sm sm:text-lg lg:text-2xl font-bold text-white tracking-tight text-left truncate">
                  SERVIN · Panel Administrativo
                </h1>
                <p className="text-[9px] sm:text-[10px] md:text-xs text-gray-500 uppercase tracking-widest text-left truncate">Sistema Interno de Gestión</p>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center justify-end space-x-2 sm:space-x-3 flex-shrink-0">
              {/* Status Indicator */}
              <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 bg-green-900/30 border border-green-700/50 rounded-md">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-400 font-medium">En Línea</span>
              </div>
              
              {/* View Site */}
              <a
                href="/novedades"
                className="flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-[#2a2a2a] border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 rounded-lg transition-all duration-300 text-xs"
                title="Ver sitio público"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="hidden sm:inline text-xs font-medium">Ver Sitio</span>
              </a>
              
              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1.5 sm:space-x-2 bg-corporate-red hover:bg-red-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-display font-semibold transition-all duration-300 shadow-lg hover:shadow-red-900/50 text-xs sm:text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:inline">Salir</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-8">
        {/* Stats Cards Mejoradas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-10">
          {/* Total */}
          <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-800 hover:border-corporate-red/50 transition-all duration-300 hover:shadow-2xl hover:shadow-corporate-red/10">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-corporate-red/10 rounded-xl p-3 group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-7 h-7 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider bg-[#0a0a0a] px-3 py-1 rounded-full">Total</span>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white mb-1">{newsList.length}</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Publicaciones totales</p>
            </div>
          </div>

          {/* Publicadas */}
          <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-800 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-green-500/10 rounded-xl p-3 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-7 h-7 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.879a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider bg-[#0a0a0a] px-3 py-1 rounded-full">Publicadas</span>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-green-400 mb-1">
                {newsList.filter((n) => n.status === 'published').length}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Visibles en el sitio</p>
            </div>
          </div>

          {/* Destacadas Home */}
          <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-800 hover:border-corporate-red/50 transition-all duration-300 hover:shadow-2xl hover:shadow-corporate-red/10">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-corporate-red/10 rounded-xl p-3 group-hover:bg-corporate-red/20 transition-colors">
                <svg className="w-7 h-7 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.709c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider bg-[#0a0a0a] px-3 py-1 rounded-full">Home</span>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-corporate-red mb-1">
                {newsList.filter((n) => n.showOnHome).length}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">Destacadas</p>
            </div>
          </div>

          {/* Borradores */}
          <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-gray-800 hover:border-yellow-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-yellow-500/10 rounded-xl p-3 group-hover:bg-yellow-500/20 transition-colors">
                <svg className="w-7 h-7 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2 2a1 1 0 101.414-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-600 uppercase tracking-wider bg-[#0a0a0a] px-3 py-1 rounded-full">Borradores</span>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-yellow-500 mb-1">
                {newsList.filter((n) => n.status === 'draft').length}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium">En modo borrador</p>
            </div>
          </div>

          {/* Nueva Novedad CTA */}
          <div className="group bg-gradient-to-br from-[#1a1a1a] to-[#141414] rounded-xl sm:rounded-2xl border-2 border-dashed border-gray-800 hover:border-corporate-red transition-all duration-300 overflow-hidden relative hover:shadow-2xl hover:shadow-corporate-red/10">
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full h-full p-5 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 text-gray-500 hover:text-corporate-red transition-colors duration-300"
            >
              <div className="bg-corporate-red/10 rounded-xl p-3 sm:p-4 group-hover:bg-corporate-red/20 transition-colors group-hover:scale-110 duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-corporate-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="text-center">
                <span className="block font-black text-base sm:text-lg text-white mb-1">Crear Nueva</span>
                <span className="text-xs sm:text-sm text-gray-500">Agregar publicación</span>
              </div>
            </button>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] rounded-xl shadow-2xl border border-gray-800 overflow-hidden mb-8">
            {/* Form Header */}
            <div className="bg-gradient-to-r from-corporate-red to-red-700 px-8 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {editingNews ? 'Editar Novedad' : 'Nueva Novedad'}
                    </h2>
                    <p className="text-xs text-white/80 mt-1">
                      {editingNews ? 'Modifica los campos necesarios y guarda los cambios' : 'Completa el formulario para crear una nueva publicación'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetForm}
                  className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-colors backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8 space-y-6">
              {/* Section: Información Básica */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-corporate-red/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm6 6H7v2h6v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">Información Básica</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  {/* Title */}
                  <div className="md:col-span-2">
                    <label className="flex items-center space-x-2 text-xs sm:text-sm font-display font-semibold text-gray-300 mb-2">
                      <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                      <span>Título de la Novedad</span>
                      <span className="text-corporate-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="Ingrese un título descriptivo..."
                      className="w-full px-3.5 py-3 bg-[#0a0a0a] border border-gray-800 text-white placeholder-gray-600 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all text-sm"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="flex items-center space-x-2 text-xs sm:text-sm font-display font-semibold text-gray-300 mb-2">
                      <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                      </svg>
                      <span>Categoría</span>
                      <span className="text-corporate-red">*</span>
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-[#0a0a0a] border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all appearance-none cursor-pointer text-sm"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                      required
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="flex items-center space-x-2 text-xs sm:text-sm font-display font-semibold text-gray-300 mb-2">
                      <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>Fecha de Publicación</span>
                      <span className="text-corporate-red">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-3.5 py-3 bg-[#0a0a0a] border border-gray-800 text-white rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all [color-scheme:dark] text-sm"
                      style={{
                        colorScheme: 'dark'
                      }}
                      required
                    />
                  </div>

                  {/* Location (City/Address) */}
                  <div className="md:col-span-2">
                    <label className="flex items-center space-x-2 text-xs sm:text-sm font-display font-semibold text-gray-300 mb-2">
                      <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 019.9 0 7 7 0 010 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Ubicación</span>
                      <span className="text-gray-500 text-[10px] sm:text-xs font-normal">(ciudad / planta / dirección)</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Ej: Bahía Blanca · Planta X / Bariloche / Neuquén"
                      className="w-full px-3.5 py-3 bg-[#0a0a0a] border border-gray-800 text-white placeholder-gray-600 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all text-sm"
                    />
                  </div>

                  {/* Summary */}
                  <div className="md:col-span-2">
                    <label className="flex items-center space-x-2 text-xs sm:text-sm font-display font-semibold text-gray-300 mb-2">
                      <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8h8V6z" clipRule="evenodd" />
                      </svg>
                      <span>Resumen Breve</span>
                      <span className="text-corporate-red">*</span>
                    </label>
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Describe brevemente el contenido de la novedad..."
                      className="w-full px-3.5 py-3 bg-[#0a0a0a] border border-gray-800 text-white placeholder-gray-600 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all resize-none text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Section: Contenido */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-corporate-red/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">Contenido Completo</h3>
                </div>
                
                <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-3 sm:p-4">
                  <RichContentEditor
                    value={formData.content}
                    onChange={(blocks) => setFormData({...formData, content: blocks})}
                  />
                </div>
              </div>

              {/* Section: Imagen */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-corporate-red/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">Imagen Destacada</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-3 sm:gap-0">
                    <label className="flex-1">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="block w-full text-sm text-gray-400 
                          file:mr-4 file:py-2.5 file:px-5 
                          file:rounded-lg file:border-0 
                          file:text-sm file:font-semibold 
                          file:bg-corporate-red file:text-white 
                          hover:file:bg-red-700 
                          file:transition-colors file:cursor-pointer
                          cursor-pointer"
                      />
                    </label>
                    {formData.image && (
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, image: ''})}
                        className="px-4 py-2.5 bg-red-900/30 border border-red-700/50 text-red-400 rounded-lg hover:bg-red-900/50 transition-colors text-sm font-medium"
                      >
                        Quitar Imagen
                      </button>
                    )}
                  </div>
                  
                  {formData.image && (
                    <div className="relative group">
                      <img 
                        src={formData.image} 
                        alt="Preview" 
                        className="max-h-64 rounded-lg border border-gray-800 shadow-lg" 
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-medium">Imagen seleccionada</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-3 bg-[#141414] text-gray-500 uppercase tracking-wider">o ingresa una URL</span>
                    </div>
                  </div>
                  
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://ejemplo.com/imagen.jpg"
                    className="w-full px-3.5 py-3 bg-[#0a0a0a] border border-gray-800 text-white placeholder-gray-600 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-corporate-red transition-all text-sm"
                  />
                </div>
              </div>

              {/* Section: Publicación */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-corporate-red/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">Estado de Publicación</h3>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <label className="flex-1 relative cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="draft"
                      checked={formData.status === 'draft'}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="p-3.5 sm:p-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-lg peer-checked:border-yellow-600 peer-checked:bg-yellow-900/10 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-yellow-900/30 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-display font-bold text-white text-sm">Borrador</div>
                          <div className="text-[11px] text-gray-400">Guardar sin publicar</div>
                        </div>
                      </div>
                    </div>
                  </label>
                  
                  <label className="flex-1 relative cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value="published"
                      checked={formData.status === 'published'}
                      onChange={handleChange}
                      className="sr-only peer"
                    />
                    <div className="p-3.5 sm:p-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-lg peer-checked:border-green-600 peer-checked:bg-green-900/10 transition-all">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-display font-bold text-white text-sm">Publicar</div>
                          <div className="text-[11px] text-gray-400">Visible al público</div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Section: Mostrar en Inicio */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-corporate-red/20 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-white">Visibilidad en Home</h3>
                </div>
                
                <label className="relative cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.showOnHome}
                    onChange={(e) => setFormData({...formData, showOnHome: e.target.checked})}
                    className="sr-only peer"
                  />
                  <div className="p-4 bg-[#0a0a0a] border-2 border-gray-800 rounded-lg peer-checked:border-corporate-red peer-checked:bg-corporate-red/5 transition-all">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center peer-checked:bg-corporate-red/20">
                        <svg className="w-6 h-6 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="font-display font-bold text-white text-sm sm:text-base mb-1">Mostrar en Página de Inicio</div>
                        <div className="text-[11px] sm:text-sm text-gray-400">Esta noticia aparecerá en el carrusel de novedades del Home</div>
                      </div>
                      <div className="w-14 h-7 bg-gray-700 rounded-full p-1 transition-colors peer-checked:bg-corporate-red relative">
                        <div className={`w-5 h-5 bg-white rounded-full transition-transform ${formData.showOnHome ? 'translate-x-7' : 'translate-x-0'}`}></div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-800">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 sm:px-8 py-3 border-2 border-gray-800 text-gray-300 rounded-lg font-display font-semibold hover:bg-[#0a0a0a] hover:border-gray-700 transition-all text-sm"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-corporate-red to-red-700 text-white rounded-lg font-display font-semibold hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-red-900/50 flex items-center space-x-2 text-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{editingNews ? 'Actualizar' : 'Crear'} Novedad</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* News List */}
        <div className="bg-[#141414] rounded-lg shadow-2xl border border-gray-800">
          <div className="p-6 border-b border-gray-800 flex items-center justify-between">
            <h2 className="font-display text-base sm:text-lg md:text-xl font-bold text-white">
              Todas las Novedades ({newsList.length})
            </h2>
            <span className="hidden sm:inline text-xs text-gray-500">Vista compacta para móviles</span>
          </div>

          {/* Tabla escritorio */}
          <div className="overflow-x-auto hidden md:block">
            <table className="w-full">
              <thead className="bg-[#0a0a0a]">
                <tr>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-gray-500 uppercase tracking-wider">
                    Título
                  </th>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-gray-500 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-gray-500 uppercase tracking-wider">
                    Ubicación
                  </th>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-gray-500 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-gray-500 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-right text-[10px] sm:text-xs font-display font-semibold text-gray-500 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-[#141414] divide-y divide-gray-800">
                {newsList.map((news) => (
                  <tr key={news.id} className="hover:bg-[#0a0a0a] transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {news.image && (
                          <img src={news.image} alt="" className="w-12 h-12 rounded object-cover mr-3" />
                        )}
                        <div>
                          <div className="font-display font-semibold text-white">
                            {news.title}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            {news.summary.substring(0, 60)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-[10px] sm:text-xs leading-5 font-semibold rounded-full bg-corporate-red/10 text-corporate-red">
                        {news.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-xs sm:text-sm text-gray-300">
                        {news.location || '—'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-gray-400">
                      {formatDate(news.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-[10px] sm:text-xs leading-5 font-semibold rounded-full ${
                        news.status === 'published' 
                          ? 'bg-green-900/50 text-green-300' 
                          : 'bg-yellow-900/50 text-yellow-300'
                      }`}>
                        {news.status === 'published' ? 'Publicada' : 'Borrador'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                      <button
                        onClick={() => handleEdit(news)}
                        className="text-corporate-red hover:text-red-400 mr-4"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(news.id)}
                        className="text-corporate-red hover:text-red-400"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Tarjetas móviles */}
          <div className="md:hidden divide-y divide-gray-800">
            {newsList.map((news) => (
              <div key={news.id} className="p-5 bg-[#0f0f0f]">
                <div className="flex items-start gap-3">
                  {news.image && (
                    <img src={news.image} alt="" className="w-16 h-16 rounded object-cover flex-shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="px-2.5 py-1 text-[10px] font-semibold rounded-full bg-corporate-red/10 text-corporate-red uppercase tracking-wide">
                        {news.category}
                      </span>
                      <span className="text-[11px] text-gray-500">{formatDate(news.date)}</span>
                    </div>
                    {news.location && (
                      <div className="mt-1 text-[11px] text-gray-300">
                        <span className="text-gray-500 mr-1">Ubicación:</span>
                        {news.location}
                      </div>
                    )}
                    <div className="text-white font-semibold text-sm leading-tight line-clamp-2">{news.title}</div>
                    <div className="text-xs text-gray-400 mt-1 line-clamp-2">{news.summary.substring(0, 80)}...</div>
                    <div className="flex items-center gap-2 mt-3">
                      <span className={`px-2 py-1 text-[10px] font-semibold rounded-full ${news.status === 'published' ? 'bg-green-900/50 text-green-300' : 'bg-yellow-900/50 text-yellow-300'}`}>
                        {news.status === 'published' ? 'Publicada' : 'Borrador'}
                      </span>
                      {news.showOnHome && (
                        <span className="px-2 py-1 text-[10px] font-semibold rounded-full bg-corporate-red/20 text-corporate-red">Home</span>
                      )}
                    </div>
                    <div className="flex gap-3 mt-4 text-xs font-semibold">
                      <button
                        onClick={() => handleEdit(news)}
                        className="text-corporate-red hover:text-red-400"
                      >
                        Editar
                      </button>
                      <span className="text-gray-700">|</span>
                      <button
                        onClick={() => handleDelete(news.id)}
                        className="text-corporate-red hover:text-red-400"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {newsList.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <p className="text-gray-400">No hay novedades creadas</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-4 text-corporate-red font-display font-semibold hover:text-red-400"
                >
                  Crear la primera novedad
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
