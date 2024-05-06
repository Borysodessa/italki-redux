import styles from "./teacherCard.module.css";
import { useState } from "react";
import { languageData } from "./languageData";

export function Filter({
  selectedLanguage,
  setSelectedLanguage,
  teachersData,
}) {
  const [opensLanguagesButton, setOpensLanguagesButton] = useState(false);
  const [languageNameSubstr, setLanguageNameSubstr] = useState("");

  function selectLanguage(language) {
    if (selectedLanguage.includes(language)) {
      setSelectedLanguage(selectedLanguage.filter((el) => el !== language));
    } else {
      setSelectedLanguage([...selectedLanguage].concat([language]));
    }
  }

  function languagesButton() {
    setOpensLanguagesButton(() => !opensLanguagesButton);
  }

  function enterLanguageNameSubstr(event) {
    setLanguageNameSubstr(() => event.target.value);
  }

  return (
    <div>
      <button onClick={languagesButton} className={styles.openLanguagesButton}>
        language
      </button>

      {opensLanguagesButton && (
        <div>
          <input name="enterLanguage" onChange={enterLanguageNameSubstr} />
          {[...languageData(teachersData)].map((language) => {
            return (
              language.includes(languageNameSubstr) && (
                <div key={language} onClick={() => selectLanguage(language)}>
                  {language}
                </div>
              )
            );
          })}
        </div>
      )}
    </div>
  );
}
