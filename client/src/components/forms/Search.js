import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Input } from "antd";
import { searchProduct } from "../../redux/actions/search_action";

const Search = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.search);
  const navigate = useNavigate();

  const handleSubmit = (value) => {
    dispatch(searchProduct(value));
    navigate(`/search?${text}`);
  };

  return (
    <form className="form-inline my-2 my-lg-0">
      <Input.Search
        size="medium"
        placeholder="search prducts..."
        onSearch={handleSubmit}
      />
    </form>
  );
};

export default Search;
