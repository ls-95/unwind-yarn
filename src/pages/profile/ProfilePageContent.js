export default function ProfilePageContent(props) {
  const day = props.results.birthday.day;
  const month = props.results.birthday.month;
  const year = props.results.birthday.year;

  return (
    <div className="ProfilePageContent">
      <h1>My profile</h1>
      <div className="ProfilePageMainContent">
        <div className="ProfileText">
          <p className="Strong">First name:</p>
        </div>
        <div className="ProfileText">
          <p className="TextFont">{props.results.firstName}</p>
        </div>
        <div className="ProfileText">
          <p className="Strong">Last name:</p>
        </div>
        <div className="ProfileText">
          <p className="TextFont">{props.results.lastName}</p>
        </div>
        <div className="ProfileText">
          <p className="Strong">Email:</p>
        </div>
        <div className="ProfileText">
          <p className="TextFont">{props.results.email}</p>
        </div>
        <div className="ProfileText">
          <p className="Strong">Mobile:</p>
        </div>
        <div className="ProfileText">
          <p className="TextFont">{props.results.telephone}</p>
        </div>
        <div className="ProfileText">
          <p className="Strong">Birthday</p>
        </div>
        <div className="ProfileText">
          <p className="TextFont">
            {day}th {month}, {year}
          </p>
        </div>
      </div>
      <hr />
      <div className="ProfilePageTextContent TextFont">
        <p className="ProfileText">
          Welcome to your profile page! This section of the website is designed
          to provide you with a comprehensive overview of all your personal
          information. Here, you can view details such as your name, contact
          information, and other relevant data you have provided.
        </p>
        <p className="ProfileText">
          If you need to update, change, or add any information, you can easily
          do so by using the sidebar. Simply click the "edit" button located
          there, and you will be able to make the necessary adjustments. This
          ensures that your profile is always up to date with the most accurate
          information.
        </p>
        <p className="ProfileText">
          Should you have any questions or need assistance, please feel free to
          reach out to our support team. We are here to help you make the most
          of your profile page experience.
        </p>
      </div>
    </div>
  );
}
