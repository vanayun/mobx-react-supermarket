import React from 'react';
import SuperMarketTemplate from './SuperMarketTemplate';
import ShopItemList from './ShopItemList';
import BasketItemList from './BasketItemList';
import TotalPrice from './TotalPrice';

const SuperMarket = () => {
  return (
    <SuperMarketTemplate 
      item={<ShopItemList></ShopItemList>} 
      basket={<BasketItemList></BasketItemList>}
      total={<TotalPrice></TotalPrice>}
    >
    </SuperMarketTemplate>
  )
}

export default SuperMarket;