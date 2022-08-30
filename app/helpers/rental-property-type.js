import { helper } from "@ember/component/helper";

const communityPropertyTypes = ["Condo", "Townhouse", "Apartment"];

export function rentalPropertyType([propetyType]) {
  if (communityPropertyTypes.includes(propetyType)) {
    return "Communinty";
  }
  return "Standalone";
}

export default helper(rentalPropertyType);
