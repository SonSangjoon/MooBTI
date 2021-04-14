import React from "react";
import { Button, Grid, Box } from "@material-ui/core";
import dummy_img from "../images/result/dummy_titanic_jack.jpg";
import { withStyles, makeStyles,} from "@material-ui/core/styles";

// function GetList(){
//   axios.post(`${Url}/${user_mbti}/${user_gender}`).then(response =>{
//       setList(response.data.result)
//   })
// }

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },

  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  resultMainGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
    color: "white",
  },

  resultDescriptionGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
    color: "white",
  },

  buttonGrid: {
    gridColumn: "4/ span 6",
    gridRow: "-2/ span 2",
  },

  imageGrid: {
    gridColumn: "2/span 10",
    gridRow: "2/span 9",
  },

  characterImage: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: '15px'
  },

  characterTitleGrid:{
    gridColumn: "span 12",
    gridRow: "11/ span 2",
  },

  characterTitle: {
    align: "center",
    marginTop: 15,
    // fontSize: "2vw",
    fontFamily: 'S-CoreDream-6Bold',
    fontSize: "19px",
  },
  charScriptFont: {
    fontSize: "13px",
  },

  characterScript: {
    gridColumn: "2/span 10",
    gridRow: "2/span 2",
  },

  characterDetail: {
    gridColumn: "span 12",
    gridRow: "4/ span 8",
  },

  characterDetailText:{
    fontSize: '16px'
  },

  dummyBtn: {
    minWidth: "100%",
  },
}));




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

function DataAnalysisBtn(mbtiType, genderType) {

  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.dummyBtn} color="secondary">
      어떻게 분석했어?
    </Button>
  );
}

export default function ResultTemplate({ mbtiType, genderType }) {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.resultMainGrid} item>
        <ResultMain/>
      </Grid>
      <Grid className={classes.resultDescriptionGrid} item>
        <ResultDescription/>
      </Grid>
      <Grid className={classes.buttonGrid}>
        <DataAnalysisBtn />
      </Grid>
    </Grid>
  );
}
