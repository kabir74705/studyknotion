
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import NavBar from './components/common/NavBar';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import VerifyEmail from "./pages/VerifyEmail"
import About from './pages/About';
import Contact from "./pages/Contact";
import PrivateRoute from './components/core/Auth/PrivateRoute';
import Dashboard from './pages/Dashboard';
import MyProfile from './components/core/Dashboard/MyProfile';
import Settings from './components/core/Dashboard/Settings/Settings';
import EnrolledCourses from './components/core/Dashboard/EnrolledCourses';
import { useDispatch, useSelector } from "react-redux";
import Cart from './components/core/Dashboard/Cart';
import MyCourses from './components/core/Dashboard/MyCourses';
import AddCourse from './components/core/Dashboard/AddCourse';
import EditCourse from './components/core/Dashboard/EditCourse';
import Catalog from './pages/Catalog';
import CourseDetails from "./pages/CourseDetails";
import ViewCourse from './pages/ViewCourse';
import VideoDetails from './components/core/ViewCourse/VideoDetails';
import Instructor from "./components/core/Dashboard/InstructorDashboard/Instructor";

function App() {
  const { user } = useSelector((state) => state.profile)
  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col font-inter'>
      <NavBar></NavBar>
      <Routes>

        <Route path='/' element={<Home />} />


        <Route path='/forgot-password' element={<ForgotPassword />} />


        <Route path='/update-password/:id' element={<UpdatePassword />} />

        <Route path="catalog/:catalogName" element={<Catalog/>} />
        <Route
          path="/signup"
          element={

            <Signup />

          }
        />
         <Route path="courses/:courseId" element={<CourseDetails/>} />


        <Route
          path="/login"
          element={

            <Login />

          }
        />


        <Route
          path="/verify-email"
          element={

            <VerifyEmail />

          }
        />
        <Route
          path="reset-password/:token"
          element={

            <UpdatePassword />

          }
        />
        <Route
          path="/about"
          element={

            <About />

          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />

          <Route path="dashboard/Settings" element={<Settings />} />
          {
        user?.accountType === "Student" && (
          <>
          <Route path="dashboard/cart" element={<Cart />} />
          <Route path="dashboard/enrolled-courses" element={<EnrolledCourses />} />
          </>
        )
      }
        {
        user?.accountType === "Instructor" && (
          <>
          <Route path="dashboard/instructor" element={<Instructor />} />/
          <Route path="dashboard/add-course" element={<AddCourse />} />
          <Route path="dashboard/my-courses" element={<MyCourses />} />
          <Route path="dashboard/edit-course/:courseId" element={<EditCourse />} />
          
          </>
        )
      }
        </Route>
        <Route element={
        <PrivateRoute>
          <ViewCourse />
        </PrivateRoute>
      }>

      {
        user?.accountType === "Student" && (
          <>
          <Route 
            path="view-course/:courseId/section/:sectionId/sub-section/:subSectionId"
            element={<VideoDetails />}
          />
          </>
        )
      }

      </Route>





      </Routes>

    </div>
  );
}

export default App
