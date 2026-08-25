import Container from "./Container";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      {children}
    </Container>
  );
}
