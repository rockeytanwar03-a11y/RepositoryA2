import {
  Users,
  UserCheck,
  BookOpen,
  ClipboardList
} from "lucide-react";

function StatCard({ title, value, change, icon }) {
  return (
    <div className="stat-card">

      <div className="stat-card-top">
        <p>{title}</p>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <h2>{value}</h2>

      <span>{change}</span>

    </div>
  );
}

export default StatCard;