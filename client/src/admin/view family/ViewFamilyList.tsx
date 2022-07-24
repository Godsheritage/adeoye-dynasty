// import FamilyMember from "./FamilyMember"
import ViewFamilyMember from "./ViewFamilyMember";

const FamilyMembersList: React.FC<any> = ({ familyMembers }) => {
  return (
    <div
      className="family-member d-flex flex-wrap justify-content-center align-items-center"
      style={{ backgroundColor: "#EDF1F4" }}
    >
      {familyMembers.map((member: any, index: number) => (
        <ViewFamilyMember key={index} member={member} />
      ))}
    </div>
  );
};

export default FamilyMembersList;
