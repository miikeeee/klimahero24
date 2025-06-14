
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface RatgeberHeaderProps {
  onCTAClick: () => void;
}

const RatgeberHeader = ({ onCTAClick }: RatgeberHeaderProps) => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold text-blue-600">
          <a href="/">badhelden24</a>
        </div>
        <Button 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105"
          onClick={onCTAClick}
        >
          <Phone className="w-4 h-4 mr-2" />
          Beratung anfragen
        </Button>
      </div>
    </header>
  );
};

export default RatgeberHeader;
