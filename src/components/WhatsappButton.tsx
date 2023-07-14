import { Button, ButtonProps } from "@chakra-ui/react";

import { whatsapp } from "@/config";

export const WhatsappButton = (props: ButtonProps) => {
  return (
    <Button
      as="a"
      href={`whatsapp://send?text=${whatsapp.message}&phone=${whatsapp.phone}`}
      bg="secondary.3"
      color="white"
      {...props}
    ></Button>
  );
};
