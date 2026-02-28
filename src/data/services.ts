import {
  Scissors,
  Paintbrush,
  Sparkles,
  Wind,
  UserRound,
  Baby,
  Droplets,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  name: string;
  desc: string;
  icon: LucideIcon;
  category: string;
}

export interface ServiceCategory {
  name: string;
  desc: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  { name: "Men's Haircut", desc: "Classic or modern cuts tailored to you.", icon: Scissors, category: "Haircuts" },
  { name: "Women's Haircut", desc: "Precision cuts for all hair types.", icon: Scissors, category: "Haircuts" },
  { name: "Kids Haircut", desc: "Fun, stress-free cuts for kids.", icon: Baby, category: "Kids Cuts" },
  { name: "Beard Trim", desc: "Sharp, clean beard shaping.", icon: UserRound, category: "Beard Trims" },
  { name: "Hair Color", desc: "Full color services, any shade.", icon: Paintbrush, category: "Color & Highlights" },
  { name: "Highlights", desc: "Foil or cap highlights for dimension.", icon: Paintbrush, category: "Color & Highlights" },
  { name: "Balayage", desc: "Hand-painted, natural-looking color.", icon: Sparkles, category: "Balayage" },
  { name: "Perm", desc: "Modern texture and volume.", icon: Wind, category: "Perms" },
  { name: "Deep Conditioning", desc: "Restore health and shine.", icon: Droplets, category: "Deep Conditioning" },
];

export const serviceCategories: ServiceCategory[] = [
  { name: "Haircuts", desc: "Precision cuts tailored to your style.", icon: Scissors },
  { name: "Color & Highlights", desc: "Vibrant color that lasts.", icon: Paintbrush },
  { name: "Balayage", desc: "Hand-painted, natural-looking color.", icon: Sparkles },
  { name: "Perms", desc: "Modern texture and volume.", icon: Wind },
  { name: "Beard Trims", desc: "Sharp, clean beard shaping.", icon: UserRound },
  { name: "Kids Cuts", desc: "Fun, stress-free cuts for little ones.", icon: Baby },
];
