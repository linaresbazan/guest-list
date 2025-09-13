import { useGuest } from "./GuestContext";

export default function Guest ({guest}) {
  const {selectedGuest, setSelectedGuest} = useGuest();

  let rowClass = "row";
  if (selectedGuest && selectedGuest.id === guest.id) {
    rowClass += " selected-guest";
  }
  return (
    <tr className={rowClass} onClick={() => setSelectedGuest(guest)} >
      <td>{guest.name}</td>
      <td>{guest.email}</td>
      <td>{guest.phone}</td>
    </tr>
  );
}