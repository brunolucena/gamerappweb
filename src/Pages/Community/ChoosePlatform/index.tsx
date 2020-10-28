import React, { useState } from 'react';
import { Container, Header, Text, Btn, Bottom, Main } from './styles';
import Button from '../../../Components/Button';
import nintendo from './assets/nintendo.png';
import playstation from './assets/playstation.png';

export interface PlatformWithImage {
  id: string;
  name: string;
  imageUrl: string;
}

const ChoosePlatform: React.FC = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const platforms: PlatformWithImage[] = [
    {
      id: '1',
      name: 'nintendo',
      imageUrl: nintendo,
    },
    {
      id: '2',
      name: 'playstation',
      imageUrl: playstation,
    },
    {
      id: '3',
      name: 'nintendo',
      imageUrl: nintendo,
    },
    {
      id: '4',
      name: 'nintendo',
      imageUrl: nintendo,
    },
    {
      id: '5',
      name: 'nintendo',
      imageUrl: nintendo,
    },
    {
      id: '6',
      name: 'nintendo',
      imageUrl: nintendo,
    },
    {
      id: '7',
      name: 'nintendo',
      imageUrl: nintendo,
    },
    {
      id: '8',
      name: 'nintendo',
      imageUrl: nintendo,
    },
  ];

  function toggleItem(id: string) {
    const foundIndex = selectedPlatforms.findIndex((platformId) => platformId === id);
    const newSelectedPlatforms = [...selectedPlatforms];

    if (foundIndex > -1) {
      newSelectedPlatforms.splice(foundIndex, 1);
    } else {
      newSelectedPlatforms.push(id);
    }

    setSelectedPlatforms(newSelectedPlatforms);
  }

  return (
    <Container>
      <Header>
        <Btn>
          <button>Pular</button>
        </Btn>
        <Text>
          <strong>Escolha sua plataforma</strong>
          <span>Pode ser mais de uma, ok?</span>
        </Text>
      </Header>

      <Main>
        {platforms.map((platform, index) => {
          const { id, imageUrl, name } = platform;

          const isSelected = selectedPlatforms.findIndex((platformId) => platformId === id) > -1;

          return (
            <button
              className={`button-normal ${isSelected ? 'button-selected' : ''}`}
              key={id + index}
              onClick={() => toggleItem(id)}
            >
              {/* {isSelected ? 'selected' : 'not selected'} */}
              <img src={imageUrl} alt={name} />
            </button>
          );
        })}
      </Main>

      <Bottom>
        <Button to='/community/interests' type='secondary'>
          Próximo
        </Button>
      </Bottom>
    </Container>
  );
};

export default ChoosePlatform;
