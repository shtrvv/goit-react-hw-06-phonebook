import { useDispatch, useSelector } from "react-redux";
import { Label, Input } from "./Filter.styled";
import { setFilter } from "../../redux/filterSlice";

const Filter = () => {
  const { filter } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  }

  return (
      <Label>
          Find contacts by name
          <Input type="text" onChange={handleChangeFilter} value={filter} />
      </Label>
  )
}

export default Filter