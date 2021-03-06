// https://www.youtube.com/watch?v=3XaXKiXtNjw&list=WL&index=1&t=11s
import React from "react";

function App() {
  // global state
  // 상태관리를 최상단 App에서 하지만, 4층의 prop-drilling이 발생
  let [currentUser, setCurrentUser] = React.useState<any>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ backgroundColor: "gray" }}>
        <Header />
      </div>

      <div style={{ flex: 1 }}>
        {currentUser ? (
          <Dashboard user={currentUser} />
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
      <h1>Prop-drilling Header</h1>
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
 * prop-drilling
 */
function Dashboard({ user }: any) {
  return (
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav />
      <DashboardContent user={user} />
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
 * prop-drilling
 */
function DashboardContent({ user }: any) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage user={user} />
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

export default App;
