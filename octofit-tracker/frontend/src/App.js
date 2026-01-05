
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Octofit Tracker</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card shadow">
                  <div className="card-body text-center">
                    <h1 className="display-4 mb-3">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1>
                    <p className="lead">Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
                    <div className="d-flex justify-content-center gap-2 mt-4">
                      <Link to="/activities" className="btn btn-primary btn-lg">View Activities</Link>
                      <Link to="/leaderboard" className="btn btn-success btn-lg">Leaderboard</Link>
                      <Link to="/teams" className="btn btn-info btn-lg">Teams</Link>
                      <Link to="/users" className="btn btn-secondary btn-lg">Users</Link>
                      <Link to="/workouts" className="btn btn-warning btn-lg">Workouts</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </>
  );
}

export default App;
