import Thumbnail from "./Thumbnail";
import ScrollContainer from "react-indiana-drag-scroll";
const Collection = ({ results, title, type }) => {
  return (
    <div className="section">
      <h2 className="font-semibold ">{title}</h2>
      <ScrollContainer className="collection">
        {results.map((item) => (
          <Thumbnail key={item.id} result={item} type={type} />
        ))}
      </ScrollContainer>
    </div>
  );
};

export default Collection;
