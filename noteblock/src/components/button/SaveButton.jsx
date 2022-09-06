import "./saveButton.css";
function boton() {
  return console.log("hola");
}
function SaveButton() {
  return (
    <div className="area-save-button">
      <button onClick={boton} className="save-button">
        <i>Guardar y añadir</i>
      </button>
      ;
    </div>
  );
}

export default SaveButton;
