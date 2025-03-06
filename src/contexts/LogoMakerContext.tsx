
import { createContext, useContext, useReducer, ReactNode } from "react";

export interface LogoConfig {
  businessName: string;
  slogan: string;
  industry: string;
  colors: string[];
  style: string;
}

interface LogoDesign {
  id: string;
  imageUrl: string;
  config: LogoConfig;
}

interface LogoMakerState {
  config: LogoConfig;
  generatedLogos: LogoDesign[];
  selectedLogo: LogoDesign | null;
  isGenerating: boolean;
  error: string | null;
}

type LogoMakerAction =
  | { type: "UPDATE_CONFIG"; payload: Partial<LogoConfig> }
  | { type: "SET_GENERATING"; payload: boolean }
  | { type: "SET_GENERATED_LOGOS"; payload: LogoDesign[] }
  | { type: "SELECT_LOGO"; payload: LogoDesign }
  | { type: "SET_ERROR"; payload: string | null };

const initialState: LogoMakerState = {
  config: {
    businessName: "",
    slogan: "",
    industry: "",
    colors: ["#4F46E5", "#F59E0B"],
    style: "modern",
  },
  generatedLogos: [],
  selectedLogo: null,
  isGenerating: false,
  error: null,
};

const reducer = (state: LogoMakerState, action: LogoMakerAction): LogoMakerState => {
  switch (action.type) {
    case "UPDATE_CONFIG":
      return {
        ...state,
        config: { ...state.config, ...action.payload },
      };
    case "SET_GENERATING":
      return {
        ...state,
        isGenerating: action.payload,
      };
    case "SET_GENERATED_LOGOS":
      return {
        ...state,
        generatedLogos: action.payload,
        isGenerating: false,
      };
    case "SELECT_LOGO":
      return {
        ...state,
        selectedLogo: action.payload,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        isGenerating: false,
      };
    default:
      return state;
  }
};

const LogoMakerContext = createContext<{
  state: LogoMakerState;
  dispatch: React.Dispatch<LogoMakerAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const LogoMakerProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LogoMakerContext.Provider value={{ state, dispatch }}>
      {children}
    </LogoMakerContext.Provider>
  );
};

export const useLogoMaker = () => useContext(LogoMakerContext);
