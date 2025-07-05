import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import Campaign from "../pages/Campaign";
import Documents from "../pages/Documents";

const tabData = [
  {
    id: 1,
    title: "Campaign",
    content: <Campaign />,
  },
  {
    id: 2,
    title: "Documents",
    content: <Documents />,
  },
];

const CustomTab = () => {
  const [value, setValue] = useState(1);

  const selectedTab = tabData.find((tab) => tab?.id === value);

  return (
    <Box
      sx={{
        width: "100%",
        p: {
          xs: 1,
          sm: 1,
          md: 0,
        },
      }}
    >
      <Tabs
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        aria-label="custom-tab"
        textColor="primary"
        indicatorColor="primary"
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        {tabData.map((tab) => (
          <Tab
            key={tab?.id}
            value={tab?.id}
            label={tab?.title}
            sx={{ textTransform: "none", fontWeight: 500, fontSize: "1rem" }}
          />
        ))}
      </Tabs>

      <Box role="tabpanel" sx={{ mt: 1 }}>
        {selectedTab?.content}
      </Box>
    </Box>
  );
};

export default CustomTab;
