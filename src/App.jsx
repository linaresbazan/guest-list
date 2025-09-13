import GuestDetails from "./GuestDetails";
import GuestList from "./GuestList";
import { useGuest } from "./GuestContext";

export default function App() {
  const {selectedGuest} = useGuest();

  return (
  <>
    <header>
      <h1>Guest List</h1>
    </header>
    <main>
      {
        selectedGuest ? (
          <GuestDetails/>
        ) : (
          <>
            <GuestList />
            <p>Select a guest to see more details</p>
          </>
        )
      }
    </main>

  </>);
}
