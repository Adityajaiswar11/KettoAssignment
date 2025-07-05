import React, { useState } from "react";
import { Avatar, Box, Button, Typography, Chip, Stack } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export const DonationsUserList = [
  {
    name: "Aditya",
    amount: 450,
    timeAgo: "15h ago",
    message: "Hang in there",
    topDonor: true,
  },
  {
    name: "Rahul",
    amount: 430,
    timeAgo: "17h ago",
    message: "We are all here for you, Poppy!",
    topDonor: false,
  },
  {
    name: "Amar",
    amount: 250,
    timeAgo: "1d ago",
    message: "Stay strong my friend",
    topDonor: false,
  },
  {
    name: "Shivam",
    amount: 150,
    timeAgo: "1d ago",
    message: "Stay strong my friend",
    topDonor: false,
  },
];

const DonationsList = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleDonations = showAll
    ? DonationsUserList
    : DonationsUserList.slice(0, 2);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h6"
        fontWeight={600}
        mb={2}
        sx={{ color: "#4a4a4a" }}
      >
        Donations so far ({DonationsUserList.length.toLocaleString()}K)
      </Typography>

      {visibleDonations.map((donor, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <Avatar color="#468cb7" size="small" aria-label="user-avatar" />
            <Typography fontWeight={600} sx={{ color: "#6c6c6c" }}>
              {donor.name}
            </Typography>
            {donor.topDonor && (
              <Chip
                label="Top donor"
                icon={<EmojiEventsIcon fontSize="small" color="#888be2" aria-label="emogi" />}
                size="small"
                variant="outlined"
                sx={{ borderRadius: 1, fontWeight: 500, color: "#888be2" }}
              />
            )}
          </Stack>

          <Stack direction="row" spacing={1} mt={0.5} ml={6}>
            <Typography variant="body2" color="textSecondary">
              ${donor.amount}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              •
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {donor.timeAgo}
            </Typography>
          </Stack>

          {donor.message && (
            <Typography variant="body2" color="text.secondary" mt={1} ml={6}>
              “{donor.message}”
            </Typography>
          )}
        </Box>
      ))}

      {DonationsUserList.length > 2 && (
        <Button
          variant="outlined"
          size="small"
          sx={{ borderRadius: 5 }}
          fullWidth
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All"}
        </Button>
      )}
    </Box>
  );
};

export default DonationsList;
