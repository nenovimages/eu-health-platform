interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0055ff",
        color: "white",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px"
      }}
    >
      {label}
    </button>
  );
}
