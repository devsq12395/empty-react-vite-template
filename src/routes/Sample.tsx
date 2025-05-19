import React from "react";

import Header from "../components/header/Header";

import TabDiv from "../components/common/custom-elements/TabDiv";
import PaginationBox from "../components/common/custom-elements/PaginationBox";

const Sample: React.FC = () => {
  return <>
    <Header />
    <div className="mt-25">
      <TabDiv>
        <div data-label="Tab 1" className="h-full">
          <PaginationBox>
            <div>Content 1</div>
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