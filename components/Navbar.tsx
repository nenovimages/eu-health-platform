"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      width: "100%",
      padding: "15px 20px",
      background: "#ffffff",
      borderBottom: "1px solid #e5e5e5",
      display: "flex",
      gap: "20px"
    }}>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
