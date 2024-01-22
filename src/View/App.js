import './App.scss';
import data from './../Data/data.json';
function Random(min, max) {
  return Math.floor(Math.random() * max + min);
}
function App() {
  const arrayImage = [
    require('./../Images/1.jpg'),
    require('./../Images/2.jpg'),
    require('./../Images/3.jpg'),
    require('./../Images/4.jpg'),
    require('./../Images/5.png')
  ];
  var headerImage = arrayImage[Random(0, 4)];

  const handleClick = (url) => {
    window.open(url);
  };
  const mapData = () => {
    return data.map((value, index) => {
      return (
        <tr key={index} onClick={() => handleClick(value.url)}>
          <td className="name">
            <img src={value.avatar} alt={value.name + ' avatar'} className="avatar"></img>
            <span>{value.name}</span>
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
