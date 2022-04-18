import "./directory-style.scss";
import CategoryItem from "../category-item/category-item-component";

const Directory = ({ catogaries }) => {
  return (
    <div className="directory-container">
      {catogaries.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
export default Directory;
