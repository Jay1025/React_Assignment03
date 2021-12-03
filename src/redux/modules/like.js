import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { firestore, storage } from "../../shared/firebase";
import "moment";
import moment from "moment";
import post, { actionCreators as postActions } from "./post";

const LIKE_POST = "LIKE_POST";
const DISLIKE_POST = "DISIKE_POST";

const likePost = createAction(LIKE_POST, (post_id) => ({ post_id}));
const dislikePost = createAction(DISLIKE_POST, (post_id) => ({ post_id}));

const initialState = {
    list: [{user_id: "9QhCMgnTjrNB17lSZ1MjcOgMmcI3", post_id: "KHecWJCpgJwlkzgDUJi1", heart: false}],
};



const likePostFB = (post_id) => {
    return function (dispatch, getState) {
        if (!post_id) {
            window.alert("로그인한 사람만 가능해요");   
            return;
        };

        // const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
        // const _post = getState().post.list[_post_idx];
        // const likeCnt = _post.like_cnt;
        // console.log(likeCnt)
        const _like_idx = getState().like.list.findIndex((p) => p.post_id === post_id);
        const _like = getState().like.list[_like_idx];
        const myHeart = _like.heart;
        
        // console.log(myHeart);
        
        const postDB = firestore.collection("post");
        const likeDB = firestore.collection("like");
        // console.log(likeDB);
        // if (post_id) {
            // likeDB
            //     .doc(post_id)
            //     .update(heart)
            //     .then((doc) => {
            //     console.log(heart)
            dispatch(likePost(post_id));
            
            // });

            // return;
        // }
    }
}
// const dislikePostFB = (post_id) => {
//     return function (dispatch, getState) {
//         if (!post_id) {
//             window.alert("로그인한 사람만 가능해요");   
//             return;
//         };

//         const likeCnt = getState().post.like_cnt;
//         console.log(likeCnt)
//         const _post_idx = getState().post.list.findIndex((p) => p.id === post_id);
//         const _post = getState().post.list[_post_idx];

//         const postDB = firestore.collection("post");

//         if (post_id === _post.user.user.id) {
//             postDB
//                 .update()
//                 .then((doc) => {
//                 console.log(doc)
//                 dispatch(dislikePost(post_id, {haert: true }));
//                 });

//             return;
//         }
//     }
// }

export default handleActions(
    {
    [LIKE_POST]: (state, action) => 
      produce(state, (draft) => {
          console.log(action)
          console.log(action.payload.post_id)
        let idx = draft.list.findIndex((p) => p.post_id === action.payload.post_id);
        console.log(idx)
        console.log(state)
        draft.list[idx] = {...draft.list[idx], heart: true}; 
    }),
    [DISLIKE_POST]: (state, action) => 
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);

        draft.list[idx] = {...draft.list[idx], heart: true}; 
    })
  },
  initialState
);

const actionCreators = {
    likePostFB,
    // dislikePostFB
};
  
export { actionCreators };