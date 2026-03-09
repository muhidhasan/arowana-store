import residentialImg from "@/assets/construction-residential.jpg";
import commercialImg from "@/assets/construction-commercial.jpg";
import infrastructureImg from "@/assets/construction-infrastructure.jpg";
import renovationImg from "@/assets/construction-renovation.jpg";
import industrialImg from "@/assets/construction-industrial.jpg";

export interface ConstructionService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
}

export const constructionServices: ConstructionService[] = [
  {
    id: "1",
    title: "Residential Construction",
    shortDescription: "Custom homes, apartments, and residential complexes built to the highest standards.",
    fullDescription: "We specialize in building custom homes, luxury apartments, and residential complexes. Our team of experienced architects and engineers work closely with clients to deliver dream homes that combine modern design with structural excellence. From foundation to finishing, every detail is carefully planned and executed to ensure lasting quality and comfort.",
    image: residentialImg,
  },
  {
    id: "2",
    title: "Commercial Building",
    shortDescription: "Office spaces, retail centers, and commercial complexes for modern businesses.",
    fullDescription: "Our commercial construction division handles everything from modern office buildings to large-scale retail centers. We understand the unique requirements of commercial spaces — efficient layouts, sustainable materials, and compliance with all building codes. We deliver projects on time and within budget, ensuring your business has the perfect space to thrive.",
    image: commercialImg,
  },
  {
    id: "3",
    title: "Infrastructure Development",
    shortDescription: "Roads, bridges, and public infrastructure projects with precision engineering.",
    fullDescription: "Arowana International is licensed to undertake large-scale infrastructure projects including road construction, bridge building, drainage systems, and public utilities. Our engineering team uses cutting-edge technology and materials to build infrastructure that serves communities for decades. We have successfully completed projects across multiple regions.",
    image: infrastructureImg,
  },
  {
    id: "4",
    title: "Renovation & Interior Design",
    shortDescription: "Transform existing spaces with modern renovation and interior design solutions.",
    fullDescription: "Breathe new life into existing properties with our renovation and interior design services. Whether it's a complete home makeover, office redesign, or historic building restoration, our creative team delivers stunning transformations. We combine aesthetic excellence with practical functionality to create spaces that inspire.",
    image: renovationImg,
  },
  {
    id: "5",
    title: "Industrial Construction",
    shortDescription: "Warehouses, factories, and industrial facilities built for performance.",
    fullDescription: "Our industrial construction services cover warehouses, manufacturing plants, storage facilities, and specialized industrial structures. We understand the critical requirements of industrial spaces — load-bearing capacity, ventilation, safety standards, and operational efficiency. Every project is engineered for maximum performance and durability.",
    image: industrialImg,
  },
];
