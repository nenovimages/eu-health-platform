import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./Container";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </>
  );
}
