import supabase from "../utils/initSupabase.js";

const posts = await supabase.from("blogPosts").select();

const Post = () => {
  const data = posts.data;

  return (
    <div>
      {data.map((post) => (
        <div
          class="border-solid border-4 border-light-blue-500 rounded-lg max-w-lg container mx-auto m-5 px-8"
          key={post.id}
        >
          <h1 class="text-xl font-semibold p-1">{post.title}</h1>
          <span class="w-full bg-">{post.date}</span>

          <img class="rounded-md" src={post.image} alt="Test Image" />
          <a href={`/blog/${post.slug}`}>
            <button>Read More</button>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Post;
