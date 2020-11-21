import { connect } from 'react-redux'
// import Api from '../Api'
const Home = ({ user }) => {
  // Api.get('user/getUser').then(res => {
  //   console.log(res)
  // })
  return (
    <div style={{ flex: 1 }}>
      <h1>Home</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  )
}

const mapState = (state) => {
  return { user: state.user }
}
export default connect(mapState, null)(Home)
