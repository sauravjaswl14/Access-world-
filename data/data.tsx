interface Service {
  id: number;
  icon: string;
  name: string;
  desc: string;
}

interface ServiceProps {
  id: number;
  icon: string;
  name: string;
  desc: {
    services: Service[];
  };
}
interface Services {}
const data: ServiceProps = {
  id: 1,
  icon: "../img/new/compute.png",
  name: "Compute",
  desc: {
    services: [
      {
        id: 1,
        icon: "./img/icons/cloud-server-icon.png",
        name: "Cloud Server",
        desc: "Robust cloud architecture that delivers the perfect balance of speed and reliability",
      },
      {
        id: 2,
        icon: "",
        name: "Private Cloud",
        desc: "Secured and controlled hosting environment with redundant power and internet connections, technical support and on site maintainance",
      },
    ],
  },
};
