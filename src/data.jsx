import photo1 from "./assets/chamonix.jpg";
import photo2 from "./assets/galapagos.jpg";
import photo3 from "./assets/iceland.jpg";

export default [
  {
    id: 1,
    title: "French Alps",
    location: "Chamonix",
    googleMapsUrl: "https://maps.app.goo.gl/h2PnacP7QCLyHErM9",
    startDate: "1 Jan, 2024",
    endDate: "26 Mar, 2024",
    description:
      "Nestled in the French Alps, Chamonix is a winter paradise. Enjoy thrilling snowboarding adventures, explore scenic trails, or unwind in cozy chalets. This picturesque town promises an unforgettable alpine escape with stunning vistas and endless outdoor activities for all.",
    image: photo1,
  },
  {
    id: 2,
    title: "Galapagos Islands",
    location: "Ecuador",
    googleMapsUrl: "https://maps.app.goo.gl/BJpXx7fd1xuGJqtR8",
    startDate: "31 Jan, 2023",
    endDate: "4 Mar, 2024",
    description:
      "The Galapagos Islands offer a unique adventure with diverse wildlife. Encounter giant tortoises, iguanas, and exotic birds on land, while snorkeling or diving reveals vibrant marine life. Enjoy hiking trails, kayak excursions, and breathtaking scenery in this unparalleled natural haven.",
    image: photo2,
  },
  {
    id: 3,
    title: "Black Sand Beach",
    location: "Iceland",
    googleMapsUrl: "https://maps.app.goo.gl/gLsxDUQo1Rvi4t8C6",
    startDate: "6 Jan, 2015",
    endDate: "15 Jan, 2015",
    description:
      "Black Sand Beach in Iceland features striking volcanic sands, dramatic basalt columns, and powerful Atlantic waves. This surreal landscape offers mesmerizing coastal views, perfect for photography, leisurely walks, and witnessing the raw beauty of nature.",
    image: photo3,
  },
];
