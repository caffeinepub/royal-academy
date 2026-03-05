import Text "mo:core/Text";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Program = {
    title : Text;
    description : Text;
    category : Text;
  };

  type AcademyData = {
    name : Text;
    tagline : Text;
    description : Text;
    contactEmail : Text;
    programs : [Program];
  };

  module Program {
    public func compareByCategory(program1 : Program, program2 : Program) : Order.Order {
      Text.compare(program1.category, program2.category);
    };
  };

  let programs : [Program] = [
    {
      title = "पोलीस भरती पूर्व प्रशिक्षण";
      description = "सर्व पोलीस भरती परीक्षा संसाधनांसह संपूर्ण मार्गदर्शन.";
      category = "परीक्षा तयारी";
    },
    {
      title = "शारीरिक तयारी";
      description = "फिजिकल टेस्‍टसाठी विशेष प्रशिक्षण आणि प्रशिक्षित मार्गदर्शन.";
      category = "शारीरिक प्रशिक्षण";
    },
    {
      title = "न्यायशास्त्र";
      description = "मूलभूत कायदे व भारतीय संविधानावर आधारित प्रशिक्षण.";
      category = "कायदा";
    },
    {
      title = "सामान्य ज्ञान व चालू घडामोडी";
      description = "परिक्षासाठी आवश्यक सर्वसाधारण ज्ञान व चालू घडामोडींचे विश्लेषण.";
      category = "सामाजिक विज्ञान";
    },
    {
      title = "मनोबल व नेता क्षमता विकास";
      description = "नेत्याचे कौशल्य, मनोबल आणि स्नेहवृद्धीसाठी कार्यशाळा.";
      category = "वैयक्तिक विकास";
    },
  ];

  let academyData : AcademyData = {
    name = "रॉयल अकॅडमी";
    tagline = "यशाच्या दिशेने एक पाऊल पुढे";
    description = "रॉयल अकॅडमी ही पोलीस आणि प्रशासकीय सेवांसाठी संपूर्ण प्रशिक्षण केंद्र आहे. आमचे ध्येय विद्यार्थ्यांना सर्वोत्तम प्रशिक्षण, मार्गदर्शन आणि मोटिवेशन देण्याचे आहे.";
    contactEmail = "info@royalacademy.in";
    programs;
  };

  public query ({ caller }) func getAcademyData() : async AcademyData {
    academyData;
  };

  public query ({ caller }) func getProgramsByCategory(category : Text) : async [Program] {
    let filtered = programs.filter(
      func(program) { program.category == category }
    );

    if (filtered.isEmpty()) {
      Runtime.trap("याच श्रेणीत कोणतेही कार्यक्रम उपलब्ध नाहीत");
    };

    filtered.sort(Program.compareByCategory);
  };

  public query ({ caller }) func getAllPrograms() : async [Program] {
    programs.sort(Program.compareByCategory);
  };
};
