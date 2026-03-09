import salmonImg from "@/assets/fish-salmon.jpg";
import tunaImg from "@/assets/fish-tuna.jpg";
import hilsaImg from "@/assets/fish-hilsa.jpg";
import carpImg from "@/assets/fish-carp.jpg";
import seabassImg from "@/assets/fish-seabass.jpg";
import shrimpImg from "@/assets/fish-shrimp.jpg";
import crabImg from "@/assets/fish-crab.jpg";
import lobsterImg from "@/assets/fish-lobster.jpg";
import codImg from "@/assets/fish-cod.jpg";
import mackerelImg from "@/assets/fish-mackerel.jpg";

export interface FishProduct {
  id: string;
  name: string;
  origin: string;
  pricePerKg: number;
  stock: number;
  image: string;
  type: string;
}

export const fishProducts: FishProduct[] = [
  { id: "1", name: "Salmon", origin: "Japan", pricePerKg: 28.50, stock: 150, image: salmonImg, type: "Fish" },
  { id: "2", name: "Tuna", origin: "Thailand", pricePerKg: 32.00, stock: 120, image: tunaImg, type: "Fish" },
  { id: "3", name: "Hilsa", origin: "India", pricePerKg: 18.75, stock: 80, image: hilsaImg, type: "Fish" },
  { id: "4", name: "Carp", origin: "China", pricePerKg: 12.50, stock: 200, image: carpImg, type: "Fish" },
  { id: "5", name: "Sea Bass", origin: "Thailand", pricePerKg: 24.00, stock: 90, image: seabassImg, type: "Fish" },
  { id: "6", name: "Shrimp", origin: "India", pricePerKg: 22.00, stock: 300, image: shrimpImg, type: "Shellfish" },
  { id: "7", name: "Crab", origin: "Japan", pricePerKg: 35.00, stock: 60, image: crabImg, type: "Shellfish" },
  { id: "8", name: "Lobster", origin: "Thailand", pricePerKg: 55.00, stock: 40, image: lobsterImg, type: "Shellfish" },
  { id: "9", name: "Cod", origin: "Japan", pricePerKg: 20.00, stock: 110, image: codImg, type: "Fish" },
  { id: "10", name: "Mackerel", origin: "China", pricePerKg: 14.00, stock: 180, image: mackerelImg, type: "Fish" },
];

export const countries = ["All", "Japan", "Thailand", "India", "China"];
export const fishTypes = ["All", "Fish", "Shellfish"];
