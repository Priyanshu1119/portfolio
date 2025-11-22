import {useParams} from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-pink-500 text-shadow-white text-3xl p-5 text-center'>User: {userid}</div>
  )
}

export default User 