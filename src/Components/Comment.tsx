import React, { FC, useState, useEffect, ChangeEventHandler, ChangeEvent, SetStateAction } from 'react'
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment'
import {v4 as uuidv4} from 'uuid'
import {DeleteFilled} from '@ant-design/icons'

const { TextArea } = Input;

interface IComents{
    author:string,
    avatar: string,
    content: Object,
    datetime: string,
    id:string,
}

interface ICommentListProps{
    comments:IComents[]
    setComments:any
}

interface IEditorProps{
    onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void,
    onSubmit:()=>void,
    submitting:boolean,
    value:string | undefined
}

const CommentList:FC<ICommentListProps> = ({comments,setComments}) => {

  const deleteComment = (id:string) => {
    setComments(comments.filter(el=> el.id !== id))
  }
  return (
  <>
    <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props =>( <Comment {...props}  actions={[<DeleteFilled onClick={()=>deleteComment(props.id)} style={{fontSize:'20px'}}/>]}/>)}
  />
  </>
  
  )
}
  

const Editor:FC<IEditorProps> = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);



export const AddComment:FC = () => {
    // const initialComments:any = JSON.parse(localStorage.getItem('Comments') as any);
    const [submitting,setSubmitting] = useState<boolean>(false)
    const [value,setValue] = useState<string>()
    const [comments,setComments] = useState<IComents[]>([]);

// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key:any, value:any) => {
//   if (typeof value === "object" && value !== null) {
//       if (seen.has(value)) {
//           return;
//       }
//       seen.add(value);
//   }
//   return value;
//   };
// };
    

//     useEffect(() => {
//       localStorage.setItem('Comments',JSON.stringify(comments,getCircularReplacer()));
//     }, [comments,setComments])

    const handleSubmit = () => {
        if (!value) {
          return;
        }
        setSubmitting(true)

        setTimeout(() => {
            setSubmitting(false);
            setValue('')
            setComments([...comments,{
                author:'you',
                avatar: 'https://joeschmoe.io/api/v1/random',
                content: <p>{value}</p>,
                datetime: moment().fromNow(),
                id:uuidv4(),

            }]);
          }, 1000);};

    const handleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
      };

    
    
    return (
        <div>
          {comments.length > 0 && <CommentList 
          comments={comments}
          setComments={setComments} />}
          <Comment
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="You" />}
            content={
              <Editor
                onChange={handleChange}
                onSubmit={handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </div>
      );
}


