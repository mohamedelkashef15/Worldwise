import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>World wise</h1>
      <Link to="/product">Product</Link>
    </div>
  );
}

export default HomePage;
