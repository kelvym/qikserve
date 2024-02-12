import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="relative">
      <Input type="text" placeholder="Search menu items" className="pl-12" />
      <SearchIcon className="absolute top-2.5 left-2.5" />
    </div>
  );
};
