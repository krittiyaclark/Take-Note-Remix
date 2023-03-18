import NewNote, { links as newNoteLinks } from "~/components/NewNote";
import { getStoredNotes, storeNotes } from "../data/notes";
import { redirect } from "@remix-run/node";

// Frontend
export default function NotesPage() {
  return (
    <main id="content">
      <NewNote />
    </main>
  );
}

// Backend
export async function action({ request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);
  // Add validation
  const exitingNotes = await getStoredNotes();
  noteData.id = new Date().toISOString();
  const updtaeNotes = exitingNotes.concat(noteData);
  storeNotes(updtaeNotes);
  return redirect("/");
}

export function links() {
  return [...newNoteLinks()];
}
