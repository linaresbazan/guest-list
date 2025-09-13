import { useGuest } from "./GuestContext";
import Guest from "./Guest";
import useQuery from "./useQuery";

export default function GuestList () {
  const {guestList} = useGuest();

  useQuery("/guests");

  return (<>
    <section>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guestList.map((guest) => {
            return (<Guest key={guest.name} guest={guest}/>);
          })}
        </tbody>
      </table>
    </section>

  </>);
}