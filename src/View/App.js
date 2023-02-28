import "./App.scss";
import data from "./../data.json";
import headerImage from "./../Images/header.jpg";

function App() {
  const handleClick = (url) => {
    window.open(url);
  };
  const mapData = () => {
    return data.map((value, index) => {
      return (
        <tr key={index} onClick={() => handleClick(value.url)}>
          <td className="name">
            <img
              src={value.avatar}
              alt={value.name + " avatar"}
              className="avatar"></img>
            <span>{value.name}</span>
          </td>
          <td>
            <p>{value.name}</p>
          </td>
          <td>{value.description}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <div className="header">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Website</th>
              <th>Đường dẫn</th>
              <th>Mô tả</th>
            </tr>
          </thead>
          <tbody>{mapData()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
