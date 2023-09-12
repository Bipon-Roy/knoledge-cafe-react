import "./App.css";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/header/Header";
import { useState } from "react";

function App() {
    const [bookmarks, setBookmarks] = useState([]);

    const handleAddToBookmark = (blog) => {
        console.log("Bookmark");
    };

    return (
        <div className=" mx-auto max-w-7xl">
            <Header></Header>
            <div className="md:flex justify-between gap-6">
                <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
                <Bookmarks></Bookmarks>
            </div>
        </div>
    );
}

export default App;
