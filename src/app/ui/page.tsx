import { navLinks } from "@/app/ui/components/Navigation/data";
import { NavigationList } from "@/app/ui/components/Navigation";

export default function NavigationPage() {
  return <NavigationList navLinks={navLinks} />;
}
