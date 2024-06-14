import { DialogActions } from "./DialogActions";
import figma from "@figma/code-connect";

figma.connect(
  DialogActions,
  "https://www.figma.com/design/5NZXEPP8xEkOVu4nUd6fCs/Demo_-Dev-mode?node-id=740-14752",
  {
    props: { children: figma.children(["Button"]) },
    example: (props) => <DialogActions>{props.children}</DialogActions>,
  }
);
