import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Accordion,AccordionSummary,AccordionDetails,Typography,Divider} from "@mui/material";

const MuiAccordion = (props) => {

  const [expanded, setExpanded] = useState(false);

  const {accordianList,accordianWidth,accordionHeadColor,accordionHeadVariant,accordionHeadWeight,accordionHeadClassName,
         accordionParaColor,accordionParaVariant,accordionParaWeight,accordionParaClassName} = props;

  const handleChange = (isExpanded, panelId) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <>
      {accordianList.map(({ head, para, panel_Id}) => {
        return (
          <Accordion style={{ width: accordianWidth }} key={panel_Id} onChange={(event, isExpanded) => handleChange(isExpanded, panel_Id)} expanded={expanded === panel_Id}>
            <AccordionSummary id={panel_Id} expandIcon={<ExpandMoreIcon />}>
              <Typography color={accordionHeadColor} variant={accordionHeadVariant} fontWeight={accordionHeadWeight} className={accordionHeadClassName}>
                {head}
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography color={accordionParaColor} variant={accordionParaVariant} fontWeight={accordionParaWeight} className={accordionParaClassName}>
                {para}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default MuiAccordion;

// Use This Example
// const list = [
//   { head: "Accordian 1", para: "This is Accordian One", panel_Id: "panel1-header"},
//   { head: "Accordian 2", para: "This is Accordian Two", panel_Id: "panel2-header"},
//   { head: "Accordian 3", para: "This is Accordian Three", panel_Id: "panel3-header"},
// ];
// <MuiAccordion accordianList={list} accordianWidth={"400px"}/>