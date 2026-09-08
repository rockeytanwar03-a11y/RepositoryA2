import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

const activityData = [
  { day: "May 1", active: 600, newUsers: 240 },
  { day: "May 2", active: 640, newUsers: 280 },
  { day: "May 3", active: 680, newUsers: 320 },
  { day: "May 4", active: 700, newUsers: 340 },
  { day: "May 5", active: 650, newUsers: 290 },
  { day: "May 6", active: 710, newUsers: 320 },
  { day: "May 7", active: 670, newUsers: 310 },
  { day: "May 8", active: 720, newUsers: 350 },
  { day: "May 9", active: 750, newUsers: 330 },
  { day: "May 10", active: 710, newUsers: 320 },
  { day: "May 11", active: 705, newUsers: 315 },
  { day: "May 12", active: 650, newUsers: 260 },
  { day: "May 13", active: 670, newUsers: 290 },
  { day: "May 14", active: 690, newUsers: 310 },
  { day: "May 15", active: 710, newUsers: 330 },
  { day: "May 16", active: 760, newUsers: 350 },
  { day: "May 17", active: 700, newUsers: 320 },
  { day: "May 18", active: 680, newUsers: 300 },
  { day: "May 19", active: 670, newUsers: 290 },
  { day: "May 20", active: 610, newUsers: 260 },
  { day: "May 21", active: 650, newUsers: 300 },
  { day: "May 22", active: 720, newUsers: 330 },
  { day: "May 23", active: 680, newUsers: 290 },
  { day: "May 24", active: 710, newUsers: 290 },
  { day: "May 25", active: 750, newUsers: 330 },
  { day: "May 26", active: 670, newUsers: 310 },
  { day: "May 27", active: 690, newUsers: 320 },
  { day: "May 28", active: 680, newUsers: 360 },
  { day: "May 29", active: 700, newUsers: 380 },
  { day: "May 30", active: 720, newUsers: 370 }
];

const roleData = [
  {
    name: "Statistical Officer",
    value: 982
  },
  {
    name: "Data Analyst",
    value: 657
  },
  {
    name: "Research Officer",
    value: 456
  },
  {
    name: "Field Officer",
    value: 248
  },
  {
    name: "Admin",
    value: 200
  }
];

const COLORS = [
  "#4F7DF3",
  "#42C88A",
  "#FF8A3D",
  "#8064D9",
  "#35B5D5"
];

function DashboardCharts() {
  return (
    <div className="charts-container">

      {/* User Activity */}

      <div className="chart-card">

        <div className="chart-header">

          <div>
            <h3>User Activity Overview</h3>
            <p>Active and newly registered users</p>
          </div>

          <select>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 3 Months</option>
          </select>

        </div>

        <div className="chart-legend">

          <span>
            <i className="active-dot"></i>
            Active Users
          </span>

          <span>
            <i className="new-dot"></i>
            New Users
          </span>

        </div>

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={activityData}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="active"
              stroke="#4F7DF3"
              strokeWidth={3}
              dot={{ r: 3 }}
            />

            <Line
              type="monotone"
              dataKey="newUsers"
              stroke="#42C88A"
              strokeWidth={3}
              dot={{ r: 3 }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>


      {/* Users by Role */}

      <div className="chart-card">

        <div className="chart-header">

          <div>
            <h3>Users by Role</h3>
            <p>Distribution of platform users</p>
          </div>

          <select>
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 3 Months</option>
          </select>

        </div>

        <div className="pie-container">

          <ResponsiveContainer width="55%" height={280}>

            <PieChart>

              <Pie
                data={roleData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={65}
                outerRadius={100}
                paddingAngle={2}
              >

                {roleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

          <div className="role-list">

            {roleData.map((role, index) => (

              <div className="role-item" key={role.name}>

                <div className="role-name">

                  <span
                    className="role-color"
                    style={{
                      backgroundColor: COLORS[index]
                    }}
                  ></span>

                  {role.name}

                </div>

                <strong>
                  {role.value}
                </strong>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardCharts;