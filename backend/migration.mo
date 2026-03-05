import Array "mo:core/Array";
import Text "mo:core/Text";

module {
  type OldCourse = {
    title : Text;
    description : Text;
    category : Text;
  };

  type OldAcademyData = {
    name : Text;
    tagline : Text;
    description : Text;
    contactEmail : Text;
    courses : [OldCourse];
  };

  type OldActor = {
    courses : [OldCourse];
    academyData : OldAcademyData;
  };

  type NewProgram = {
    title : Text;
    description : Text;
    category : Text;
  };

  type NewAcademyData = {
    name : Text;
    tagline : Text;
    description : Text;
    contactEmail : Text;
    programs : [NewProgram];
  };

  type NewActor = {
    programs : [NewProgram];
    academyData : NewAcademyData;
  };

  public func run(old : OldActor) : NewActor {
    let programs : [NewProgram] = [];
    let academyData : NewAcademyData = {
      name = "रॉयल अकॅडमी";
      tagline = "यशाच्या दिशेने एक पाऊल पुढे";
      description = "रॉयल अकॅडमी ही पोलीस आणि प्रशासकीय सेवांसाठी संपूर्ण प्रशिक्षण केंद्र आहे. आमचे ध्येय विद्यार्थ्यांना सर्वोत्तम प्रशिक्षण, मार्गदर्शन आणि मोटिवेशन देण्याचे आहे.";
      contactEmail = "info@royalacademy.in";
      programs;
    };
    {
      programs;
      academyData;
    };
  };
};
