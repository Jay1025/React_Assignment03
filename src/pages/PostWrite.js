import React from "react";
import { Grid, Text, Button, Image, Input } from "../elements";
import Upload from "../shared/Upload";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import { sample } from "lodash";


const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);
  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;
  const [contents, setContents] = React.useState(_post ? _post.contents : "");
  
  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log("포스트 정보가 없어요!");
      history.goBack();

      return;
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const [menu, setMenu] = React.useState(_post? _post.list_align : "sample_center");

  const samples = [
    {name: "choice", value: "sample_center", label: "center", }, 
    {name: "choice", value: "sample_left", label: "left"}, 
    {name: "choice", value: "sample_right", label: "right"}
  ]
  const buttonClicked = (e) => {
    setMenu(e);
  };

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const addPost = () => {
    if(contents === ""){
      return window.alert("게시글을 작성해 주세요!")
    }else if(preview === null) {
      return window.alert("사진을 등록해 주세요.")
    }
    dispatch(postActions.addPostFB(contents, menu));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, {contents: contents, list_align :menu}));
  }

  if (!is_login) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Grid>
          <Text margin="100px 0 0 0" size="32px" bold>
            Sorry...
          </Text>
          <Text margin="100px 0 0 0" size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
          <Button margin="300px 0 0 0"
            _onClick={() => {
              history.replace("/");
            }}
            >
            로그인 하러가기
          </Button>
        </Grid>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
        <Grid>
          <Text margin="0px" size="36px" bold>
            {is_edit ? "게시글 수정" : "게시글 작성"}
          </Text>
          <Upload />
        </Grid>
      </Grid>

      <Grid>
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
          <Grid is_flex>
            {samples.map((radio, idx) => {
              return (
                  <Input radio type="radio" label={radio.label} name={radio.name}
                  value={menu === samples[idx].value? "submenu focused" : "submenu"}
                  _onChange={()=>buttonClicked(samples[idx].value)}/> 
              )
            })}
          </Grid>
            {menu === "sample_center"? <Text pre_text></Text> : null}
          <Grid is_flex>
            {menu === "sample_right"? <Text pre_text width="50%"></Text>: null}
          { 
          <Image
            shape={menu}
            src={preview ? preview : "https://file.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg"}
            />
          }
            {menu === "sample_left"? <Text pre_text width="50%"></Text> : null}
          </Grid>
        </Grid>
      </Grid>

      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="게시글 내용"
          placeholder="게시글 작성"
          multiLine
        />

        <Grid padding="16px 0 0 0">
          {is_edit ? (
            <Button text="게시글 수정" _onClick={editPost}></Button>
            ) : (
            <Button text="게시글 작성" _onClick={addPost}></Button>
          )}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;
