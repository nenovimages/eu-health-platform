import PageWrapper from "../../components/PageWrapper";
import Card from "../../components/Card";

export default function DashboardPage() {
  return (
    <PageWrapper>
      <h1 style={{ fontSize: "28px", marginBottom: "20px" }}>
        Health Overview
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        <Card title="Appointments" description="Upcoming medical visits and checkups." />
        <Card title="Medications" description="Active prescriptions and dosage schedules." />
        <Card title="Health Records" description="Your medical history and documents." />
        <Card title="Facilities" description="Nearby hospitals, clinics and specialists." />
      </div>
    </PageWrapper>
  );
}
