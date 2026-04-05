export interface FrozenProduct {
  id: string;
  name: string;
  localName?: string;
  category: string;
  description: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  products: FrozenProduct[];
}

export const frozenSeafoodCategories: ProductCategory[] = [
  {
    id: "crustaceans",
    name: "Premium Crustaceans (Shrimp & Prawns)",
    products: [
      { id: "c1", name: "Black Tiger Shrimp", localName: "Bagda", category: "Premium Crustaceans", description: "Wild-caught and farm-raised Black Tiger Shrimp, individually quick frozen. Available in head-on, headless, peeled & deveined forms. Sizes range from U5 to 41/50." },
      { id: "c2", name: "Freshwater Giant Prawn", localName: "Galda", category: "Premium Crustaceans", description: "Premium freshwater giant prawns sourced from Bangladesh's rivers and farms. IQF processed, available in various grades and sizes." },
      { id: "c3", name: "Vannamei White Shrimp", category: "Premium Crustaceans", description: "Farm-raised Vannamei shrimp processed under strict HACCP standards. Available in shell-on, PUD, and PD forms." },
      { id: "c4", name: "Harina Shrimp", category: "Premium Crustaceans", description: "Small-sized wild-caught shrimp, cleaned and frozen. Popular for its delicate texture and sweet flavor." },
    ],
  },
  {
    id: "hilsa",
    name: "The Iconic Hilsa (Ilish)",
    products: [
      { id: "h1", name: "Hilsa", localName: "Ilish", category: "The Iconic Hilsa", description: "Bangladesh's national fish — premium Hilsa sourced from the Padma and Meghna rivers. Whole round frozen, available year-round. Rich in Omega-3 fatty acids." },
    ],
  },
  {
    id: "freshwater",
    name: "Indigenous Freshwater Fish",
    products: [
      { id: "f1", name: "Rohu", localName: "Rui", category: "Indigenous Freshwater Fish", description: "One of the most popular freshwater fish in South Asia. Whole cleaned and frozen, ideal for curries and grilling." },
      { id: "f2", name: "Catla", category: "Indigenous Freshwater Fish", description: "Large freshwater carp with firm white flesh. Whole cleaned, gutted, and IQF processed." },
      { id: "f3", name: "Mrigal", category: "Indigenous Freshwater Fish", description: "Mild-flavored freshwater fish, popular across the Indian subcontinent. Frozen whole cleaned." },
      { id: "f4", name: "Kalibaush", category: "Indigenous Freshwater Fish", description: "Dark-scaled carp prized for its rich flavor. Whole frozen, cleaned and gutted." },
      { id: "f5", name: "Pangasius", category: "Indigenous Freshwater Fish", description: "Farm-raised Pangasius, available as whole fish or boneless fillets. Widely exported globally." },
      { id: "f6", name: "Shing", category: "Indigenous Freshwater Fish", description: "Small stinging catfish with distinctive taste. Cleaned and frozen, a delicacy in South Asian cuisine." },
      { id: "f7", name: "Magur", category: "Indigenous Freshwater Fish", description: "Walking catfish known for its high protein content. Whole cleaned and quick frozen." },
      { id: "f8", name: "Pabda", category: "Indigenous Freshwater Fish", description: "Butter catfish with smooth texture and mild flavor. Premium grade, cleaned and IQF frozen." },
      { id: "f9", name: "Gulsha", category: "Indigenous Freshwater Fish", description: "Small striped catfish, highly sought after for its delicate taste. Cleaned and frozen." },
      { id: "f10", name: "Tengra", category: "Indigenous Freshwater Fish", description: "Mystus catfish popular in Bengali cuisine. Whole cleaned and individually frozen." },
      { id: "f11", name: "Boal", category: "Indigenous Freshwater Fish", description: "Large predatory freshwater fish with firm, boneless flesh. Steaks and whole frozen available." },
      { id: "f12", name: "Bacha", category: "Indigenous Freshwater Fish", description: "River catfish with elongated body. Cleaned, frozen whole, prized in traditional dishes." },
    ],
  },
  {
    id: "marine",
    name: "Bay of Bengal Marine Fish",
    products: [
      { id: "m1", name: "Silver Pomfret", localName: "Rupchanda", category: "Bay of Bengal Marine Fish", description: "Premium silver pomfret from the Bay of Bengal. Whole frozen, known for its flat body and rich taste." },
      { id: "m2", name: "Black Pomfret", category: "Bay of Bengal Marine Fish", description: "Deep-sea black pomfret, whole cleaned and frozen. Firm texture ideal for grilling and frying." },
      { id: "m3", name: "Chinese Pomfret", category: "Bay of Bengal Marine Fish", description: "Large-sized pomfret variety with tender white flesh. Whole frozen, export quality." },
      { id: "m4", name: "Barramundi", localName: "Koral/Vetki", category: "Bay of Bengal Marine Fish", description: "Premium sea bass caught from coastal waters. Whole and fillet forms available, IQF processed." },
      { id: "m5", name: "Indian Salmon", localName: "Lakkha", category: "Bay of Bengal Marine Fish", description: "Large marine fish with pink flesh. Available as whole frozen or steak cuts." },
      { id: "m6", name: "Croaker", localName: "Poaa", category: "Bay of Bengal Marine Fish", description: "Popular marine fish known for its soft texture. Whole cleaned and frozen." },
      { id: "m7", name: "Bombay Duck", localName: "Loitta", category: "Bay of Bengal Marine Fish", description: "Unique marine fish, cleaned and frozen. A staple in coastal cuisine, exported in bulk quantities." },
      { id: "m8", name: "Ribbon Fish", localName: "Churi", category: "Bay of Bengal Marine Fish", description: "Long, silver-colored marine fish. Whole frozen, popular in East and Southeast Asian markets." },
      { id: "m9", name: "Queen Fish", category: "Bay of Bengal Marine Fish", description: "Sport and commercial fish from tropical waters. Whole frozen with firm, white meat." },
      { id: "m10", name: "Threadfin", category: "Bay of Bengal Marine Fish", description: "Prized marine fish with thread-like pectoral fins. Whole frozen, excellent table fish." },
    ],
  },
  {
    id: "specialty",
    name: "Specialty Seafood",
    products: [
      { id: "s1", name: "Mud Crab", category: "Specialty Seafood", description: "Live-caught mud crabs, flash frozen to preserve freshness. Available in various size grades for export." },
      { id: "s2", name: "Soft Shell Crab", category: "Specialty Seafood", description: "Whole soft shell crabs, cleaned and individually quick frozen. Ready to cook, popular in Asian and Western cuisine." },
      { id: "s3", name: "Freshwater Eel", localName: "Kuchia", category: "Specialty Seafood", description: "Wild-caught freshwater eel, cleaned and frozen. High demand in East Asian markets." },
      { id: "s4", name: "Marine Eel", category: "Specialty Seafood", description: "Deep-sea eel variety, processed and frozen. Available in whole and cut forms." },
      { id: "s5", name: "Squid", category: "Specialty Seafood", description: "Whole cleaned squid from the Bay of Bengal. IQF processed, available in tubes, rings, and whole forms." },
      { id: "s6", name: "Baby Squid", category: "Specialty Seafood", description: "Small-sized whole squid, cleaned and frozen. Tender texture, ideal for quick cooking." },
      { id: "s7", name: "Cuttlefish", category: "Specialty Seafood", description: "Whole cleaned cuttlefish, IQF frozen. Available in various sizes for international markets." },
    ],
  },
];
