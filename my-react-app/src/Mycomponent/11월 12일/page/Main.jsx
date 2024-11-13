import { Link } from "react-router-dom";
import { data } from "../assets/data/data";

// {
//         id:0,
//         name:'고양이',
//         img: images.cat,
//         description: '나만 고양이 없어..'
//     },

function Main() {
  return (
    <ul>
      {data.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            <img src={el.img} />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Main;
