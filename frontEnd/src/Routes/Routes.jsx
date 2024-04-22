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

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Pages/register";
import Home from "../Pages/home";
// import AllBooks from "../Pages/allBooks";
// import EditBooks from "../Pages/editBooks";
import Footer from "../Components/footer";
import Header from "../Components/header/header";
import Notfound from "../Pages/notFound";
import PrivateRoute, { UserRoute } from "../PrivateRoute";

function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<UserRoute />}>
          <Route path="/" element={<Register />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPages;
