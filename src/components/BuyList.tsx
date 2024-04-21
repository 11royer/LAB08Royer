import React from 'react';

interface BuyListProps {
  buyList: string[];
}

const BuyList: React.FC<BuyListProps> = ({ buyList }) => {
  return (
    <ul className="buy-list">
      {buyList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default BuyList;
