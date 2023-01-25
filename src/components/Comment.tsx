import styles from './Comment.module.css';
import { Avatar } from './Avatar';

import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

export function Comment({content, onDeleteComment }) {

  const [likes, setLikes] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function onClickLikes() {
    setLikes( likes + 1);
  }

  
  return (
    <div className={styles.comment}>
       <Avatar hasBorder={false} 
       src='https://avatars.githubusercontent.com/u/28264580?v=4' />     

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jandir Habitzreuter</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={onClickLikes}>
            <ThumbsUp />
            Aplaudir <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}