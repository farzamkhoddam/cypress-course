import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ItemsAccordion({ items }) {
  return (
    <div style={{ maxWidth: "70vw", minWidth: "50vw" }}>
      {items.map((item, i) => {
        return (
          <Accordion data-test={`accordion`} key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              data-test={`accordion-button-${i}`}
              id="panel1a-header"
            >
              <Typography>{item.summary}</Typography>
            </AccordionSummary>
            <AccordionDetails data-test={`accordion-${i}-content`}>
              <Typography>{item.details}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
