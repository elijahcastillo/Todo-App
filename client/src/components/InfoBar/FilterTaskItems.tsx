import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFilter } from "../../css/InfoBar.styled";
import { setFilter } from "../../redux/slices/taskItemSlice";
import { ItemFilter } from "../../types/allTypes";

const FilterTaskItems = () => {
  const { filterItem } = useSelector((state: any) => state.taskItem);
  const dispatch = useDispatch();
  return (
    <StyledFilter>
      <div className="filterWrapper">
        <div
          className={
            filterItem == ItemFilter.ALL
              ? "filterItem filterActive"
              : "filterItem"
          }
          onClick={() => dispatch(setFilter(ItemFilter.ALL))}
        >
          All
        </div>
        <div
          className={
            filterItem == ItemFilter.COMPLEATED
              ? "filterItem filterActive"
              : "filterItem"
          }
          onClick={() => dispatch(setFilter(ItemFilter.COMPLEATED))}
        >
          Compleated
        </div>
        <div
          className={
            filterItem == ItemFilter.TODO
              ? "filterItem filterActive"
              : "filterItem"
          }
          onClick={() => dispatch(setFilter(ItemFilter.TODO))}
        >
          Todo
        </div>
      </div>
      <button className="DelList">Delete</button>
    </StyledFilter>
  );
};

export default FilterTaskItems;
