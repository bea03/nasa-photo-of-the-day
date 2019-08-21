import React from 'react';
import './NasaCards.scss';
import { Image, Reveal, Container } from 'semantic-ui-react';

function NasaCards(props) {
      return (
        <div className="nasa-cards">
          <Reveal animated='move up'>
            <Reveal.Content visible>
              <Image size='large' src='../../../black-sq.png' alt=""></Image>
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image size='large' src={props.url} alt=""></Image>
            </Reveal.Content>
          </Reveal>
          <Container className="boxTwo" text>
            <h2>{props.title}</h2>
            <p>{props.explanation}</p>
            <div className="smaller">{props.date}</div>
            <div className="smaller">{props.copyright}</div>
          </Container>
        </div>
    );
}

export default NasaCards;
