import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExercisesHome = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Fetching Data Exercises</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Fetch Users</h5>
              <p className="card-text">Learn how to fetch user data from an API.</p>
              <Link to="/fetch-users" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Fetch Posts</h5>
              <p className="card-text">Learn how to fetch posts from an API.</p>
              <Link to="/fetch-posts" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Handle API Errors</h5>
              <p className="card-text">Learn how to handle errors when fetching data.</p>
              <Link to="/handle-errors" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Dynamic Data Fetching</h5>
              <p className="card-text">Learn how to fetch data dynamically based on user input.</p>
              <Link to="/dynamic-data-fetch" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Paginated API Fetch</h5>
              <p className="card-text">Learn how to fetch paginated data from an API.</p>
              <Link to="/paginated-users" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Searchable API Data</h5>
              <p className="card-text">Learn how to implement search functionality with API data.</p>
              <Link to="/searchable-posts" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Fetch Data and Cache Results</h5>
              <p className="card-text">Learn how to cache API data for better performance.</p>
              <Link to="/fetch-and-cache" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Master-Detail View</h5>
              <p className="card-text">Learn how to implement a master-detail view with API data.</p>
              <Link to="/master-detail" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Debounced Search</h5>
              <p className="card-text">Learn how to implement debounced search with API data.</p>
              <Link to="/debounced-search" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Infinite Scrolling</h5>
              <p className="card-text">Learn how to implement infinite scrolling with API data.</p>
              <Link to="/infinite-scrolling" className="btn btn-primary">Go</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesHome;




