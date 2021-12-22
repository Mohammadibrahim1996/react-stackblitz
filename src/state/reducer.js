
export const InpData={
  Data:[{showData:"data"}],
};
export const InpReducer = (state=InpData ,action) => {
  switch(action.type){
    case"ADD-NEW-Data":
    return{
      ...state,
      newDtat:[action.newData,...state.newData],
    };
    default : return state;
  }
}