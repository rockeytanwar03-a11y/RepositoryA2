// import Sidebar from "./components/sidebar";
// import Navbar from "./components/navbar";
// import StatCard from "./components/statcard";
// import DashboardCharts from "./components/DashboardCharts";
// import DashboardBottom from "./components/DashboardBottom";

// import {
//   Users,
//   UserCheck,
//   BookOpen,
//   ClipboardList,
//   ChartNoAxesCombined
// } from "lucide-react";

// function App() {
//   return (
//     <>
//       <Sidebar />

//       <main className="main-content">

//         <Navbar />

//         <div className="dashboard-content">

//           {/* Dashboard Heading */}

//           <div className="dashboard-heading">
//             <h1>Admin Dashboard</h1>

//             <p>
//               Welcome back, Admin! Here's what's happening with your platform.
//             </p>
//           </div>


//           {/* Statistics Cards */}

//           <div className="stats-container">

//             <StatCard
//               title="Total Users"
//               value="2,543"
//               change="+12% from last month"
//               icon={<Users />}
//             />

//             <StatCard
//               title="Active Users"
//               value="1,892"
//               change="+8% from last month"
//               icon={<UserCheck />}
//             />

//             <StatCard
//               title="Total Courses"
//               value="156"
//               change="+15% from last month"
//               icon={<BookOpen />}
//             />

//             <StatCard
//               title="Quizzes Generated"
//               value="3,782"
//               change="+25% from last month"
//               icon={<ClipboardList />}
//             />

//             <StatCard
//               title="Avg. Completion Rate"
//               value="68%"
//               change="+5% from last month"
//               icon={<ChartNoAxesCombined />}
//             />

//           </div>


//           {/* Charts */}

//           <DashboardCharts />


//           {/* Bottom Dashboard Sections */}

//           <DashboardBottom />

//         </div>

//       </main>
//     </>
//   );
// }

// export default App;


// new 

import { useEffect, useState } from "react";

import Sidebar from "./components/sidebar";
import Navbar from "./components/navbar";
import StatCard from "./components/StatCard";
import DashboardCharts from "./components/DashboardCharts";
import DashboardBottom from "./components/DashboardBottom";

import {
  Users,
  UserCheck,
  BookOpen,
  ClipboardList,
  ChartNoAxesCombined
} from "lucide-react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <>
      <Sidebar />

      <main className="main-content">

        <Navbar />

        <div className="dashboard-content">

          <div className="dashboard-heading">
            <h1>Admin Dashboard</h1>

            <p>
              Welcome back, Admin! Here's what's happening with your platform.
            </p>
          </div>

          <div className="stats-container">

            <StatCard
              title="Total Users"
              value={users.length}
              change="+12% from last month"
              icon={<Users />}
            />

            <StatCard
              title="Active Users"
              value={
                users.filter((user) => user.status === "active").length
              }
              change="+8% from last month"
              icon={<UserCheck />}
            />

            <StatCard
              title="Total Courses"
              value="156"
              change="+15% from last month"
              icon={<BookOpen />}
            />

            <StatCard
              title="Quizzes Generated"
              value="3,782"
              change="+25% from last month"
              icon={<ClipboardList />}
            />

            <StatCard
              title="Avg. Completion Rate"
              value="68%"
              change="+5% from last month"
              icon={<ChartNoAxesCombined />}
            />

          </div>

          <DashboardCharts />

          <DashboardBottom />

        </div>

      </main>
    </>
  );
}

export default App;