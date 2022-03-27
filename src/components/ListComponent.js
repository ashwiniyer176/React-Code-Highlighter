import React from "react";
import axios from "axios";
import { urls } from "../config.js";
import CodeSnippet from "./CodeSnippet/CodeSnippet.js";

export default function ListComponent() {
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
    getDetails("/snippets/");
  }, []);
  if (loading) {
    return null;
  } else {
    return (
      <div>
        <h1>Hello to a code highlighter</h1>
        <ul>
          {data.map((item, key) => {
            return (
              <div>
                <CodeSnippet code={item.code} />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
