import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";
import poolicon from "./poolicon.svg";
import gymicon from "./gymicon.svg";
import breakfasticon from "./breakfasticon.svg";
import wifiicon from "./wifiicon.svg";
import parkingicon from "./parkingicon.svg";
import petsicon from "./petsicon.svg";
import airporticon from "./airporticon.svg";
import conciergeicon from "./conciergeicon.svg";
import roomserviceicon from "./roomserviceicon.svg";
import childicon from "./childicon.svg";

export default function Amenities({
  pool,
  gym,
  freeBreakfast,
  freeWifi,
  parking,
  petsAllowed,
  airportShuttle,
  conciergeService,
  roomService,
  childFriendly,
}) {
  return (
    <Box shadow className="amenities">
      <Heading border>Зручності</Heading>
      <ul className="amenities__list">
        {pool && (
          <ListItem imageSrc={poolicon}>
            <span>Басейн</span>
          </ListItem>
        )}

        {gym && (
          <ListItem imageSrc={gymicon}>
            <span>Спортивний зал</span>
          </ListItem>
        )}

        {freeBreakfast && (
          <ListItem imageSrc={breakfasticon}>
            <span>Безкоштовний сніданок</span>
          </ListItem>
        )}

        {freeWifi && (
          <ListItem imageSrc={wifiicon}>
            <span>Безкоштовний Wi-Fi</span>
          </ListItem>
        )}

        {parking && (
          <ListItem imageSrc={parkingicon}>
            <span>Безкоштовний вуличний паркінг</span>
          </ListItem>
        )}

        {petsAllowed && (
          <ListItem imageSrc={petsicon}>
            <span>Дозволено розміщення з домашніми тваринами</span>
          </ListItem>
        )}

        {airportShuttle && (
          <ListItem imageSrc={airporticon}>
            <span>Трансфер до/з аеропорту</span>
          </ListItem>
        )}

        {conciergeService && (
          <ListItem imageSrc={conciergeicon}>
            <span>Консьєрж-сервіс</span>
          </ListItem>
        )}

        {roomService && (
          <ListItem imageSrc={roomserviceicon}>
            <span>Обслуговування номерів</span>
          </ListItem>
        )}

        {childFriendly && (
          <ListItem imageSrc={childicon}>
            <span>Підходить для дітей</span>
          </ListItem>
        )}
      </ul>
    </Box>
  );
}
