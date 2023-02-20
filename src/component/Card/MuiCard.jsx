import React from "react";
import {Box,Card,CardContent,CardActions,Button,Typography} from "@mui/material";

const MuiCard = (props) => {

  const {boxWidth,cardHead,headVariant,cardPara,paraVariant,handleClick,firstBtnText,secondBtnText} = props;

  return (
    <Box width={boxWidth}>
      <Card>
        <CardContent>
          <Typography variant={headVariant}>{cardHead}</Typography>
          <Typography variant={paraVariant}>{cardPara}</Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleClick}>{firstBtnText}</Button>
          <Button onClick={handleClick}>{secondBtnText}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
