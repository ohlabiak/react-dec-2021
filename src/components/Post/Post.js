

 const Post = ({post:{id, userId, title, body}}) => {
     return (
         <div>
            <div>id: {id}</div>
            <div>userId : {userId}</div>
            <div>title: {title}</div>
            <p>{body}</p>


        </div>
     );
 };

// const Post = ({ post }) => {
//      return (
//          <div>
//              <hr/>
//              <div>userId: {post.userId}</div>
//              <div>id: {post.id}</div>
//              <div>title: {post.title}</div>
//              <div>body: {post.body}</div>
//              <hr/>
//          </div>
//      );
//  }

 export {Post};
