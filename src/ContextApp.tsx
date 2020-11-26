import React from "react";

let Context = React.createContext<any>(null);

function ContextApp() {
  let [currentUser, setCurrentUser] = React.useState<any>(null);
  return (
    <Context.Provider value={{ currentUser }}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ backgroundColor: "gray", marginTop: "5rem" }}>
          <Header />
        </div>

        <div style={{ flex: 1 }}>
          {currentUser ? (
            <Dashboard />
          ) : (
            <LoginScreen onLogin={() => setCurrentUser({ name: "Michael" })} />
          )}
        </div>

        <div style={{ backgroundColor: "lightgray" }}>
          <Footer />
        </div>
      </div>
    </Context.Provider>
  );
}

function Header() {
  return (
    <div>
      <h1>Context Version Header</h1>
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
function Dashboard() {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />
      <DashboardContent />
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

function DashboardContent() {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage />
    </div>
  );
}

function WelcomeMessage() {
  let { currentUser } = React.useContext(Context);
  return (
    <div>
      <p>Welcome {currentUser.name}!</p>
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

export default ContextApp;
