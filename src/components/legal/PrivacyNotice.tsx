import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const PrivacyNotice = () => {
  return (
    <Button asChild variant="link" className="text-muted-foreground hover:text-primary text-sm p-0 h-auto">
      <Link to="/aviso-de-privacidad">
        Aviso de Privacidad
      </Link>
    </Button>
  );
};
