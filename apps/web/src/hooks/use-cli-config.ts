import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type CliConfig = {
  packageManager: "npm" | "yarn" | "pnpm" | "bun";
  installationType: "cli" | "manual";
};

type CliConfigActions = {
  setPackageManager: (packageManager: CliConfig["packageManager"]) => void;
  setInstallationType: (installationType: CliConfig["installationType"]) => void;
};

export const useCliConfigStore = create<CliConfig & CliConfigActions>()(
  persist(
    (set) => ({
      packageManager: "pnpm",
      installationType: "cli",
      setPackageManager: (packageManager) => set({ packageManager }),
      setInstallationType: (installationType) => set({ installationType }),
    }),
    {
      name: "cli-config",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
