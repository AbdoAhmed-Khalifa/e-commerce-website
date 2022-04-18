import "./category-item-style.scss";
const CategoryItem = ({ category }) => {
  const { title, imageUrl, size } = category;
  return (
    <div className={`category-container ${size}`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2 className="title">{title}</h2>
        <span>Shop Now</span>
      </div>
    </div>
  );
};
export default CategoryItem;
