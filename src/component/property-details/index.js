import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import guestsicon from "./guests.svg";
import bedroomicon from "./bedroom.svg";
import bedicon from "./bed.svg";
import bathicon from "./bathroom.svg";

export default function PropertyDetails({ guests, bedrooms, beds, baths }) {
  return (
    <Box shadow className="property-details">
      <Heading border>Деталі властивості:</Heading>
      <ul className="property-details__list">
        <ListItem imageSrc={guestsicon}>
          <span>{guests} гості</span>
        </ListItem>

        <ListItem imageSrc={bedroomicon}>
          <span>{bedrooms} спальня</span>
        </ListItem>

        <ListItem imageSrc={bedicon}>
          <span>{beds} ліжко</span>
        </ListItem>

        <ListItem imageSrc={bathicon}>
          <span>{baths} ванна кімната</span>
        </ListItem>
      </ul>
    </Box>
  );
}

// function List({ currency, cleaning = 0, service = 0, checkin, checkout }) {
//   return (
//     <ul className="price__list">
//       <ListItem>
//         <span>Плата за прибирання:</span>
//         <span>
//           {currency}
//           {cleaning}
//         </span>
//       </ListItem>

//       <ListItem>
//         <span>Сервісний збір:</span>
//         <span>
//           {currency}
//           {service}
//         </span>
//       </ListItem>

//       <ListItem>
//         <span>Дата прибуття:</span>
//         <span>{checkin}</span>
//       </ListItem>

//       <ListItem>
//         <span>Дата від'їзду:</span>
//         <span>{checkout}</span>
//       </ListItem>
//     </ul>
//   );
// }
