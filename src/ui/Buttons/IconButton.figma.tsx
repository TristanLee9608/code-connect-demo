import { IconButton } from "./IconButton";
import figma from "@figma/code-connect";

figma.connect(
  IconButton,
  "https://www.figma.com/design/5NZXEPP8xEkOVu4nUd6fCs/Demo_-Dev-mode?node-id=724-1992",
  {
    props: {
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Secondary: "secondary",
      }),
      icon: figma.instance("Icon"),
      disabled: figma.enum("* State", {
        Disabled: true,
      }),
    },
    example: ({ icon, variant }) => (
      <IconButton
        ariaLabel="Describe the action here."
        variant={variant}
        icon={icon}
        onClick={() => {}}
      />
    ),
  }
);
