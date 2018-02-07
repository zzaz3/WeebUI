import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button, Card, Image } from 'semantic-ui-react';
import Countdown from 'react-countdown-now';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <p>{days} days and {hours} hours until new episode</p>
  );
};

const AniListRow = ({ item }) => {
  return (
    <Card href={item.siteUrl}>
      <Card.Content>
        <Image floated="right" size="medium" src={item.coverImage.large} />
        <Card.Header>
        {item.title.romaji}
        </Card.Header>
        <Card.Meta>
        </Card.Meta>
        <Card.Description>
          <Countdown renderer={renderer} date={Date.now() + item.nextAiringEpisode.timeUntilAiring * 1000} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">Add</Button>
          <Button basic color="red">Drop</Button>
        </div>
      </Card.Content>
    </Card>
  );
};

AniListRow.propTypes = {
  item: PropTypes.object.isRequired
};

export default AniListRow;
