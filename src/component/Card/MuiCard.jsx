import React from "react";
import {Box,Card,CardMedia,CardContent,CardActions,Button,Typography} from "@mui/material";

const MuiCard = (props) => {

  const {boxWidth,cardImage,
        // This is Card Width and Image
        cardHeadColor,cardHeadWeight,cardHeadClassName,cardHeadVariant,cardHead,
        // This is Header
        cardParaColor,cardParaWeight,cardParaClassName,cardParaVariant,cardPara,
        // This is Summery Paragraf
        firstBtnsize,firstBtncolor,firstBtnvariant,firstBtnIsDisable,firstBtnHandleClick,firstBtnClassName,firstBtnText,
        // This is First Button
         secondBtnsize,secondBtncolor,secondBtnvariant,secondBtnIsDisable,secondBtnHandleClick,secondBtnClassName,secondBtnText} = props;

  return (
    <Box width={boxWidth}>
      <Card>
        <CardMedia component="img" image={cardImage}></CardMedia>
        <CardContent>
          <Typography color={cardHeadColor} fontWeight={cardHeadWeight} className={cardHeadClassName} variant={cardHeadVariant}>{cardHead}</Typography>
          <Typography color={cardParaColor} fontWeight={cardParaWeight} className={cardParaClassName} variant={cardParaVariant}>{cardPara}</Typography>
        </CardContent>
        <CardActions>
          <Button size={firstBtnsize} color={firstBtncolor} variant={firstBtnvariant} disabled={firstBtnIsDisable} onClick={firstBtnHandleClick} className={firstBtnClassName}>{firstBtnText}</Button>
          <Button size={secondBtnsize} color={secondBtncolor} variant={secondBtnvariant} disabled={secondBtnIsDisable} onClick={secondBtnHandleClick} className={secondBtnClassName}>{secondBtnText}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;

// Use This Example
// <MuiCard boxWidth={"280px"} cardImage={TreeImage} cardHeadColor={"error"} cardHeadVariant={"h5"} cardHead={"Nature Image"} cardParaColor={"primary"} cardParaVariant={"body2"}  cardPara={"“Everything in nature invites us constantly to be what we are.”"}/>
