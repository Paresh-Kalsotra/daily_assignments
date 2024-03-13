import React from "react";
import Card from "./Card";

const carslist = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg/400px-Mercedes_R_350_CDI_4MATIC_Lang_%28V251%29_Facelift_front_20101017.jpg",
    title: "Mercedes-Benz R-Class",
    class: "Full-size CUV / Large MPV",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Mercedes_300SL_Coupe_vr_silver_EMS.jpg/400px-Mercedes_300SL_Coupe_vr_silver_EMS.jpg",
    title: "Mercedes-Benz 300 SL",
    start_production: 1952,
    class: "Sports car, GT",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Mercedes-Benz_230_SL%2C_Bj._1964_%282009-05-01%29.jpg/400px-Mercedes-Benz_230_SL%2C_Bj._1964_%282009-05-01%29.jpg",
    title: "Mercedes-Benz W113",
    start_production: 1963,
    class: "Sports car, GT",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg/400px-Mercedes-Benz_S_320_CDI_4MATIC_L_%28V_221%29_%E2%80%93_Frontansicht_%281%29%2C_30._August_2011%2C_D%C3%BCsseldorf.jpg",
    title: "Mercedes-Benz S-Class (W221)",
    start_production: 2005,
    class: "Full-size luxury car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/MB_190_SL_am_2006-07-16_%28ret_kl%29.JPG/400px-MB_190_SL_am_2006-07-16_%28ret_kl%29.JPG",
    title: "Mercedes-Benz 190 SL",
    start_production: 1955,
    class: "Grand tourer",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/2013_Mercedes-Benz_SL_550_vf.jpg/400px-2013_Mercedes-Benz_SL_550_vf.jpg",
    title: "Mercedes-Benz SL-Class (R231)",
    start_production: 2012,
    class: "Sports car, Roadster",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Mercedes-Benz_370S_1931.jpg/400px-Mercedes-Benz_370S_1931.jpg",
    title: "Mercedes-Benz W10",
    start_production: 1929,
    class: "Compact executive car",
  },
];

//later to use usestate for searching
const cars = carslist.filter((item) =>
  item.title.toLowerCase().includes("mercedes")
);

const CardContainer = () => {
  return (
    <div style={{ margin: "4%" }}>
      <h2>Our Recommendations</h2>
      <div
        style={{
          display: "flex",
          gap: "1.5%",
          overflowX: "auto",
          padding: "2% 0 2% 0",
        }}
      >
        {cars.map((car) => (
          <Card car={car} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
