import axios from "axios";
import React from "react";
import { urls } from "./config.js";

import CodeCell from "./components/CodeCell.js";

export default function App() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // GET request to defined API url using axios
  async function getDetails(link) {
    await axios({
      method: "get",
      url: `${urls.API_URL}${link}`,
    })
      .then((res) => {
        // Set data to variable to the response object
        console.log(res);
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  React.useEffect(() => {
    setLoading(true);
    getDetails("/snippets/2");
  }, []);
  if (loading) {
    return null;
  } else {
    return (
      <div>
        <h1>Hello</h1>
        <CodeCell code={data.code} />
      </div>
    );
  }
}
