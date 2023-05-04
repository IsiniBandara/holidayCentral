import useFecth from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFecth(
    "/hotels/countByCity?cities=colombo,galle,nuwaraeliya"
  );
  return (
    <div className="featured">
      {loading ? (
        "Loading... Please wait."
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://pix8.agoda.net/hotelImages/66612/-1/2d77500935ebf62e754389b307599f02.jpg?ca=10&ce=1&s=1024x768"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Colombo</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://gos3.ibcdn.com/c005b47276e311e98c1a0242ac110003.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Galle</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://thegrandhotelnuwaraeliya.com/wp-content/uploads/2018/12/banner001-1.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Nuwara-Eliya</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
