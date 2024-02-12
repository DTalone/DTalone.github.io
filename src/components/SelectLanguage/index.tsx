import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SelectLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className="absolute right-10 -top-10" id="home">
      <select
        name="language"
        id="language"
        className="bg-transparent text-neutral-100 border-2 border-neutral-100 rounded px-5 py-1"
        value={language}
        onChange={(event) => setLanguage(event?.target.value)}
      >
        <option value="en">EN</option>
        <option value="id">ID</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}
