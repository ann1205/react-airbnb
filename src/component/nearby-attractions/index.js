import "./index.css";

import { Fragment } from "react";
import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

export default function NearbyAttractions({ list }) {
  return (
    <Box shadow className="attractions">
      <Heading>Пам'ятки поблизу</Heading>

      <div className="attractions__list">
        {list.map(({ id, ...rest }) => (
          <Fragment key={id}>
            <Item {...rest} />
          </Fragment>
        ))}
      </div>
    </Box>
  );
}

function Item({ name, link }) {
  return (
    <ul className="attraction__item">
      <ListItem>
        <a class="attraction__link" href={link}>
          {name}
        </a>
      </ListItem>
    </ul>
  );
}
