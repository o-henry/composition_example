import React from "react";

function CompositionApp() {
  // black-box : we don't know all of the stuff that it renders right and we use children prop
  let [currentUser, setCurrentUser] = React.useState<any>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ backgroundColor: "gray", marginTop: "5rem" }}>
        <Header />
      </div>

      <div style={{ flex: 1 }}>
        {currentUser ? (
          <Dashboard>
            <DashboardNav />
            <DashboardContent>
              <WelcomeMessage user={currentUser} />
            </DashboardContent>
          </Dashboard>
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({ name: "Michael" })} />
        )}
      </div>

      <div style={{ backgroundColor: "lightgray" }}>
        <Footer />
      </div>
    </div>
  );
}

/**
 * @component
 */
function Header() {
  return (
    <div>
      <h1>Composition Version Header</h1>
    </div>
  );
}

/**
 * @component
 */
function LoginScreen({ onLogin }: any) {
  return (
    <div>
      <h3>Please Login</h3>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

/**
 * @component
 * black-box
 * customizable
 */
function Dashboard({ children }: any) {
  return (
    <div>
      <h2>The Dashboard</h2>
      {children}
    </div>
  );
}

/**
 * @component
 */
function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  );
}

/**
 * @component
 * Like a black-box
 */
function DashboardContent({ children }: any) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      {children}
    </div>
  );
}

/**
 * @component
 */
function WelcomeMessage({ user }: any) {
  return (
    <div>
      <p>Welcome {user.name}!</p>
    </div>
  );
}

/**
 * @component
 */
function Footer() {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

export default CompositionApp;
