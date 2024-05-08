import { createAsyncThunk, AsyncThunkPayloadCreator } from '@reduxjs/toolkit' 

import type { RootState, AppDispatch } from './index'

interface ThunkApiConfig {
  state: RootState
  dispatch: AppDispatch
  rejectValue: any
}
const createAppAsyncThunk = <
  Returned,
  ThunkArg,
  ApiConfig extends ThunkApiConfig = ThunkApiConfig
>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<Returned, ThunkArg, ApiConfig>
) => createAsyncThunk(typePrefix, payloadCreator)

export default createAppAsyncThunk