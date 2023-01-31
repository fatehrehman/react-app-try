//import logo from './logo.svg';
import "./App.css";
// import Form from "./components/Form";
// import Welcome from "./components/Welcome";
// import Tick from "./components/Tick";
import { useState } from "react";
// import LoginController from "./components/LoginController";
// import Blog from "./components/Blog";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  // const user = {
  //   firstname: "Fateh",
  //   lastname: "Rehman",
  // };
  // const [flag, setFlag] = useState(true);

  // const reverseFlag = () => {
  //   setFlag(!flag);
  // };

  ///*
  const posts = [
    {
      id: 1,
      title: "Course One Abc",
      content: "Welcome Hello from One",
    },
    {
      id: 2,
      title: "Course Two Def",
      content: "Welcome Hello from two",
    },
    {
      id: 3,
      title: "Course Three Ghi",
      content: "Welcome Hello from three",
    },
    {
      id: 4,
      title: "Course Four Jkl",
      content: "Welcome Hello from four",
    },
    {
      id: 5,
      title: "Course Five Mno",
      content: "Welcome Hello from five",
    },
    {
      id: 6,
      title: "Course Six Pqr",
      content: "Welcome Hello from six",
    },
  ];
  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchText.toLowerCase());
  });
  //*/

  return (
    <>
      {/* <button onClick={reverseFlag}>
        {flag ? "Hide Clock" : "Show Clock"}
      </button>
      {flag ? <Tick /> : "No Ticekr"}
      {/* it will stop the UseEffect cycle too and on hiding it will call the cleanup function that is to be called after UseEffect*/}
      {/* <Welcome datax="Fateh" /> */}
      {/* <Welcome datax="Rehman" /> */}
      {/* <Welcome datax="Wali" /> */}
      {/* <LoginController /> */}
      {/* <Blog posts={posts} /> */}
      {/* <Form /> */}
      <Search searchText={searchText} handleSearch={handleSearch} />
      <SearchResults entries={filteredPosts} />
    </>
  );
}

export default App;
