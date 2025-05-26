import React from "react";

import Header from "../components/header/Header";

import TabDiv from "../components/common/custom-elements/TabDiv";
import PaginationBox from "../components/common/custom-elements/PaginationBox";
import ButtonCatalog from "../components/common/custom-elements/buttons/ButtonCatalog";

const Sample: React.FC = () => {
  return <>
    <Header />
    <div className="mt-25 w-full h-full">
      <TabDiv className="w-full h-full">
        <div data-label="Tab 1" className="w-full h-full flex">
          <PaginationBox>
            <div className="w-full h-full flex">
              <ButtonCatalog 
                imageUrl="/path/to/product1.png"
                hoverImageUrl="/path/to/product1-hover.png"
                title="Product 1"
                shortDesc="Short description"
                price="$10.00"
              />
              <ButtonCatalog 
                imageUrl="/path/to/product1.png"
                hoverImageUrl="/path/to/product1-hover.png"
                title="Product 1"
                shortDesc="Short description"
                price="$10.00"
              />
            </div>
            <div>Content 2</div>
            <div>Content 3</div>
          </PaginationBox>
        </div>
        <div data-label="Tab 2">Content 2</div>
        <div data-label="Tab 3">Content 3</div>
      </TabDiv>
    </div>
  </>
};

export default Sample;