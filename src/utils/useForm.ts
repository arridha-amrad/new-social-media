import { ChangeEvent, useState } from "react";

const UseForm = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  return {
    state,
    onChange,
    setState,
  };
};

export default UseForm;
