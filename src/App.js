import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import ExercisesHome from './components/ExercisesHome';
import FetchUsers from './components/FetchUsers';
import FetchPosts from './components/FetchPostsWithLoading';
import HandleErrors from './components/HandleErrors';
import DynamicDataFetch from './components/DynamicDataFetch';
import PaginatedUsers from './components/PaginatedUsers';
import SearchablePosts from './components/SearchablePosts';
import FetchAndCache from './components/FetchAndCache';
import MasterDetail from './components/MasterDetail';
import DebouncedSearch from './components/DebouncedSearch';
import InfiniteScrolling from './components/InfiniteScrolling';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState('');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setLogoutMessage('');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLogoutMessage('You have been logged out successfully.');
    setTimeout(() => setLogoutMessage(''), 3000);
  };
  return (
    <Router>
      <div>
        <NavigationBar isAuthenticated={isAuthenticated} />
        <div className="container mt-4">
          {logoutMessage && (
            <div className="alert alert-success" role="alert">
              {logoutMessage}
            </div>
          )}
          <Routes>
            <Route path="/" element={<div>trying to do better🫡</div>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/exercises-home" element={<ExercisesHome />} />
            <Route path="/fetch-users" element={<FetchUsers />} />
            <Route path="/fetch-posts" element={<FetchPosts />} />
            <Route path="/handle-errors" element={<HandleErrors />} />
            <Route path="/dynamic-data-fetch" element={<DynamicDataFetch />} />
            <Route path="/paginated-users" element={<PaginatedUsers />} />
            <Route path="/searchable-posts" element={<SearchablePosts />} />
            <Route path="/fetch-and-cache" element={<FetchAndCache />} />
            <Route path="/master-detail" element={<MasterDetail />} />
            <Route path="/debounced-search" element={<DebouncedSearch />} />
            <Route path="/infinite-scrolling" element={<InfiniteScrolling />} />
          </Routes>
          {isAuthenticated && (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
              <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;















