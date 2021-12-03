import { Text } from "slate";

const Serialize = (node) => {
  if (Text.isText(node)) {
    let string = node.text;
    if (node.bold) {
      string = <strong key={string}>{string}</strong>;
    }

    if (node.code) {
      string = <code key={string}>{string}</code>;
    }
    if (node.italic) {
      string = <em key={string}>{string}</em>;
    }
    if (node.underline) {
      string = <u key={string}>{string}</u>;
    }

    return string;
  }

  const children = node.children.map((n) => Serialize(n));

  switch (node.type) {
    case "code":
      return (
        <div>
          <code>{children}</code>
        </div>
      );
    case "bulleted-list":
      return <li>{children}</li>;
    case "numbered-list":
      return <li>{children}</li>;
    case "list-item":
      return <li>{children}</li>;

    case "block-quote":
      return <quote>{children}</quote>;

    case "heading-one":
      return <h1>{children}</h1>;
    case "heading-two":
      return <h2>{children}</h2>;
    case "heading-three":
      return <h3>{children}</h3>;
    case "paragraph":
      return <p>{children}</p>;

    default:
      return children;
  }
};

export default Serialize;
