import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { useState } from "react";

const faqData = [
  {
    question: "What is equalall",
    answer:
      "Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.",
  },
  {
    question: "What is equalall Guarantee",
    answer:
      "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
  },
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    question: "Lorem ipsum, dolor sit amet consectetur?",
    answer:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    question: "Lorem ipsum, dolor sit amet consectetur?",
    answer:
      "Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue.",
  },
  {
    question: "What is equalall Guarantee",
    answer:
      "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
  },
  {
    question: "What is equalall Guarantee",
    answer:
      "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        p: {
          xs: 1,
          sm: 2,
          md: 0,
        },
        my: 3,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        sx={{ mb: 2, color: "#4a4a4a" }}
      >
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => {
        const panelId = `panel${index}`;
        return (
          <Accordion
            key={panelId}
            expanded={expanded === panelId}
            onChange={handleChange(panelId)}
            disableGutters
            square
            sx={{
              m: 0,

              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`${panelId}-content`}
              id={`${panelId}-header`}
            >
              <Typography
                component="span"
                sx={{ width: "100%", flexShrink: 0 }}
                variant="body1"
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" color="textSecondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
}
