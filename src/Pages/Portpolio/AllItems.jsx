import React from "react";
import Item from "./Item";
import Data from './Data'

function AllItems() {
  return (
    <>
      <section class="portfolio__section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="portfolio__wrapper">
                {
                  Data.map((val) => {
                    return (
                      <Item 
                        img = {val.img}
                        title = {val.title}
                        url = {val.url}
                      />
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllItems;
