import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./pages/Unauthorized";
import WaitingLogin from "./components/WaitingLogin";
import Main from "./pages/Main";
import Teacher from "./pages/Teacher";
import Admin from "./pages/Admin";
import Lounge from "./pages/Lounge";
import LinkPage from "./pages/LinkPage";
import Profile from "./pages/Profile";

function App() {

    const ROLES = {
        "Admin": 3,
        "Teacher": 2,
        "Student": 1
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="linkpage" element={<LinkPage />} />
                <Route path="unauthorized" element={<Unauthorized />} />

                <Route element={<WaitingLogin />}>
                    <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
                        <Route path="/" element={<Main />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
                        <Route path="profile" element={<Profile />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Teacher, ROLES.Admin]} />}>
                        <Route path="teacher" element={<Teacher />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                        <Route path="admin" element={<Admin />} />
                    </Route>

                    <Route element={<RequireAuth allowedRoles={[ROLES.Teacher, ROLES.Admin]} />}>
                        <Route path="lounge" element={<Lounge />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
  );
}

export default App;
