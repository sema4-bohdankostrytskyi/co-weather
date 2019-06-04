import React from 'react';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import { IWeatherData } from '../../App/types';

interface IProps {
  data: IWeatherData;
  isFemale: boolean;
}

const BestCity: React.FunctionComponent<IProps> = ({ data, isFemale }) => {
  const getInfo = () =>
    isFemale
      ? `${data.name} is the best for girls!`
      : `Boys are going to find ${data.name} city to be the best for them!`;

  const handleClick = () => {
    window.open(`https://en.wikipedia.org/wiki/${data.name}`);
  };

  return (
    <Card
      overrides={{ Root: { style: { width: '400px' } } }}
      title={`Best city is: ${data.name}`}
    >
      <StyledBody>{getInfo()}</StyledBody>
      <StyledAction>
        <Button style={{ width: '100%' }} onClick={handleClick}>
          Interested? Try to find more info! Wikipedia
        </Button>
      </StyledAction>
    </Card>
  );
};

export default BestCity;
