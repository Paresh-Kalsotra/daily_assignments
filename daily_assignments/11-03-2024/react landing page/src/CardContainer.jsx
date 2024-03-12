import React from "react";
import Card from "./Card";

const cars = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg/400px-2015_Mazda_MX-5_ND_2.0_SKYACTIV-G_160_i-ELOOP_Rubinrot-Metallic_Vorderansicht.jpg",
    title: "Mazda MX-5",
    start_production: 1989,
    class: "Sports car Roadster",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PontiacSolstice.jpg/400px-PontiacSolstice.jpg",
    title: "Pontiac Solstice",
    start_production: 2005,
    class: "Roadster, coupe",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/1971_AMC_Javelin_SST_red_Kenosha_street.JPG/400px-1971_AMC_Javelin_SST_red_Kenosha_street.JPG",
    title: "AMC Javelin",
    start_production: 1967,
    class: "Unbulleted list,Pony car, Muscle car,",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2003-2005_Pontiac_Sunfire.jpg/400px-2003-2005_Pontiac_Sunfire.jpg",
    title: "Pontiac Sunfire",
    start_production: 1994,
    class: "Compact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Jaguar_X-Type_Estate_front_20080731.jpg/400px-Jaguar_X-Type_Estate_front_20080731.jpg",
    title: "Jaguar X-Type",
    start_production: 2001,
    class: "Compact executive car",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg/400px-Dynamixion_car_by_Buckminster_Fuller_1933_%28side_views%29.jpg",
    title: "Dymaxion car",
    start_production: 1933,
    class: "Concept car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ford_Crown_Victoria_LX.jpg/400px-Ford_Crown_Victoria_LX.jpg",
    title: "Ford Crown Victoria",
    start_production: 1955,
    class: "Full-size Ford",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/2nd-Saab-9000-hatch.jpg/400px-2nd-Saab-9000-hatch.jpg",
    title: "Saab 9000",
    start_production: 1984,
    class: "Executive car",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg/400px-VW_Phaton_%282._Facelift%29_%E2%80%93_Frontansicht%2C_7._Mai_2011%2C_D%C3%BCsseldorf.jpg",
    title: "Volkswagen Phaeton",
    start_production: 2002,
    class: "Full-size luxury car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Pontiac_G6.jpg/400px-Pontiac_G6.jpg",
    title: "Pontiac G6",
    start_production: 2004,
    class: "Midsize",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Ford500a.JPG/400px-Ford500a.JPG",
    title: "Ford Five Hundred",
    start_production: 2004,
    class: "Full-size",
  },

  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Fiat_tipo_f.jpg/400px-Fiat_tipo_f.jpg",
    title: "Fiat Tipo",
    start_production: 1988,
    class: "Small family car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/1985-89_Plymouth_Reliant_K_LE.png/400px-1985-89_Plymouth_Reliant_K_LE.png",
    title: "Plymouth Reliant",
    start_production: 1981,
    class: "Mid-size",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/1978_chevette.JPG/400px-1978_chevette.JPG",
    title: "Chevrolet Chevette",
    start_production: 1975,
    class: "Subcompact",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg/400px-Seat_Leon_1.4_TSI_Start%26Stop_Style_%28III%29_%E2%80%93_Frontansicht%2C_10._August_2013%2C_Ratingen.jpg",
    title: "SEAT León",
    class: "Small family car",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Chevrolet_Corsica_1994.jpg/400px-Chevrolet_Corsica_1994.jpg",
    title: "Chevrolet Corsica",
    start_production: 1987,
    class: "Compact car",
  },
];

const CardContainer = () => {
  return (
    <div>
      <h2 style={{ margin: "20px" }}>Our Recommendations</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
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
