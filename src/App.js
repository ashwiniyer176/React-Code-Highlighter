import axios from "axios";
import React from "react";

export default function App() {
  const [data, setData] = React.useState();
  const [loading, setLoading] = React.useState(true);
  async function fetchSnippets() {
    await axios({
      method: "get",
      url: "http://127.0.0.1:8000/snippets/2/",
    })
      .then((res) => {
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
    fetchSnippets();
  }, []);
  if (loading) {
    return null;
  } else {
    return (
      <div>
        <h1>Hello</h1>
        <p>{data.code}</p>
      </div>
    );
  }
}
