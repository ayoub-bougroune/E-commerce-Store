/* eslint-disable react/no-children-prop */
import React from 'react';
import { ShoppingList } from "./ShoppingList";
import { Subscribe } from "./Subscribe";
import { MainCarousel } from "./MainCarousel";

export type IHomeProps = {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div className="home">
      <MainCarousel children={undefined} />
      <ShoppingList />
      <Subscribe />
    </div>
  );
}

export { Home };