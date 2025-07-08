import type { JSX } from 'react';
import './App.css'


const memberList: string[] = [
  "Gly, STAT",
  "Samu, MATH",
  "Karina, MATH",
  "JB, CMSC",
  "Lance, STAT",
  "Smyle, AMAT",
  "Cath, MATH",
  "Lyresh, STAT",
  "Drew, STAT",
  "Winch, AMAT",
  "Croms, STAT",
  "Krabby, AMAT",
  "Iya, STAT",
  "RK, CMSC",
];

interface MemberCardProps {
  name: string;
}

const MemberCard = ({ name }: MemberCardProps): JSX.Element => (
  <div className="member-card">
    <h3>{name}</h3>
  </div>
);

function NavBar() {
  return (
    <nav className="navBar">
      <h2 className="brand">PRIMERAS</h2>
      <ul>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#origin">Origin</a>
        </li>
        <li>
          <a href="#members">Members</a>
        </li>
      </ul>
    </nav>
  );
}


export default function App() {
  return (
    <>
    <NavBar />

    <header className="hero">
      <h1>PRIMERAS</h1>
      <p>Introducing the best batch</p>
    </header>

    <main className="container">
      {/* About Us */}
      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>
          Batch PRIMERAS is a duly recognized batch of the UPLB Mathematical Sciences Society since
          September 23, 2023, and continues to align with the vision of the Society in cultivating a deeper
          appreciation and broader application of the Mathematical Sciences in the Philippines. They continuously
          strive for excellence and enhance their skills with honor and integrity in service of the Filipino people.
        </p>
      </section>

      {/* Origin Story */}
      <section id="origin" className="origin-section">
        <h2>Origin Story</h2>
        <p>
          It all began when twelve freshmen, a sophomore, and a junior, all UPLB students, had an interest in joining
          a society that would not only shape them but also gain several friends in the process. In other words, mga nabudol 
          ni Donats na sumali sa MASS. Nag apply sila, dumaan sa process: gumawa ng tickler, mag report sa mga members, at 
          umattend ng finals. Then the rest is history.
        </p>
      </section>

      {/* Members */}
      <section id="members" className="members-section">
        <h2>Meet the PRIMERAS</h2>
        <div className="member-grid">
          {memberList.map((name) => (
            <MemberCard key={name} name={name} />
          ))}
        </div>
      </section>
    </main>
  </>
  );
}


