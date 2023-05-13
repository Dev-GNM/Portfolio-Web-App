import React, { useState } from 'react'

const App: React.FC = () => {

  

const [like, setLike] = useState([]);
const [dislike, setDislike] = useState([]);

const [comment, setComment] = useState([]);

const handleLike = (id) => {
    setLike([...like, id]);
}

const handleDislike = (id) => {
    setDislike([...dislike, id]);
}

const handleComment = (id) => {
    setComment([...comment, id]);
}




  return (
    <div className='App'>



    </div>
  )
};

export default App;
