import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TaskPlanner from "./pages/TaskPlanner";
import CartesianControl from "./pages/CartesianControl";
import JointControl from "./pages/JointControl";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/task-planner" element={<TaskPlanner />} />
                <Route path="/cartesian-control" element={<CartesianControl />} />
                <Route path="/joint-control" element={<JointControl />} />
            </Routes>
        </Router>
    );
}

export default App;
