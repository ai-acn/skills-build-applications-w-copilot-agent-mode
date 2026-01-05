import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    console.log('Fetching activities from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        setLoading(false);
        console.log('Fetched activities:', results);
      })
      .catch(err => {
        setLoading(false);
        console.error('Error fetching activities:', err);
      });
  }, [endpoint]);

  if (loading) return <div className="text-center my-4"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;

  return (
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="card shadow mb-4">
          <div className="card-body">
            <h2 className="card-title mb-4 text-primary">Activities</h2>
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map((activity, idx) => (
                    <tr key={activity.id || idx}>
                      <td>{activity.id || idx + 1}</td>
                      <td>{activity.name || '-'}</td>
                      <td>{activity.description || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
