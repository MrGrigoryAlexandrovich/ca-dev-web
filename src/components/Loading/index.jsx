import { Stack, CircularProgress } from "@mui/material/";

export default function Loading() {
  return (
    <Stack marginTop="15%" alignSelf="center">
      <CircularProgress color="secondary" size={150} />
    </Stack>
  );
}
