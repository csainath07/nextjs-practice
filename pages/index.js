const App = (props) => {
  return <h1>Hello Next.Js</h1>
}

// App.getInitialProps = async() => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'GET'});
//   const posts = await res.json();
//   return {
//     posts
//   }  
// }

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'GET'});
//   const posts = await res.json();
//   return {
//     props: {
//       posts
//     }
//   }
// }

// export const getServerSideProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts',{method: 'GET'});
//   const posts = await res.json();
//   return {
//     props: {
//       posts
//     }
//   }
// }

export default App;