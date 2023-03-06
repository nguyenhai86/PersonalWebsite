import "./App.scss";
import data from "./../Data/data.json";
import headerImage from "./../Images/header.jpg";
import md5 from "md5";
import hashPasswordStr from "./../Data/password.json";
function App() {
  const hashPassword = (password) => {
    password = "!@@afs" + password + "!@8ads";
    password = md5(password);
    return md5(password);
  };

  const handleClick = (url, name) => {
    // eslint-disable-next-line
    if (name == "Person File") {
      let password = prompt("Password: ");
      if (
        password != null &&
        hashPassword(password) === hashPasswordStr.value
      ) {
        window.open(url);
      } else alert("Password is wrong");
    } else window.open(url);
  };
  const mapData = () => {
    return data.map((value, index) => {
      return (
        <tr key={index} onClick={() => handleClick(value.url, value.name)}>
          <td className="name">
            <img
              src={value.avatar}
              alt={value.name + " avatar"}
              className="avatar"></img>
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
