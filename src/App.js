import AuthForm from "./components/Containers/AuthForm";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";

export function App() {
  return <div style={{
    display: 'flex',
    justifyContent: "space-between",
    flexDirection: 'column',
    height: '100vh'
  }}><DashboardLayout>
    <AuthForm/>
    </DashboardLayout></div>;
}
