import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchProduct } from "../../redux/actions/search_action";
import { Input, Form } from "antd";

const Search = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.search);
  const navigate = useNavigate();

  const handleChange = ({ target: input }) => {
    dispatch(searchProduct(input.value));
  };

  const handleSubmit = () => {
    if (text === "") {
      navigate(`/`);
    } else {
      navigate(`/search/products`);
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
      <Input.Search
        bordered={false}
        value={text}
        onChange={handleChange}
        onSearch={handleSubmit}
        className="form-control mr-sm-2"
        placeholder="Search here..."
      />
    </form>
  );
};

export default Search;
