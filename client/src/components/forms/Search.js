import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { searchProduct } from "../../redux/actions/search_action";

const Search = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.search);
  const navigate = useNavigate();

  const handleChange = ({ target: input }) => {
    dispatch(searchProduct(input.value));
  };

  const handleSubmit = (e) => {
    if (text === "") {
      e.preventDefault();
      return;
    }

    navigate(`/search/products`);
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="search"
        value={text}
        className="form-control mr-sm-2"
        placeholder="Search"
      />
      <SearchOutlined onClick={handleSubmit} style={{ cursor: "pointer" }} />
    </form>
  );
};

export default Search;
