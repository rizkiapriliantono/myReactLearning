import React from 'react';
import BodyItems from './bodyItems.js';

function Body({ informationDetailData }) {
  return (
    <section className="flex flex-col py-16">
      <div className="container mx-auto mb-4">
        <div className="flex justify-center text-center mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            Just Arrived <br className="" />
            this summer for you
          </h3>
        </div>
      </div>
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        <div className="flex -mx-4 flex-row relative">
          {informationDetailData && Array.isArray(informationDetailData) && informationDetailData.map((item, index) => (
            <BodyItems key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Body;
