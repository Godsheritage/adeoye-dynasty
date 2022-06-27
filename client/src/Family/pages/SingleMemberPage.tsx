import './singleMemberPage.scss'
import Footer from '../../shared/UI Elements/footer/Footer'
import CustomHeader from '../../shared/UI Elements/custom header/CustomHeader'

const SingleMemberPage:React.FC = () => {
  return (
    <div>
    <CustomHeader location='/family'/>
    <div className='d-flex justify-content-apart'>
      <div className="img-fluid"></div>
      <div className="member-details">
        <h1>name</h1>
        <p>age</p>
        <p>mebmer</p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default SingleMemberPage