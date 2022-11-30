import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledFilter } from "../../css/InfoBar.styled";
import { setFilter, setSort } from "../../redux/slices/taskItemSlice";
import { ItemFilter, ItemDateSort } from "../../types/allTypes";
import { useDeleteTaskListMutation } from "../../redux/api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const FilterTaskItems = () => {
  //Date.parse(... ms) for sort func
  const { filterItem, sortItem } = useSelector((state: any) => state.taskItem);
  const [deleteList] = useDeleteTaskListMutation();
  const { listId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const delList = () => {
    deleteList({ listId });
    navigate("/home/all");
    toast.success("List Deleated");
  };

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
      {/*Sorting*/}
      <div className="sortingWrapper">
        {/* <div className="sortTitle">Date</div> */}
        <div
          className={
            sortItem == ItemDateSort.ASCENDING
              ? "filterItem filterActive"
              : "filterItem"
          }
          onClick={() => dispatch(setSort(ItemDateSort.ASCENDING))}
        >
          Up
        </div>

        <div
          className={
            sortItem == ItemDateSort.DESCENDING
              ? "filterItem filterActive"
              : "filterItem"
          }
          onClick={() => dispatch(setSort(ItemDateSort.DESCENDING))}
        >
          Down
        </div>
      </div>
      <button className="DelList" onClick={delList}>
        Delete
      </button>
    </StyledFilter>
  );
};

export default FilterTaskItems;
