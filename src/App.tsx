import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/28264580?v=4',
      name: 'Jandir Habitzreuter',
      role: 'Software Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-12-03 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/28929274?v=4',
      name: 'Rocketseat',
      role: 'Ignite'
    },
    content: [
      { type: 'paragraph', content: 'Salve' },
      { type: 'paragraph', content: 'Testando conteudo de um post' },
      { type: 'link', content: 'jane.design/doctorcare' },   
    ],
    publishedAt: new Date('2023-01-10 20:00:00'),
  },
];


import './global.css'
import { Sidebar } from './components/Sidebar';
export function App() { 
  return (
    <div>
      <Header />  

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main> 
      </div>  
    </div>    
  )
}
