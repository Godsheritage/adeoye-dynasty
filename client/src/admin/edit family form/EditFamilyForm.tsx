import React from 'react'
import CustomHeader from '../../shared/UI Elements/custom header/CustomHeader'
import FamilyForm from '../add family form/FamilyForm'
import Footer from '../../shared/UI Elements/footer/Footer'

const EditFamilyForm = () => {
  return (
          <div>
      <CustomHeader location="/dashboard" />
      <FamilyForm  />
      <Footer />
    </div>
  )
}

export default EditFamilyForm