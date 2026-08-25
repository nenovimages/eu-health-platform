interface CardProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export default function Card({ title, description, children }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        backgroundColor: "white",
        marginBottom: "20px"
      }}
    >
      <h2 style={{ marginBottom: "12px", fontSize: "20px" }}>
        {title}
      </h2>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
