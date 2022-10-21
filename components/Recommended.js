import ScrollContainer from "react-indiana-drag-scroll";
import Thumbnail from "./Thumbnail";

function Recommended({ recommended, type }) {
  return (
    <div>
      <h2 className="font-semibold text-2xl  ">Recommended</h2>
      <hr />
      <ScrollContainer id="box" className="collection scroll-container mt-5">
        {recommended.results &&
          recommended.results.map((item) => (
            <Thumbnail key={item.id} result={item} type={type} />
          ))}
      </ScrollContainer>
    </div>
  );
}

export default Recommended;
