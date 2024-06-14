import { DialogContent } from "./DialogContent";
import figma from "@figma/code-connect";

figma.connect(
  DialogContent,
  "https://www.figma.com/design/5NZXEPP8xEkOVu4nUd6fCs/Demo_-Dev-mode?node-id=740-14751",
  {
    props: {
      headline: figma.string("Headline"),
      content: figma.string("Content"),
    },
    example: ({ headline, content }) => (
      <DialogContent
        headline={<h2>{headline}</h2>}
        content={<p>{content}</p>}
      />
    ),
  }
);