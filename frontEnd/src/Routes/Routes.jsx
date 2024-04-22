// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "../Pages/home";
// import CreateBooks from "../Pages/createBooks";
// import AllBooks from "../Pages/allBooks";
// import EditBooks from "../Pages/editBooks";
// import Footer from "../Components/footer";
// import Header from "../Components/header";
// import Notfound from "../Pages/notFound";

// function RoutesPages() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//       <Header />
//       <Routes>
//         <Route path="/createbooks" element={<Home />} />
//         <Route path="/allbooks" element={<Home />} />
//         <Route path="/editbooks/:id" element={<Home />} />
//         <Route path="*" element={<Notfound />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default RoutesPages;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../Pages/register";
import Home from "../Pages/home";
import AllBooks from "../Pages/allBooks";
import EditBooks from "../Pages/editBooks";
import Footer from "../Components/footer";
import Header from "../Components/header/header";
import Notfound from "../Pages/notFound";

function RoutesPages() {
  return (
    <Router>
      <Routes>
        {/* Render Home without Header and Footer */}
        <Route path="/Register" element={<Register />} />
        {/* Render other components with Header and Footer */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/allbooks"
          element={
            <>
              <Header />
              <AllBooks />
              <Footer />
            </>
          }
        />
        <Route
          path="/editbooks/:id"
          element={
            <>
              <Header />
              <EditBooks />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default RoutesPages;
