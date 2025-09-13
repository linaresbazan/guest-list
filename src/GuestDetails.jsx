import { useGuest } from "./GuestContext";

export default function GuestDetails() {
  const {selectedGuest, setSelectedGuest} = useGuest();

  return (
  <>
    <section>
      <h2>{selectedGuest.name}</h2>
      <p>Email: {selectedGuest.email}</p>
      <p>Phone: {selectedGuest.phone}</p>
      <p>Bio: {selectedGuest.bio}</p>
      <p>Job: {selectedGuest.job}</p>
      <button onClick={() => setSelectedGuest(null)}>Back</button>
    </section>
  </>
  );
}