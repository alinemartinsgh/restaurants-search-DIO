import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field/dist/index';
import MaterialIcon from '@material/react-material-icon/dist/index';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Container, Search, Logo, Wrapper, Map, CarousselTitle, Caroussel } from './styles';
import { Card, RestaurantCard, Modal } from '../../components';

const Home = () => {
  const [inputValue, setInputValue] = useState();
  const [modalOpenned, setModalOpenned] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onchange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarousselTitle>Na sua Área</CarousselTitle>
          <Caroussel {...settings}>
            <Card photo={restaurante} title="restaurante" />
            <Card photo={restaurante} title="restaurante" />
            <Card photo={restaurante} title="restaurante" />
            <Card photo={restaurante} title="restaurante" />
          </Caroussel>
          <button onClick={() => setModalOpenned(true)}>Abrir modal</button>
        </Search>
        <RestaurantCard />
      </Container>
      <Map />
      <Modal open={modalOpenned} onClose={() => setModalOpenned(!modalOpenned)} />
    </Wrapper>
  );
};

export default Home;
