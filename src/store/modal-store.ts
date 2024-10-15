import { create } from "zustand";
import { createArtworkStore } from "./artwork-store";

interface StateType {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const createModalStore = create<StateType>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set({ isModalOpen: !isModalOpen }),
}));

interface ArtworkStateType {
  isArtworkModalOpen: boolean;
  setIsArtworkModalOpen: (isArtworkModalOpen: boolean) => void;
}

export const createArtworkModalStore = create<ArtworkStateType>((set) => ({
  isArtworkModalOpen: false,
  setIsArtworkModalOpen: (isArtworkModalOpen: boolean) => {
    set({ isArtworkModalOpen: !isArtworkModalOpen });
  },
}));
