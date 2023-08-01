import '../styling/HomePage.css';

const continentsURL =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Continental_models-Australia.gif/1280px-Continental_models-Australia.gif';

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Place holder for the home page</h1>
      </div>
      <section className="continent">
        <img src={continentsURL} alt="continents picture" />
        <div className="cont-header">
          <h1>Europe</h1>
          <span>6958 views</span>
        </div>
      </section>
      <section className="countries-section">
        <h2>STATS BY COUNTRY</h2>
        <ul className="countries-ul">
          <li className="country">
            <h3>Czech Republic</h3>
            <span>954</span>
          </li>
          <li className="country">
            <h3>Italy</h3>
            <span>954</span>
          </li>
          <li className="country">
            <h3>Croatia</h3>
            <span>954</span>
          </li>
          <li className="country">
            <h3>Denmark</h3>
            <span>954</span>
          </li>
          <li className="country">
            <h3>Spain</h3>
            <span>954</span>
          </li>
          <li className="country">
            <h3>Any other in europe</h3>
            <span>954</span>
          </li>
        </ul>
      </section>
    </>
  );
};
export default HomePage;
