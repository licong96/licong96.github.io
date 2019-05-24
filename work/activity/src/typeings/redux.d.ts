declare interface RootAction<T = {}> {
  type: string;
  payload: T;
}

declare interface RootState {
  homeState: HomeState;
}
