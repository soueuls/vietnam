import { List, ListItem, ListIcon } from "@chakra-ui/react";

import { BulletIcon } from "@/components/icons";

export const Arguments = () => {
  return (
    <List spacing="6">
      <ListItem fontSize="2xl">
        <ListIcon as={BulletIcon} boxSize="8" color="secondary.3" />
        We are a small, friendly company, trying to do good for our local
        communities.
      </ListItem>
      <ListItem fontSize="2xl">
        <ListIcon as={BulletIcon} boxSize="8" color="secondary.3" />
        We can afford some flexibility to give you the best possible experience
        (taking special requests).
      </ListItem>
      <ListItem fontSize="2xl">
        <ListIcon as={BulletIcon} boxSize="8" color="secondary.3" />
        If you are truly unsatisfied, we will refund you.{" "}
        <b>No questions asked!</b>
      </ListItem>
    </List>
  );
};
