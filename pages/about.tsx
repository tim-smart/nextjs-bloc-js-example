import Link from "next/link";

const About = () => (
  <>
    <p>Simple about page here.</p>
    <p>Press the back button to see what a client rendered page looks like.</p>
    <Link href="/">
      <a>Home</a>
    </Link>
  </>
);

export default About;
