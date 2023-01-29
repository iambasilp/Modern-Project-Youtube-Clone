import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import "./App.css";
import {
  ChannelDetails,
  Feed,
  Navbar,
  SearchFeed,
  VideoDetails,
} from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", color:"white"}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:id" element={<SearchFeed />} />
          {/* above we write /video/:id this is react router URL PARAMETERS this show specific component --iambasilp*/ }
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
