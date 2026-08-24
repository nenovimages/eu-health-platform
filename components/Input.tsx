interface InputProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ label, type = "text", value, onChange }: InputProps) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          width: "100%",
          fontSize: "16px"
        }}
      />
    </div>
  );
}
