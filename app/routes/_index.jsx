import { Link } from "@remix-run/react";

import homeStyles from "~/styles/home.css";

export default function Index() {
  return (
    <main id="content">
      <h1>Note Taking App</h1>
      <p>Don't loose track of your note agin!</p>
      <p id="cta">
        <Link to="/notes">Try Now!</Link>
      </p>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: homeStyles }];
}
