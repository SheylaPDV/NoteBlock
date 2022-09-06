import SaveButton from "../button/SaveButton";
import "./textArea.css";

function TextArea() {
  return (
    <>
      <table className="text-area-table">
        <textarea placeholder="No te olvides de..." className="text-area" />
        <SaveButton></SaveButton>
      </table>
    </>
  );
}

export default TextArea;
