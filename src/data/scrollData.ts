export interface WorkSample {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

export const workSamples: WorkSample[] = [
  {
    id: 1,
    title: "Mountain Landscape",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&q=80&w=1200",
    tags: ["nature", "mountain", "landscape"],
  },
  {
    id: 2,
    title: "Urban Architecture",
    image: "https://images.unsplash.com/photo-1514565131-fce0801e5785",
    tags: ["city", "building", "modern"],
  },
  {
    id: 3,
    title: "Ocean Sunset",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    tags: ["ocean", "sunset", "beach"],
  },
  {
    id: 4,
    title: "Forest Trail",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    tags: ["forest", "nature", "hiking"],
  },
  {
    id: 5,
    title: "Desert Dunes",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
    tags: ["desert", "sand", "landscape"],
  },
  {
    id: 6,
    title: "Winter Mountains",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22",
    tags: ["winter", "snow", "mountain"],
  },
];
