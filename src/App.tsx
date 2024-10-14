import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { Layout } from "./components/layout/Layout.tsx";
import Login from "./pages/login/Login";

import Medications from "./pages/medications/Medications.tsx"
import MedicationDetails from "./pages/medicationDetails/MedicationDetails.tsx";
import AddEditTherapie from "./pages/addEditTherapie/AddEditTherapie.tsx";
import Contacts from "./pages/contacts/Contacts.tsx";
import AddEditContact from "./pages/addEditContact/AddEditContact.tsx";
import DoctorDetails from "./pages/doctorDetails/DoctorDetails.tsx";
import Program from "./pages/program/Program.tsx";
import { Therapies } from "./pages/therapies/Therapies.tsx";
import TherapyDetails from "./pages/therapyDetails/TherapyDetails.tsx"
import  Profile from "./pages/profiles/Profile.tsx";

const router = createBrowserRouter([
  {
      path: "",
      loader: ()=> redirect("/login"),
  },
  {
      path: "/login",
      element: <Login />,
    
  },
  {
    path: "/",
    loader: () => redirect("/login"),
  },
  {
    path: "/profile",
    element: <Profile />,
  },

  {
    element: <Layout />,
    children: [
      {
        path: "medications",
        children: [
          {
            path: "",
            element: <Medications />,
          },
          {
            path: "details",
            element: <MedicationDetails />,
          },
        ],
      },
      {
        path: "therapies",
        children: [
          {
            path: "",
            element: <Therapies />,
          },
          {
            path: "edit",
            children: [
              {
                path: "",
                element: <AddEditTherapie />,
              },
              {
                path: "program",
                element: <Program />
              }
            ],
          },
          {
            path: "add",
            children: [
              {
                path: "",
                element: <AddEditTherapie />,
              },
              {
                path: "program",
                element: <Program />
              }
            ],
          },
          {
            path: "details",
            element: <TherapyDetails />,
          },
        ],
      },
      {
        path: "contacts",
        children: [
          {
            path: "",
            element: <Contacts />,
          },
          {
            path: "edit",
            element: <AddEditContact />,
          },
          {
            path: "add",
            element: <AddEditContact />,
          },
          {
            path: "details",
            element: <DoctorDetails />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
