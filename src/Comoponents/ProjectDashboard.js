import React, { useState } from "react";
import "../assests/styles.css";
import runIcon from "../assests/run-icon.png";
import threeDotsIcon from "../assests/threedots.png";

const ProjectDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects] = useState([
    {
      id: 1,
      name: "24015-237 WHC- Delaware Ranch, TX - 46MW",
      status: "Active",
      date: "2024-05-31",
    },
    {
      id: 2,
      name: "24015-254 WHC - Green Mallard",
      status: "Active",
      date: "2024-05-31",
    },
    {
      id: 3,
      name: "24015-145 WHC - Hillsboro-1",
      status: "Active",
      date: "2024-05-31",
    },
    { id: 4, name: "McCarthy Demo", status: "Active", date: "2024-05-15" },
    { id: 5, name: "24015.260 PCL-Case", status: "Active", date: "2024-05-15" },
  ]);

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="project-dashboard">
      <h1>Projects</h1>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="create-new">+ Create New</button>
      </div>
      {filteredProjects.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Created Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.date}</td>
                <td>
                  <span className={`status ${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="run-button">
                      <img src={runIcon} alt="Run" className="run-icon" /> Run
                    </button>
                    <img
                      src={threeDotsIcon}
                      alt="More"
                      className="three-dots-icon"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No projects match your search criteria.</p>
      )}
    </div>
  );
};

export default ProjectDashboard;
