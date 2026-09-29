import { useEffect, useState } from "react";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [assessments, setAssessments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchAdminData();
  }, []);

  async function fetchAdminData() {
    try {
      const usersResponse = await fetch(
        "http://127.0.0.1:5000/api/admin/users"
      );

      const assessmentsResponse = await fetch(
        "http://127.0.0.1:5000/api/admin/assessments"
      );

      if (!usersResponse.ok || !assessmentsResponse.ok) {
        throw new Error("Could not load admin data");
      }

      const usersData = await usersResponse.json();
      const assessmentsData = await assessmentsResponse.json();

      setUsers(usersData);
      setAssessments(assessmentsData);
    } catch (error) {
      console.error(error);
      setMessage("Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  }

  const averageMatch =
    assessments.length > 0
      ? Math.round(
          assessments.reduce(
            (total, item) =>
              total + Number(item.matchPercentage || 0),
            0
          ) / assessments.length
        )
      : 0;

  const careerCounts = {};

  assessments.forEach((assessment) => {
    careerCounts[assessment.career] =
      (careerCounts[assessment.career] || 0) + 1;
  });

  let mostSelectedCareer = "No data";

  if (Object.keys(careerCounts).length > 0) {
    mostSelectedCareer = Object.keys(careerCounts).reduce(
      (a, b) =>
        careerCounts[a] > careerCounts[b] ? a : b
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #050816, #0b1026)",
        color: "white",
        padding: "40px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "8px",
          }}
        >
          🛡️ Admin Dashboard
        </h1>

        <p
          style={{
            color: "#94a3b8",
            marginBottom: "35px",
          }}
        >
          Monitor users, assessments and skill-gap insights.
        </p>

        {loading && (
          <p style={{ color: "#a78bfa" }}>
            Loading dashboard...
          </p>
        )}

        {message && (
          <p style={{ color: "#f87171" }}>
            {message}
          </p>
        )}

        {!loading && !message && (
          <>
            {/* STATISTICS */}

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "20px",
                marginBottom: "35px",
              }}
            >
              <div style={cardStyle}>
                <div style={iconStyle}>👥</div>

                <h2 style={numberStyle}>
                  {users.length}
                </h2>

                <p style={labelStyle}>
                  Registered Users
                </p>
              </div>

              <div style={cardStyle}>
                <div style={iconStyle}>📊</div>

                <h2 style={numberStyle}>
                  {assessments.length}
                </h2>

                <p style={labelStyle}>
                  Assessments Taken
                </p>
              </div>

              <div style={cardStyle}>
                <div style={iconStyle}>🎯</div>

                <h2 style={numberStyle}>
                  {averageMatch}%
                </h2>

                <p style={labelStyle}>
                  Average Skill Match
                </p>
              </div>

              <div style={cardStyle}>
                <div style={iconStyle}>💼</div>

                <h2
                  style={{
                    fontSize: "20px",
                    margin: "10px 0",
                  }}
                >
                  {mostSelectedCareer}
                </h2>

                <p style={labelStyle}>
                  Most Selected Career
                </p>
              </div>
            </div>

            {/* USERS */}

            <div style={sectionStyle}>
              <h2 style={sectionHeading}>
                👥 Registered Users
              </h2>

              {users.length === 0 ? (
                <p style={emptyStyle}>
                  No users registered yet.
                </p>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email</th>
                        <th style={thStyle}>
                          Registered
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {users.map((user) => (
                        <tr key={user._id}>
                          <td style={tdStyle}>
                            {user.name}
                          </td>

                          <td style={tdStyle}>
                            {user.email}
                          </td>

                          <td style={tdStyle}>
                            {new Date(
                              user.createdAt
                            ).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* ASSESSMENTS */}

            <div style={sectionStyle}>
              <h2 style={sectionHeading}>
                📊 User Assessments
              </h2>

              {assessments.length === 0 ? (
                <p style={emptyStyle}>
                  No assessments have been saved yet.
                </p>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <table style={tableStyle}>
                    <thead>
                      <tr>
                        <th style={thStyle}>
                          User
                        </th>

                        <th style={thStyle}>
                          Career
                        </th>

                        <th style={thStyle}>
                          Skills Selected
                        </th>

                        <th style={thStyle}>
                          Missing Skills
                        </th>

                        <th style={thStyle}>
                          Match
                        </th>

                        <th style={thStyle}>
                          Date
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {assessments.map(
                        (assessment) => (
                          <tr
                            key={
                              assessment._id
                            }
                          >
                            <td style={tdStyle}>
                              {assessment.userId?.name ||
                                "Unknown"}
                            </td>

                            <td style={tdStyle}>
                              {assessment.career}
                            </td>

                            <td style={tdStyle}>
                              {assessment.selectedSkills?.join(
                                ", "
                              ) || "None"}
                            </td>

                            <td style={tdStyle}>
                              {assessment.missingSkills?.join(
                                ", "
                              ) || "None"}
                            </td>

                            <td style={tdStyle}>
                              <span
                                style={{
                                  background:
                                    "rgba(124, 58, 237, 0.2)",
                                  padding:
                                    "6px 10px",
                                  borderRadius:
                                    "8px",
                                  color:
                                    "#c4b5fd",
                                  fontWeight:
                                    "bold",
                                }}
                              >
                                {
                                  assessment.matchPercentage
                                }
                                %
                              </span>
                            </td>

                            <td style={tdStyle}>
                              {new Date(
                                assessment.createdAt
                              ).toLocaleDateString()}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#ffffff08",
  border: "1px solid #ffffff14",
  borderRadius: "18px",
  padding: "25px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.2)",
};

const iconStyle = {
  fontSize: "28px",
  marginBottom: "10px",
};

const numberStyle = {
  fontSize: "32px",
  margin: "5px 0",
};

const labelStyle = {
  color: "#94a3b8",
  margin: 0,
};

const sectionStyle = {
  background: "#ffffff08",
  border: "1px solid #ffffff14",
  borderRadius: "18px",
  padding: "25px",
  marginBottom: "25px",
  boxShadow:
    "0 10px 30px rgba(0,0,0,0.15)",
};

const sectionHeading = {
  marginTop: 0,
  marginBottom: "20px",
};

const emptyStyle = {
  color: "#94a3b8",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: "750px",
};

const thStyle = {
  textAlign: "left",
  padding: "14px",
  borderBottom: "1px solid #ffffff15",
  color: "#a78bfa",
  fontSize: "14px",
};

const tdStyle = {
  padding: "14px",
  borderBottom: "1px solid #ffffff0d",
  color: "#cbd5e1",
  fontSize: "14px",
};

export default AdminDashboard;