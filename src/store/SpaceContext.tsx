import { createContext, ReactNode, useReducer } from "react";
import { Location } from "../models/space";

interface SpaceContextType {
  data: Location[];
  events: {
    updateSpacesHandler: (data: Location[]) => void;
  };
}

export const SpaceContext = createContext<SpaceContextType | null>(null);
const initialState = [] as Location[];

interface Action {
  type: string;
  payload?: Location[];
}

const spaceReducer = (state: Location[], action: Action): Location[] => {
  if (action?.type === "UPDATE_SPACE") {
    return [
      ...state,
      ...(action.payload || []),
    ];
  }
  return state;
};

const SpaceContextProvider = ({ children }: { children: ReactNode }) => {
  const [spaceState, dispatch] = useReducer(spaceReducer, initialState);

  const updateSpacesHandler = (data: Location[]) => {
    dispatch({ type: "UPDATE_SPACE", payload: data });
  };

  const contextData = {
    data: spaceState,
    events: {
      updateSpacesHandler,
    },
  };

  return (
    <SpaceContext.Provider value={contextData}>
      {children}
    </SpaceContext.Provider>
  );
};

export default SpaceContextProvider;
