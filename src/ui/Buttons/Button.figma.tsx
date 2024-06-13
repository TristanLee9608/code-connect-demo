import React from "react";
import { Button } from "./Button";
import figma from "@figma/code-connect";

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Button,
  "https://www.figma.com/design/FWP4qKe7Oy84XvW5wKRjGa/Demo?node-id=9215-9074&m=dev",
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
