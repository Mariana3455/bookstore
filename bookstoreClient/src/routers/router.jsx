import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App.jsx";
import Home from "../home/Home.jsx";
import Shop from "../Shop/Shop.jsx";
import About from "../components/About.jsx";
import Blog from "../components/Blog.jsx";
import SingleBook from "../components/SingleBook.jsx";
import SingleBookData from "../Shop/SingleBookData.jsx";
import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/DashBoard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBook from "../dashboard/EditBook.jsx";
import SignUp from "../components/SignUp.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import Login from "../components/Login.jsx";
import LogOut from "../components/LogOut.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/shop",
                element:<Shop/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/blog",
                element:<Blog/>
            },
            {
                path:"/book/:id",
                element:<SingleBook/>,
                loader:({params})=> fetch(`http://localhost:4040/book/${params.id}`)
            }
            ]
    },
            {
                path:"/admin/dashboard",
                element:<PrivateRoute><DashboardLayout/></PrivateRoute>

            },
            {
                path:"/admin/dashboard/upload",
                element:<DashboardLayout><UploadBook/></DashboardLayout>
            },
            {
                path:"/admin/dashboard/manage",
                element:<DashboardLayout><ManageBooks/></DashboardLayout>
            },
            {
                path:"/admin/dashboard/edit/:id",
                element:<DashboardLayout><EditBook/></DashboardLayout>,
                loader:({params})=> fetch(`http://localhost:4040/book/${params.id}`)
            },
    {
        path:"signUp",
        element:<SignUp/>
    },
    {
        path:"login",
        element:<Login/>

    },
    {
        path:"logOut",
        element:<LogOut/>
    }

]);
export default router