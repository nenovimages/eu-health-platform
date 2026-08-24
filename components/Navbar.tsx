export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        padding: "16px 20px",
        backgroundColor: "#0055ff",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>EU Health Platform</h1>
      <div>
        <a href="/" style={{ color: "white", marginRight: "16px" }}>Home</a>
        <a href="/profile" style={{ color: "white" }}>Profile</a>
      </div>
    </nav>
  );
}
