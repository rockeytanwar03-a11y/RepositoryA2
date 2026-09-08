function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        <div className="logo-icon">S</div>

        <div>
          <h2>SmartLearn</h2>
          <p>AI Learning Platform</p>
        </div>
      </div>

      <nav className="menu">

        <div className="menu-item active">
          <span>⌂</span>
          Dashboard
        </div>

        <div className="menu-item">
          <span>♙</span>
          Users
        </div>

        <div className="menu-item">
          <span>◈</span>
          Roles & Competencies
        </div>

        <div className="menu-item">
          <span>▣</span>
          Courses
        </div>

        <div className="menu-item">
          <span>□</span>
          Learning Materials
        </div>

        <div className="menu-item">
          <span>✓</span>
          Quizzes
        </div>

        <div className="menu-item">
          <span>▤</span>
          Assessments
        </div>

        <div className="menu-item">
          <span>▧</span>
          Reports
        </div>

        <div className="menu-item">
          <span>○</span>
          Feedback
        </div>

        <div className="menu-item">
          <span>⚙</span>
          System Settings
        </div>

        <div className="menu-item">
          <span>♢</span>
          Notifications
        </div>

      </nav>

      <div className="admin-profile">

        <div className="avatar">
          AU
        </div>

        <div>
          <strong>Admin User</strong>
          <p>Super Admin</p>
        </div>

        <span>⌄</span>

      </div>

    </aside>
  );
}

export default Sidebar;