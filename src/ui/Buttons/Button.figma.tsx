import { Button } from "./Button";
import figma from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/5NZXEPP8xEkOVu4nUd6fCs/Demo_-Dev-mode?node-id=724-1834",
  {
    props: {
      iconEndInstance: figma.instance("↳ Icon End Instance"),
      iconStartInstance: figma.instance("↳ Icon Start Instance"),
      label: figma.string("Label"),
      iconEnd: figma.boolean("Icon End"),
      iconStart: figma.boolean("Icon Start"),
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Primary: "primary",
        Secondary: "secondary",
      }),
      state: figma.enum("* State", {
        Active: "active",
        Default: "default",
        Disabled: "disabled",
        Focus: "focus",
        Hover: "hover",
      }),
      size: figma.enum("Size", {
        Medium: "medium",
        Small: "small",
      }),
    },
    example: (props) => (
      <Button
        variant={props.variant}
        state={props.state}
        size={props.size}
        iconStart={props.iconStart}
        iconEnd={props.iconEnd}
        iconStartInstance={props.iconStartInstance}
        iconEndInstance={props.iconEndInstance}
      >
        {props.label}
      </Button>
    ),
  }
);