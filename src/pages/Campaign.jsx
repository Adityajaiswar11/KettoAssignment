import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import DonationsList from "./DonationsList";

const Campaign = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded((prev) => !prev);
  };

  const para = `Lorem ipsum deleniti repudiandae nostrum consectetur laudantium nobis accusamus tempora consequuntur harum. Fuga dolores nostrum aut, repellendus cum nisi veniam dignissimos impedit sed, aperiam est autem placeat itaque minus nobis aliquid officiis error qui blanditiis. Minus ducimus quos perferendis nobis enim expedita autem. Quis voluptas obcaecati aperiam culpa soluta aliquam sunt nisi labore, nobis expedita laudantium voluptatem quisquam mollitia ducimus eaque et, nostrum debitis distinctio repudiandae! Perferendis atque commodi soluta, repellat exercitationem quis blanditiis quos incidunt saepe aliquam voluptates tempora quibusdam ex totam nulla necessitatibus fugiat porro at! Modi, similique praesentium tenetur, neque numquam doloremque incidunt distinctio quibusdam fugit qui blanditiis sed consequatur maxime quasi minima odit nulla? Ipsum doloribus corporis asperiores aliquam aperiam? Ipsum cum odit molestias molestiae repellendus, hic distinctio accusantium recusandae? Modi possimus quaerat itaque minima. Debitis a quaerat corporis animi aut perferendis, 
  a`;
  const displayedContentPara = expanded ? para : para.slice(0, 100);

  return (
    <Paper elevation={1}>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mb: 1, color: "#4a4a4a" }}
        >
          Story
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          Dear friends, family, and compassionate strangers,
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 3 }}>
          Dear friends, family, and compassionate strangers Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Veniam mollitia earum numquam
          cumque, in molestias perspiciatis vitae quidem incidunt deleniti
          possimus suscipit, eveniet nobis iusto et ipsam repudiandae nemo!
          Maxime.{" "}
        </Typography>

        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ mt: 2, color: "#4a4a4a" }}
        >
          Who is Poppie?
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {`${displayedContentPara} ${expanded ? "" : "..."}`}
        </Typography>

        <Button
          onClick={toggleReadMore}
          size="small"
          color="inherit"
          sx={{
            textTransform: "none",
            fontWeight: 500,
            textDecoration: "underline",
          }}
        >
          {expanded ? "Read less" : "Read more"}
        </Button>
      </Box>
      <Box>
        <DonationsList />
      </Box>
    </Paper>
  );
};

export default Campaign;
