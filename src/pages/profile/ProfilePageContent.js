import MainHeader from "../../components/atoms/text/MainHeader";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import BoldText from "../../components/atoms/text/BoldText";
import ThermaticBreak from "../../components/atoms/text/ThermaticBreak";
import MarginTopDiv from "../../components/atoms/text/MarginTopDiv";

export default function ProfilePageContent(props) {
  const day = props.results.birthday.day;
  const month = props.results.birthday.month;
  const year = props.results.birthday.year;

  return (
    <div className="ProfilePageContent">
      <MainHeader>My profile</MainHeader>
      <div className="ProfilePageMainContent">
        <MarginTopDiv>
          <BoldText>First name:</BoldText>
        </MarginTopDiv>
        <MarginTopDiv>
          <ParagraphText>{props.results.firstName}</ParagraphText>
        </MarginTopDiv>
        <MarginTopDiv>
          <BoldText>Last name:</BoldText>
        </MarginTopDiv>
        <MarginTopDiv>
          <ParagraphText>{props.results.lastName}</ParagraphText>
        </MarginTopDiv>
        <MarginTopDiv>
          <BoldText>Email:</BoldText>
        </MarginTopDiv>
        <MarginTopDiv>
          <ParagraphText>{props.results.email}</ParagraphText>
        </MarginTopDiv>
        <MarginTopDiv>
          <BoldText>Mobile:</BoldText>
        </MarginTopDiv>
        <MarginTopDiv>
          <ParagraphText>{props.results.telephone}</ParagraphText>
        </MarginTopDiv>
        <MarginTopDiv>
          <BoldText>Birthday</BoldText>
        </MarginTopDiv>
        <MarginTopDiv>
          <ParagraphText>
            {day}th {month}, {year}
          </ParagraphText>
        </MarginTopDiv>
      </div>
      <ThermaticBreak />
      <div className="ProfilePageTextContent TextFont">
        <ParagraphText>
          Welcome to your profile page! This section of the website is designed
          to provide you with a comprehensive overview of all your personal
          information. Here, you can view details such as your name, contact
          information, and other relevant data you have provided.
        </ParagraphText>
        <ParagraphText>
          If you need to update, change, or add any information, you can easily
          do so by using the sidebar. Simply click the "edit" button located
          there, and you will be able to make the necessary adjustments. This
          ensures that your profile is always up to date with the most accurate
          information.
        </ParagraphText>
        <ParagraphText>
          Should you have any questions or need assistance, please feel free to
          reach out to our support team. We are here to help you make the most
          of your profile page experience.
        </ParagraphText>
      </div>
    </div>
  );
}
