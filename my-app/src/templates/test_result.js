import React, { useContext } from "react";
import { Button, Grid, Box } from "@material-ui/core";
import { GenderContext } from "../App";

import dummy_img from "../images/result/dummy_titanic_jack.jpg";
import { useStyles } from './styles/test_result_styles'
import TransitionsModal from '../components/modal'

function ResultMain() {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.imageGrid} item>
        <img className={classes.characterImage} src={dummy_img} alt="dummy" />
      </Grid>
      <Grid className={classes.characterTitleGrid}>
        <Box className={classes.characterTitle} align="center">
          항상 사랑을 말하는 당신은, 타이타닉의 Jack
        </Box>
      </Grid>
    </Grid>
  );
}

function ResultDescription() {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
        <Grid className={classes.characterScript} item>
          <Box className={classes.charScriptFont} align="center">
            "이 배의 탑승권을 따낸 건 내 인생 최고의 행운이었어. <br/>당신을 만났으니까"
          </Box>
        </Grid>
        <Grid className={classes.characterDetail}>
          <Box align="center" className={classes.characterDetailText} >
          외향적이고 감성적인 ESFP 유형의 사람들은 낙천적이고 관계 맺기를 좋아해요. 그래서 연애할 때 상대방에게 사랑을 시도 때도 없이 표현하곤 하죠 😘 
          종종 여자친구에게 자신의 가치관을 이야기해요. 상대방이 자신을 그대로 인정해준다면 온화해지지만, 관계가 조금이라도 불편해진다면 빠르게 거리를 둔답니다. 
          거부당하는 걸 두려워하는 당신에게, 해주고 싶은 말이 있어요. <br/><i>"사랑하는 사람에게 기꺼이 상처 받을 것"</i>
          </Box>
        </Grid>
    </Grid>
  );
}

function DataAnalysisBtn({value}) {

  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.dummyBtn} color="secondary">
      {value}
    </Button>
  );
}

export default function ResultTemplate({ mbtiType, genderType }) {
  const classes = useStyles();
  const { setOpenModal } = useContext(GenderContext);

  return (
    <Grid className={classes.container} >
      <Grid className={classes.resultMainGrid} item>
        <ResultMain/>
      </Grid>
      <Grid className={classes.resultDescriptionGrid} item>
        <ResultDescription/>
      </Grid>
      <Grid className={classes.buttonGrid} onClick ={() => setOpenModal(true)}>
        <DataAnalysisBtn value= "어떻게 분석했어?"/>
      </Grid>
      <Grid className={classes.buttonGrid}>
        <DataAnalysisBtn value= "영화보러 가기"/>
      </Grid>
      <TransitionsModal />
    </Grid>
  );
}



