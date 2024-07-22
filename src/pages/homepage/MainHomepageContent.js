import "./MainHomepageContent.css";

export default function MainHomepageContent() {
  return (
    <div className="MainHomepage">
      <h2>About</h2>
      <p>
        Hello, I’m Laetitia! While I love to knit, I’m also a front-end
        developer. I wanted to combine my two passions to create this app, so
        you can easily keep track of all your projects. Sometimes, remembering
        every detail from past projects can be quite complicated, which is why I
        enjoy staying organized while I knit. If you appreciate simple and
        effective planning, this app is perfect for you.
      </p>
      <br />
      <p>
        You'll be able to document detailed information about each project, from
        yarn choices and patterns to progress notes and photos. Whether you're
        planning your next creation or reflecting on past masterpieces, Unwind
        Yarn is here to support your knitting journey.
      </p>
      <br />
      <p>Enjoy organising your projects and happy knitting!</p>
      <hr />
      <div className="Contact">
        <p>
          If you have any questions or wish to get more information about Unwind
          Yarn, please send us an email!
        </p>
        <div className="ContactLink">
          <a href="mailto:test@test.com">Click here!</a>
        </div>
      </div>
    </div>
  );
}
