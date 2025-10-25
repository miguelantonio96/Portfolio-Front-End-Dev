import { createSlice } from "@reduxjs/toolkit";

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    initialAppState: [],
    currentArticleTitle: "",
    currentThemeActive: {},
    skills: [],
    skillActive: {},
    certifications: [],
    certificateActive: {},
    projects: [],
  },
  reducers: {
    setInitialAppState: (state, { payload }) => {
      state.initialAppState = payload;
    },
    setCurrentArticleTitle: (state, { payload }) => {
      state.currentArticleTitle = payload;
    },
    setCurrentThemeActive: (state, { payload }) => {
      state.currentThemeActive = payload;
    },

    setSkills: (state, { payload }) => {
      state.skills = payload;
    },
    setSkillActive: (state, { payload }) => {
      state.skillActive = payload;
    },
    setCertifications: (state, { payload }) => {
      state.certifications = payload;
    },
    setCertificateActive: (state, { payload }) => {
      state.certificateActive = payload;
    },
    setProjects: (state, { payload }) => {
      state.projects = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setInitialAppState,
  setCurrentArticleTitle,
  setCurrentThemeActive,
  setCertifications,
  setProjects,
  setSkills,
  setSkillActive,
  setCertificateActive,
} = portfolioSlice.actions;
