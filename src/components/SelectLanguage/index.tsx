export default function SelectLanguage() {
  return (
    <div className="absolute right-10 -top-10" id="home">
      <select
        name="language"
        id="language"
        className="bg-transparent text-neutral-100 border-2 border-neutral-100 rounded px-5 py-1"
      >
        <option value="ENGLISH">EN</option>
        <option value="INDONESIA">ID</option>
      </select>
    </div>
  );
}
