import "../shared/App.css"
import React from "react";
import { Grid, Image, Text, Button } from "../elements";

import {actionCreators as postActions} from "../redux/modules/post";
import {actionCreators as likeActions} from "../redux/modules/like";
import { useDispatch, useSelector } from "react-redux";
import {history} from "../redux/configureStore";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = (props) => {
  const dispatch = useDispatch();

  const like_totallist = useSelector((state) => state.like.list);
  const like_myList = like_totallist.filter(list => list.user_id === props.user_info.user_id)
  const like_list = like_myList.findIndex((p) => p.post_id === props.id);
  const heart = like_myList[like_list];
  console.log(like_list)
  console.log(heart)
  console.log(like_myList)

  function deleteBtn(post_id) {
    return dispatch(postActions.deletePostFB(post_id));
   };

   function likeBtn(post_id) {
    //  console.log(post_id)
    return dispatch(likeActions.likePostFB(post_id, heart));
   }
   
   function dislikeBtn(post_id) {
    //  console.log(post_id)
    return dispatch(likeActions.dislikePostFB(post_id));
   }

  return (
    <React.Fragment>
        <Grid is_flex justify="space-between" padding="1px">
          <Grid is_flex j width="auto">
            <Image shape="circle" src={props.user_info.image} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>{props.insert_dt}</Text>
            {props.is_me && (
              <Button width="auto" margin="4px" padding="4px" _onClick={() => {
                history.push(`/edit/${props.id}`);
              }}>
                수정
              </Button>
            )}
            {props.is_me && (
              <Button width="auto" margin="4px" padding="4px" _onClick={(event) => {
                deleteBtn(props.id);
                event.preventDefault()
            }}>삭제</Button>
            )}
          </Grid>
        </Grid>
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape="rectangle" src={props.image_url}  _onClick={() => {history.push(`/detail/${props.id}`)}} />
        </Grid>
        <Grid is_flex padding="16px 1px 80px 16px">
          <Text margin="0px" bold> 좋아요 {props.like_cnt}개 </Text>
          {
            like_myList.map((list)=> {
              console.log(list.heart)
              return (
                
                list.heart? 
                  <FavoriteIcon style={{color:"red", cursor:"pointer" }} onClick={() => { dislikeBtn(props.id) }}></FavoriteIcon>
                : <FavoriteIcon style={{color:"black", cursor:"pointer" }} onClick={() => { likeBtn(props.id) }}></FavoriteIcon>                
              );
            })
          }
        </Grid>
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: "JayPro",
    user_profile: "https://src.hidoc.co.kr/image/lib/2021/1/20/1611132055778_0.jpg",
  },
  image_url: "https://src.hidoc.co.kr/image/lib/2021/1/20/1611132055778_0.jpg",
  contents: "고양이!",
  like_cnt: 10,
  insert_dt: "2021-02-27 10:00:00",
  is_me: false,
};

export default Post;
