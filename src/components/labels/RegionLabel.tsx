import Chip from "@mui/material/Chip";

const RegionColor: Record<string, string> = {
  "QLD1": "#800000",
  "NSW1": "#247FCE",
  "VIC1": "#191970",
  "SA1": "#FD3A5C",
  "TAS1": "#647E39"
}

export interface RegionProps {
  region: string;
  size?: "small" | "medium";
}

export default function RegionLabel({ region, size = "medium" }: RegionProps) {
  return <Chip key={region} label={region.toUpperCase()} size={size} variant="outlined"
    sx={{
      border: "1px solid #5A5A5A",
      borderRadius: "6px",
      backgroundColor: RegionColor[region],
      "& .MuiChip-label": {
        color: "#ffffff",
        fontWeight: "bold"
      }
    }}
  />
}
