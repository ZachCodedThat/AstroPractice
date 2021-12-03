import Serialize from "../utils/serializeSlateToJsx";

const PostPage = ({ post }) => {
  const { title, image, date, body, id } = post;
  return (
    <body>
      <h1>
        {id}: {title}: {date}
      </h1>

      <div>{body.map((node) => Serialize(node))}</div>
    </body>
  );
};

export default PostPage;
