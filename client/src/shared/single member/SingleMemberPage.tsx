import React from 'react'
import Footer from '../UI Elements/footer/Footer'
import CustomHeader from '../UI Elements/custom header/CustomHeader'

const SingleMemberPage = () => {
  return (
    <>
    <CustomHeader location='/family'/>
    <div>
      <div className="img-fluid"></div>
      <div className="member-details">
        <h1>name</h1>
        <p>age</p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default SingleMemberPage