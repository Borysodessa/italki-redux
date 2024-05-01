import json from "./data.json";

export function AllSpeakelanguage() {
  return json.data[0].teacher_info.teach_language
    .map((el) => el["language"])
    .concat(
      json.data[0].teacher_info.also_speak.map((el) => {
        return el["language"];
      })
    )
    .slice(0, 5)
    .join(", ");
}
