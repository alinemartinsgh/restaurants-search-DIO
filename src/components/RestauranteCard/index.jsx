import React from 'react';
import ReactStars from 'react-rating-stars-component';

import { Restaurant, RestaurantInfo, Title, Address, RestaurantPhoto } from './styles';

import restaurante from '../../assets/restaurante-fake.png'

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReactStars count={5} isHalf value={4} activeColor="#e7711c" edit={false} />
      <Address>endereço</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="imagem do restaurante" />
  </Restaurant>
);

export default RestaurantCard;
