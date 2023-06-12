import { Button } from "@chakra-ui/react";

import { whatsapp } from "@/config";

export const WhatsappButton = () => {
  return (
    <Button
      as="a"
      href={`whatsapp://send?text=${whatsapp.message}&phone=${whatsapp.phone}`}
    >
      Book a tour
    </Button>
  );
};
