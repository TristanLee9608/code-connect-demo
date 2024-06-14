import { Dialog } from "./Dialog";
import figma from "@figma/code-connect";

figma.connect(
  Dialog,
  "https://www.figma.com/design/5NZXEPP8xEkOVu4nUd6fCs/Demo_-Dev-mode?node-id=724-2074",
  {
    props: {
      children: figma.boolean("Actions", {
        true: figma.children(["Dialog Content", "Dialog Actions"]),
        false: figma.children(["Dialog Content"]),
      }),
    },
    example: (props) => <Dialog>{props.children}</Dialog>,
  }
);
