import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [currentUser, setCurrentUser] = React.useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ backgroundColor: "lightgray" }}>
        <Header />
      </div>

      <div style={{ flex: 1 }}>
        {currentUser ? (
          <Dashboard user={currentUser} />
        ) : (
          ""
          <LoginScreen onLogin={() => setCurrentUser({ name: "Michael" })} />
        )}
      </div>

      <div style={{ backgroundColor: "lightgray" }}>
        <Footer />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Headr</h1>
    </div>
  );
}

function LoginScreen({ onLogin }: any) {
  return (
    <div>
      <h3>Please Login</h3>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}
function Dashboard({ user }: any) {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />
      <DashboardContent user={user} />
    </div>
  );
}

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  );
}

function DashboardContent({ user }: any) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage user={user} />
    </div>
  );
}

function WelcomeMessage({ user }: any) {
  return (
    <div>
      <p>Welcome {user.name}!</p>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

export default App;
