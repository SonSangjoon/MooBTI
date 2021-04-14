import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GenderContext } from "../App";
import female_pic from "../images/gender/female_pic.jpg";
import male_pic from "../images/gender/male_pic.jpg";
import {  Button , Box, } from '@material-ui/core';
import { Mobile, Tablet, PC, PCwide } from '../components/MediaQuery' 
import { useStyles } from './styles/gender_selection_styles'

export default function GenderPageSelect() {
    const classes = useStyles();
    const { selectedGender, setSelectedGender } = useContext(GenderContext);
  
    const handleGenderChange = (event) => {
      setSelectedGender(event.currentTarget.value);
      console.log(selectedGender);
    };
  
    return (
      <Box>
        <PC>
        <Box>
          <Box className={classes.title} align="center" gutterBottom>
            테스트를 진행할 프로필을 선택하세요.
          </Box>
          <Box display="flex" justifyContent="center" mt={3}>
            <Box mr={5}>
              <Link to="/test">
                <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                  <img src={male_pic} alt="male_pic" className={classes.image} />
                </Button>
              </Link>
              <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
                남성
              </Box>
            </Box>
            <Box>
              <Link to="/test">
              <Button className={classes.gender_img} value="female" onClick={handleGenderChange}>
                  <img src={female_pic} alt="female_pic" className={classes.image}/>
                </Button>
              </Link>
              <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
                여성
              </Box>
            </Box>
          </Box>
        </Box>
        </PC>
  
  
        <Mobile>
        <Box className={classes.mobiletitle} align="center" gutterBottom>
            테스트를 진행할 프로필을 선택하세요.
          </Box>
          <Box display="flex" justifyContent="center" mt={3}>
            <Box mr={5}>
              <Link to="/test">
                <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                  <img src={male_pic} alt="male_pic" className={classes.image} />
                </Button>
              </Link>
              <Box className={classes.mobileImageTitle} variant="h6" align="center" gutterBottom>
                남성
              </Box>
            </Box>
            <Box>
              <Link to="/test">
              <Button className={classes.mobileImageTitle} value="female" onClick={handleGenderChange}>
                  <img src={female_pic} alt="female_pic" className={classes.image}/>
                </Button>
              </Link>
              <Box className={classes.mobileImageTitle} variant="h6" align="center" gutterBottom>
                여성
              </Box>
            </Box>
          </Box>
        </Mobile>
  
        <Tablet>
          <Box>
          <Box className={classes.title} align="center" gutterBottom>
            테스트를 진행할 프로필을 선택하세요.
          </Box>
          <Box display="flex" justifyContent="center" mt={3}>
            <Box mr={5}>
              <Link to="/test">
                <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                  <img src={male_pic} alt="male_pic" className={classes.image} />
                </Button>
              </Link>
              <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
                남성
              </Box>
            </Box>
            <Box>
              <Link to="/test">
              <Button className={classes.gender_img} value="female" onClick={handleGenderChange}>
                  <img src={female_pic} alt="female_pic" className={classes.image}/>
                </Button>
              </Link>
              <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
                여성
              </Box>
            </Box>
          </Box>
        </Box>
        </Tablet>
        <PCwide>
          <Box>
          <Box className={classes.title} align="center" gutterBottom>
            테스트를 진행할 프로필을 선택하세요.
          </Box>
          <Box display="flex" justifyContent="center" mt={3}>
            <Box mr={5}>
              <Link to="/test">
                <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
                  <img src={male_pic} alt="male_pic" className={classes.image} />
                </Button>
              </Link>
              <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
                남성
              </Box>
            </Box>
            <Box>
              <Link to="/test">
              <Button className={classes.gender_img} value="female" onClick={handleGenderChange}>
                  <img src={female_pic} alt="female_pic" className={classes.image}/>
                </Button>
              </Link>
              <Box className={classes.imgTitle} variant="h6" align="center" gutterBottom>
                여성
              </Box>
            </Box>
          </Box>
        </Box>
        </PCwide>
      </Box>
    );
  }
  
  // function GenderPageSelectMobile() {
  //   const classes = useStyles();
  //   const { gender, setGender } = useContext(GenderContext);
  
  //   const handleGenderChange = (event) => {
  //     setGender(event.currentTarget.value);
  //     console.log(gender);
  //   };
  
  //   return (
  //     <Box>
  //       <Box className={classes.tabletTitle} align="center" gutterBottom>
  //         테스트를 진행할 프로필을 선택하세요.
  //       </Box>
  //       <Box display="flex" justifyContent="center" mt={3}>
  //         <Box mr={5}>
  //           <Link to="/test">
  //             <Button
  //               className={classes.gender_img}
  //               value="male"
  //               onClick={handleGenderChange}
  //             >
  //               <img src={male_pic} alt="male_pic" className={classes.image} />
  //             </Button>
  //           </Link>
  //           <Box
  //             className={classes.imgTitle}
  //             variant="h6"
  //             align="center"
  //             gutterBottom
  //           >
  //             남성
  //           </Box>
  //         </Box>
  //         <Box>
  //           <Link to="/test">
  //             <Button
  //               className={classes.gender_img}
  //               value="female"
  //               onClick={handleGenderChange}
  //             >
  //               <img
  //                 src={female_pic}
  //                 alt="female_pic"
  //                 className={classes.image}
  //               />
  //             </Button>
  //           </Link>
  //           <Box
  //             className={classes.imgTitle}
  //             variant="h6"
  //             align="center"
  //             gutterBottom
  //           >
  //             여성
  //           </Box>
  //         </Box>
  //       </Box>
  //     </Box>
  //   );
  // }