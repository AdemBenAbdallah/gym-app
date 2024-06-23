import BecomeProModal from "./components/BecomeProModal";

export enum GlobalModal {
  becomeBro = "becomePro",
}

export const globalModals = {
  [GlobalModal.becomeBro]: BecomeProModal,
};

declare module "@mantine/modals" {
  export interface MantineModalsOverride {
    modals: typeof globalModals;
  }
}
