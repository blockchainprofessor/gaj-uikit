import { Colors } from "./types";

export const baseColors = {
  failure: "#ff738e",
  primary: "#FFB406",
  primaryBright: "#FFB406",
  primaryDark: "#FFB406",
  secondary: "#FFB406",
  success: "#33CA7F",
  warning: "#fea192",
};


export const brandColors = {
  binance: "#F0B90B",
};


export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f2f2f2",
  backgroundDisabled: "#F2F2F2",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeeee",
  tertiary: "#EFF4F5",
  text: "#5f7888",
  textDisabled: "#BDC2C4",
  textSubtle: "#B543FF",
  borderColor: "#F2F2F2",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F2F2F2 0%, #F2F2F2 100%)",
  },
};


export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#100C18",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#A28BD4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
