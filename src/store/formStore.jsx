import { create } from "zustand";
export const useStore = create((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  clearStep: () => set((state) => ({ step: 1 })),

  detailCollection: {},
  documentCollection: {},
  statementofPurpouse: {},
  interviewDetails: {},
  addetailCollection: (data) =>
    set((state) => ({
      detailCollection: data,
    })),
  addDocumentCollection: (data) =>
    set((state) => ({
      documentCollection: data,
    })),
  addstatementofPurpouse: (data) =>
    set((state) => ({
      statementofPurpouse: data,
    })),
  addinterviewDetails: (data) =>
    set((state) => ({
      interviewDetails: data,
    })),
}));
