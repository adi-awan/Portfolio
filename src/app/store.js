import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/themeSlice'
import projectsReducer from '../features/projects/projectsSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    projects: projectsReducer,
  },
})
