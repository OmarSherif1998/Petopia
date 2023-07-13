interface BlogCardsIcons {
  PeopleIcon: React.ElementType;
  CalenderIcon: React.ElementType;
  image: string;
  title: string;
  desc: string;
  date: string;
  author: string;
}
const BlogCards: React.FC<BlogCardsIcons> = ({
  PeopleIcon,
  CalenderIcon,
  title,
  image,
  desc,
  date,
  author,
}) => {
  return (
    <div className=" flex flex-col items-center gap-3 cursor-pointer border border-purple-600 p-2 hover:bg-purple-600 hover:text-white">
      <div>
        <img src={require(`../../images/${image}`)} alt="" />
      </div>
      <div className="flex gap-3">
        <PeopleIcon />
        <p>{author}</p>
        <CalenderIcon />
        <p>{date}</p>
      </div>
      <div className=" w-96">
        <p className=" font-Nunito font-bold text-2xl">{title}</p>
        <p className=" font-Lato text-lg font-normal leading-7">{desc}</p>
      </div>
    </div>
  );
};

export default BlogCards;
