import React, { useReducer, useEffect } from "react";

const FETCH_INIT = "FETCH_INIT";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_ERROR = "FETCH_ERROR";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };

    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case FETCH_ERROR:
      return { ...state, loading: false, error: "Error fetching data" };

    default:
      return state;
  }
};

const Multistate = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const dataHandler = async () => {
    try {
      dispatch({ type: FETCH_INIT });

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const newData = await response.json();

      dispatch({ type: FETCH_SUCCESS, payload: newData });
    } catch (error) {
      dispatch({ type: FETCH_ERROR });
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <div>
      <h2>Multistate</h2>

      {state.loading && <p>Loading...</p>}
      {state.error && <p>{state.error}</p>}

      <ul>
        {state.data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Multistate;
