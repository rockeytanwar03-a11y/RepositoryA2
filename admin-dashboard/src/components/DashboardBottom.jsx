const competencyGaps = [
  {
    name: "Python Programming",
    percentage: 72
  },
  {
    name: "Data Analysis",
    percentage: 65
  },
  {
    name: "Advanced Statistics",
    percentage: 48
  },
  {
    name: "Machine Learning",
    percentage: 35
  },
  {
    name: "Data Visualization",
    percentage: 28
  }
];

const quizActivity = [
  {
    name: "Statistics Fundamentals Quiz",
    attempts: 120,
    score: 85
  },
  {
    name: "Python Basics Quiz",
    attempts: 98,
    score: 78
  },
  {
    name: "Data Analysis Quiz",
    attempts: 87,
    score: 82
  },
  {
    name: "Sampling Methods Quiz",
    attempts: 75,
    score: 80
  },
  {
    name: "Excel Basics Quiz",
    attempts: 60,
    score: 75
  }
];

const recentUsers = [
  {
    initials: "RK",
    name: "Ravi Kumar",
    role: "Statistical Officer",
    joined: "Joined 2 days ago"
  },
  {
    initials: "PS",
    name: "Priya Singh",
    role: "Data Analyst",
    joined: "Joined 3 days ago"
  },
  {
    initials: "AM",
    name: "Amit Mishra",
    role: "Research Officer",
    joined: "Joined 5 days ago"
  },
  {
    initials: "SC",
    name: "Sneha Chauhan",
    role: "Field Officer",
    joined: "Joined 1 week ago"
  },
  {
    initials: "DB",
    name: "Deepak Verma",
    role: "Statistical Officer",
    joined: "Joined 1 week ago"
  }
];

function DashboardBottom() {
  return (
    <div className="bottom-container">

      {/* Top Competency Gaps */}

      <div className="bottom-card">

        <div className="bottom-header">
          <h3>Top Competency Gaps</h3>

          <select>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        <div className="competency-list">

          {competencyGaps.map((item) => (

            <div className="competency-item" key={item.name}>

              <div className="competency-info">
                <span>{item.name}</span>
                <strong>{item.percentage}%</strong>
              </div>

              <div className="progress-background">
                <div
                  className="progress-bar"
                  style={{
                    width: `${item.percentage}%`
                  }}
                ></div>
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* Recent Quiz Activity */}

      <div className="bottom-card">

        <div className="bottom-header">
          <h3>Recent Quiz Activity</h3>

          <select>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 3 Months</option>
          </select>
        </div>

        <div className="quiz-list">

          {quizActivity.map((quiz) => (

            <div className="quiz-item" key={quiz.name}>

              <div className="quiz-icon">
                📝
              </div>

              <div className="quiz-info">
                <strong>{quiz.name}</strong>
                <span>{quiz.attempts} attempts</span>
              </div>

              <div className="quiz-score">
                {quiz.score}% avg score
              </div>

            </div>

          ))}

        </div>

      </div>


      {/* Recent Users */}

      <div className="bottom-card">

        <div className="bottom-header">
          <h3>Recent Users</h3>

          <button className="view-all">
            View All
          </button>
        </div>

        <div className="user-list">

          {recentUsers.map((user) => (

            <div className="user-item" key={user.name}>

              <div className="user-avatar">
                {user.initials}
              </div>

              <div className="user-info">
                <strong>{user.name}</strong>
                <span>{user.role}</span>
              </div>

              <div className="joined">
                {user.joined}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default DashboardBottom;