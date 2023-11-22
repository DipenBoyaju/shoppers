import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Review (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          minima sed accusamus corporis provident rerum autem maxime non
          consequatur voluptatibus, animi distinctio culpa necessitatibus,
          placeat dicta a! Laudantium, officiis quae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione,
          minima ducimus nihil aliquid debitis ipsa natus voluptatem consectetur
          neque tempore.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
