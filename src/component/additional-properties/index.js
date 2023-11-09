import "./index.css";

import Heading from "../heading";
import Box from "../box";
import ListItem from "../list-item";

export default function AdditionalProperties({
  rules,
  cancellationPolicy,
  localTransportation,
  languages,
  specialOffers,
  checkInInstraction,
}) {
  return (
    <Box shadow className="additional-properties">
      <Heading border>Додаткові властивості</Heading>
      <ul className="additional-properties__list">
        <ListItem title="Правила дому">
          <span>{rules}</span>
        </ListItem>

        <ListItem title="Політика скасування">
          <span>{cancellationPolicy}</span>
        </ListItem>

        <ListItem title="Місцевий транспорт">
          <span>{localTransportation}</span>
        </ListItem>

        <ListItem title="Мови хоста">
          <span>{languages}</span>
        </ListItem>

        <ListItem title="Спеціальні пропозиції:">
          <span>{specialOffers}</span>
        </ListItem>

        <ListItem title="Інструкції щодо реєстрації">
          <span>{checkInInstraction}</span>
        </ListItem>
      </ul>
    </Box>
  );
}
