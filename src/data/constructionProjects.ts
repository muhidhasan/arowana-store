import residentialImg from "@/assets/construction-residential.jpg";
import commercialImg from "@/assets/construction-commercial.jpg";
import infrastructureImg from "@/assets/construction-infrastructure.jpg";
import renovationImg from "@/assets/construction-renovation.jpg";
import industrialImg from "@/assets/construction-industrial.jpg";

export interface ConstructionProject {
  id: string;
  title: string;
  description: string;
  image: string;
  status: "Completed" | "Ongoing";
  category: string;
}

export const constructionProjects: ConstructionProject[] = [
  { id: "1", title: "Gulshan Residential Complex", description: "Modern 12-story residential tower with luxury amenities, parking, and community spaces.", image: residentialImg, status: "Completed", category: "Residential" },
  { id: "2", title: "Motijheel Office Tower", description: "Class-A commercial office building with smart building technology and green certification.", image: commercialImg, status: "Completed", category: "Commercial" },
  { id: "3", title: "Dhaka-Chittagong Highway Overpass", description: "Major infrastructure project — steel and concrete overpass improving traffic flow on national highway.", image: infrastructureImg, status: "Ongoing", category: "Infrastructure" },
  { id: "4", title: "Banani Shopping Mall Renovation", description: "Complete interior and exterior renovation of a major shopping mall with modern design elements.", image: renovationImg, status: "Completed", category: "Renovation" },
  { id: "5", title: "Gazipur Industrial Warehouse", description: "Large-scale industrial warehouse facility with loading docks, climate control, and security systems.", image: industrialImg, status: "Ongoing", category: "Industrial" },
];
