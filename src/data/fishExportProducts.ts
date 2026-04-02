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

export interface FishExportProduct {
  id: string;
  name: string;
  category: "Arowana Fish" | "Aquarium Fish" | "Export Ready Fish";
  description: string;
  image: string;
  origin: string;
}

export const fishExportProducts: FishExportProduct[] = [
  { id: "1", name: "Super Red Arowana", category: "Arowana Fish", description: "Premium grade Super Red Arowana, bred for vivid coloration and excellent health. Export certified with all documentation.", image: salmonImg, origin: "Bangladesh" },
  { id: "2", name: "Golden Crossback Arowana", category: "Arowana Fish", description: "Highly sought-after Golden Crossback variety with full gold scales. CITES certified for international trade.", image: tunaImg, origin: "Bangladesh" },
  { id: "3", name: "Silver Arowana", category: "Arowana Fish", description: "Classic Silver Arowana known for graceful movement and hardy nature. Available in various sizes for export.", image: hilsaImg, origin: "Bangladesh" },
  { id: "4", name: "Flowerhorn Cichlid", category: "Aquarium Fish", description: "Vibrant Flowerhorn Cichlid with prominent nuchal hump. Popular aquarium fish exported worldwide.", image: carpImg, origin: "Bangladesh" },
  { id: "5", name: "Discus Fish", category: "Aquarium Fish", description: "King of the aquarium — premium Discus fish in multiple color variants. Carefully packaged for live export.", image: seabassImg, origin: "Bangladesh" },
  { id: "6", name: "Oscar Fish", category: "Aquarium Fish", description: "Hardy and intelligent Oscar fish in Tiger and Albino varieties. Popular choice for aquarium enthusiasts globally.", image: shrimpImg, origin: "Bangladesh" },
  { id: "7", name: "Pangasius (Basa)", category: "Export Ready Fish", description: "Farm-raised Pangasius fillets and whole fish. Processed, frozen, and packaged for bulk export.", image: crabImg, origin: "Bangladesh" },
  { id: "8", name: "Hilsa (Ilish)", category: "Export Ready Fish", description: "Bangladesh's national fish — premium Hilsa sourced from the Padma river. Frozen and export-packaged.", image: lobsterImg, origin: "Bangladesh" },
  { id: "9", name: "Black Tiger Shrimp", category: "Export Ready Fish", description: "Premium cultivated Black Tiger Shrimp meeting international quality standards. HACCP certified processing.", image: codImg, origin: "Bangladesh" },
  { id: "10", name: "Freshwater Prawn (Golda)", category: "Export Ready Fish", description: "Giant freshwater prawns from sustainable aquaculture. Individually quick frozen for export.", image: mackerelImg, origin: "Bangladesh" },
];

export const fishCategories = ["All", "Arowana Fish", "Aquarium Fish", "Export Ready Fish"];
