import { RootThunkAction } from "~/store";
import * as Actions from "~/store/counter/actions";

export const increment = (): RootThunkAction<void> => (dispatch, _) => {
  dispatch(Actions.increment());
};

export const decrement = (): RootThunkAction<void> => (dispatch, _) => {
  dispatch(Actions.decrement());
};
