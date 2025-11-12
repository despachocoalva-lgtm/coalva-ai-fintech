import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const TermsAndConditions = () => {
  return (
    <Button asChild variant="link" className="text-muted-foreground hover:text-primary text-sm p-0 h-auto">
      <Link to="/terminos-y-condiciones">
        Términos y Condiciones
      </Link>
    </Button>
  );
};
