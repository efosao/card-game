import main from "../src/index";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    main();
  }, []);
  return <div>Card Game</div>;
}

export default HomePage;
