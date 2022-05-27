import React from 'react'
import Footer from '../../shared/Footer'
import FamilyMembersList from '../components/FamilyMembersList'
import CustomHeader from '../../shared/UI Elements/custom header/CustomHeader'

const Family:React.FC = () => {
  return (
    <>
      <CustomHeader location='/family'/>
      <FamilyMembersList/>
      <Footer/>
    </>
  )
}

export default Family