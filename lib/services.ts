import { services } from "../data/services";
import type { Service } from "@/types";

export { services };

export type ServiceItem = Service;
export type ServiceCategory = Service;

export function getServiceData(id: string) {
  const service = services.find((item) => item.id === id);

  if (service) {
    return {
      title: service.title,
      content: service.description,
    };
  }

  return {
    title: id
      .split("-")
      .map((segment) => segment[0]?.toUpperCase() + segment.slice(1))
      .join(" "),
    content: `Learn more about our ${id.replace(/-/g, " ")} services and contact us for availability.`,
  };
}
