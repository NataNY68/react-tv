import "./shows.css";

/** A navbar that allows users to choose between a list of shows */
export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((eachShow) => {
        return (
          <a
            className="show"
            key={eachShow.name}
            onClick={() => {
              setSelectedShow(eachShow);
            }}
          >
            {eachShow.name}
          </a>
        );
      })}
    </nav>
  );
}
