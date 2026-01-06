import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  isAdminAuthenticated, 
  logoutAdmin, 
  getAllNewsAdmin, 
  deleteNews,
  createNews,
  updateNews,
  categories 
} from '../../utils/newsManager';
import RichContentEditor from '../../components/admin/RichContentEditor';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [newsList, setNewsList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    content: [{ id: '1', type: 'text', content: '' }],
    category: categories[0],
    image: '',
    date: new Date().toISOString().split('T')[0],
    status: 'draft'
  });

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      navigate('/admin/login');
      return;
    }
    loadNews();
  }, [navigate]);

  const loadNews = () => {
    const news = getAllNewsAdmin();
    setNewsList(news);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingNews) {
      updateNews(editingNews.id, formData);
    } else {
      createNews(formData);
    }
    
    resetForm();
    loadNews();
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
      image: news.image || '',
      date: news.date,
      status: news.status
    });
    setShowForm(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = (id) => {
    if (window.confirm('¿Está seguro de eliminar esta novedad?')) {
      deleteNews(id);
      loadNews();
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      summary: '',
      content: [{ id: '1', type: 'text', content: '' }],
      category: categories[0],
      image: '',
      date: new Date().toISOString().split('T')[0],
      status: 'draft'
    });
    setEditingNews(null);
    setShowForm(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-AR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-corporate-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-corporate-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-corporate-black">
                Panel de Administración
              </h1>
              <p className="text-xs sm:text-sm text-corporate-gray-600">Gestión de Novedades</p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-corporate-gray-600 hover:text-corporate-black transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <button
                onClick={handleLogout}
                className="bg-corporate-red text-white px-4 py-2 rounded-lg font-display font-semibold hover:bg-corporate-accent transition-colors duration-300"
              >
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-corporate-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-corporate-gray-600 mb-1">Total</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-corporate-black">{newsList.length}</p>
              </div>
              <div className="w-12 h-12 bg-corporate-red/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-corporate-red" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-corporate-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-corporate-gray-600 mb-1">Publicadas</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-green-600">
                  {newsList.filter(n => n.status === 'published').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-corporate-gray-200">
            <div className="flex items-center">
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-corporate-gray-600 mb-1">Borradores</p>
                <p className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-yellow-600">
                  {newsList.filter(n => n.status === 'draft').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-corporate-gray-200">
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full h-full flex flex-col items-center justify-center text-corporate-red hover:text-corporate-accent transition-colors duration-300"
            >
              <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="font-display font-semibold">Nueva Novedad</span>
            </button>
          </div>
        </div>

        {/* Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-sm border border-corporate-gray-200 p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-corporate-black">
                {editingNews ? 'Editar Novedad' : 'Nueva Novedad'}
              </h2>
              <button
                onClick={resetForm}
                className="text-corporate-gray-500 hover:text-corporate-black transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                    Título *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-transparent"
                    required
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                    Categoría *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-transparent"
                    required
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                    Fecha *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-transparent"
                    required
                  />
                </div>

                {/* Summary */}
                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                    Resumen *
                  </label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-transparent"
                    required
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                    Contenido *
                  </label>
                  <RichContentEditor
                    value={formData.content}
                    onChange={(blocks) => setFormData({...formData, content: blocks})}
                  />
                </div>

                {/* Image */}
                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                    Imagen Destacada
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full text-xs sm:text-sm text-corporate-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs sm:text-sm file:font-semibold file:bg-corporate-red file:text-white hover:file:bg-corporate-accent"
                    />
                    {formData.image && (
                      <button
                        type="button"
                        onClick={() => setFormData({...formData, image: ''})}
                        className="text-corporate-red hover:text-corporate-red text-xs sm:text-sm"
                      >
                        Quitar
                      </button>
                    )}
                  </div>
                  {formData.image && (
                    <div className="mt-4">
                      <img src={formData.image} alt="Preview" className="max-h-48 rounded-lg" />
                    </div>
                  )}
                  <p className="text-[10px] sm:text-xs text-corporate-gray-500 mt-2">
                    O pegue URL de imagen
                  </p>
                  <input
                    type="url"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://ejemplo.com/imagen.jpg"
                    className="w-full px-4 py-2 mt-2 border border-corporate-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-red focus:border-transparent text-xs sm:text-sm"
                  />
                </div>

                {/* Status */}
                <div className="md:col-span-2">
                  <label className="block text-xs sm:text-sm font-display font-semibold text-corporate-black mb-2">
                    Estado *
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="draft"
                        checked={formData.status === 'draft'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-corporate-gray-700">Borrador</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="status"
                        value="published"
                        checked={formData.status === 'published'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <span className="text-corporate-gray-700">Publicar</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-corporate-gray-200">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-corporate-gray-300 text-corporate-gray-700 rounded-lg font-display font-semibold hover:bg-corporate-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-corporate-red text-white rounded-lg font-display font-semibold hover:bg-corporate-accent transition-colors"
                >
                  {editingNews ? 'Actualizar' : 'Crear'} Novedad
                </button>
              </div>
            </form>
          </div>
        )}

        {/* News List */}
        <div className="bg-white rounded-lg shadow-sm border border-corporate-gray-200">
          <div className="p-6 border-b border-corporate-gray-200">
            <h2 className="font-display text-base sm:text-lg md:text-xl font-bold text-corporate-black">
              Todas las Novedades ({newsList.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-corporate-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-corporate-gray-700 uppercase tracking-wider">
                    Título
                  </th>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-corporate-gray-700 uppercase tracking-wider">
                    Categoría
                  </th>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-corporate-gray-700 uppercase tracking-wider">
                    Fecha
                  </th>
                  <th className="px-6 py-3 text-left text-[10px] sm:text-xs font-display font-semibold text-corporate-gray-700 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className="px-6 py-3 text-right text-[10px] sm:text-xs font-display font-semibold text-corporate-gray-700 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-corporate-gray-200">
                {newsList.map((news) => (
                  <tr key={news.id} className="hover:bg-corporate-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        {news.image && (
                          <img src={news.image} alt="" className="w-12 h-12 rounded object-cover mr-3" />
                        )}
                        <div>
                          <div className="font-display font-semibold text-corporate-black">
                            {news.title}
                          </div>
                          <div className="text-xs sm:text-sm text-corporate-gray-500">
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
                    <td className="px-6 py-4 whitespace-nowrap text-xs sm:text-sm text-corporate-gray-600">
                      {formatDate(news.date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-[10px] sm:text-xs leading-5 font-semibold rounded-full ${
                        news.status === 'published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {news.status === 'published' ? 'Publicada' : 'Borrador'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-xs sm:text-sm font-medium">
                      <button
                        onClick={() => handleEdit(news)}
                        className="text-corporate-red hover:text-corporate-accent mr-4"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(news.id)}
                        className="text-corporate-red hover:text-corporate-red"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {newsList.length === 0 && (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-corporate-gray-300 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                <p className="text-corporate-gray-500">No hay novedades creadas</p>
                <button
                  onClick={() => setShowForm(true)}
                  className="mt-4 text-corporate-red font-display font-semibold hover:text-corporate-accent"
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
