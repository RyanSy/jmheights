import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "cooling",
    icon: "Wind",
    title: "Cooling",
    description:
      "From central AC to ductless mini-splits, we install, repair, tune up, and maintain every type of cooling system — keeping North Jersey homes and businesses comfortable all summer long.",
    features: [
      "Central & rooftop AC installation, repair & tune-up",
      "Ductless mini-split systems",
      "Air handler & evaporator coil services",
      "Filter replacements",
      "Refrigerant leak detection & repair",
    ],
  },
  {
    id: "heating",
    icon: "Flame",
    title: "Heating",
    description:
      "Whether it's a boiler, furnace, or heat pump, our technicians handle installation, maintenance, repair, and full replacement — so you're never left in the cold.",
    features: [
      "Boiler installation, maintenance & repair",
      "Furnace & heater installation & replacement",
      "Heat pump services",
      "Emergency heating repair",
      "Annual maintenance plans",
    ],
  },
  {
    id: "commercial",
    icon: "Building2",
    title: "Commercial & Industrial",
    description:
      "We serve commercial and industrial clients with the same expertise and care as residential — from restaurant coolers to large-scale industrial HVAC and plumbing systems.",
    features: [
      "Commercial & industrial AC & heating",
      "Coolers & freezers",
      "Commercial & industrial plumbing",
      "Preventive maintenance contracts",
      "Emergency commercial service",
    ],
  },
  {
    id: "air-quality",
    icon: "AirVent",
    title: "Indoor Air Quality",
    description:
      "Breathe easier with professional ductwork, filtration, and air treatment solutions. We design and install systems that keep the air in your home or business clean and healthy.",
    features: [
      "Ductwork repair & installation",
      "Air cleaners & purifiers",
      "Humidifiers & dehumidifiers",
      "HEPA & media filter upgrades",
      "Duct sealing & insulation",
    ],
  },
  {
    id: "plumbing",
    icon: "Droplets",
    title: "Plumbing",
    description:
      "Licensed plumbing services for residential and commercial properties. From routine repairs to full system installations — one contractor for your HVAC and plumbing needs.",
    features: [
      "Residential & commercial plumbing",
      "Water heater installation & repair",
      "Pipe repair & replacement",
      "Drain cleaning & maintenance",
      "Emergency plumbing service",
    ],
  },
  {
    id: "specialized",
    icon: "Settings",
    title: "Specialized Services",
    description:
      "With an on-staff mechanical engineer, we offer custom system design, heat loss/gain calculations, and full electrical wiring for installs — capabilities most HVAC companies simply don't have.",
    features: [
      "Custom system design & builds",
      "On-staff mechanical engineer",
      "Heat loss/gain calculations",
      "Wiring & electrical for installs",
      "Permit & inspection assistance",
    ],
  },
];
