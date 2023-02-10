export type ReducerDefaultProp = {
  loading: Boolean;
  error: Boolean;
  errorMessage?: String;
};

export type ActionDefaultProp = {
  type: String;
  payload: Object;
  errorMessage: String;
};
