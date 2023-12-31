import { FC } from "react";
import { Link } from "react-router-dom";
import { IPost } from "../pages/main";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ko from "date-fns/locale/ko";

interface PostCardProps {
  index: number;
  post: IPost;
}

const PostCard: FC<PostCardProps> = ({ index, post }) => {
  return (
    <Link
      to={`/${post.id}?title=${post.title}&user-account=${post.user.account}&created-at=${post.createdAt}&content=${post.content}`}
    >
      <li
        className={`flex justify-between ${
          index % 2 ? "bg-gray-300" : "bg-white"
        }`}
      >
        <span className="w-2/12 p-2 text-right">{post.id}</span>
        <span className="w-6/12 p-2">{post.title}</span>
        <span className="w-2/12 p-2 text-center">{post.user.account}</span>
        <span className="w-2/12 p-2 text-center">
          {formatDistanceToNow(new Date(post.createdAt), {
            locale: ko,
            addSuffix: true, // ~전 표시
          })}
        </span>
      </li>
    </Link>
  );
};

export default PostCard;
