import { getPost } from "./api/PostApi";
import { Posts } from "./Components/Posts";

const App = () => {
  return (
    <section className="main-section">
       <Posts/>
    </section>
  )
};

export default App;
