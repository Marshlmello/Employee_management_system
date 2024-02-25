import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function AddEmployee(props) {
  const [show, setShow] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [skills, setSkills] = useState([]);

  const [vue, setVue] = useState(false);
  const [react, setReact] = useState(false);
  const [angular, setAngular] = useState(false);
  const [node, setNode] = useState(false);
  const [nest, setNest] = useState(false);
  const [typeScript, setTypeScript] = useState(false);
  const [sapui5, setSapui5] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const list = [];
    if (vue) {
      list.push("Vue.js");
    }
    if (react) {
      list.push("React");
    }
    if (angular) {
      list.push("Angular");
    }
    if (node) {
      list.push("Node.js");
    }
    if (nest) {
      list.push("Nest.js");
    }
    if (typeScript) {
      list.push("TypeScript");
    }
    if (sapui5) {
      list.push("SAPUI5");
    }
    setSkills(list);
  }, [vue, react, angular, node, nest, typeScript, sapui5]);

  return (
    <>
      <button
        className="rounded-lg bg-red-600 mt-4 p-2 w-full font-bold text-white"
        variant="primary"
        onClick={handleShow}
      >
        Mitarbeiter anlegen
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="mt-4"
      >
        <Modal.Header closeButton>
          <Modal.Title>Mitarbeiter anlegen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            id="editModal"
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              props.newEmployee(firstName, lastName, email, skills);
              setFirstName("");
              setLastName("");
              setEmail("");
              setVue(false);
              setReact(false);
              setAngular(false);
              setNode(false);
              setNest(false);
              setTypeScript(false);
              setSapui5(false);
              setSkills([]);
              handleClose();
            }}
          >
            <label className="flex flex-col">
              <p className="font-bold">Kontaktdaten</p>

              <input
                className="rounded-lg border-2 p-2 "
                type="text"
                id="name"
                value={firstName}
                onChange={(x) => setFirstName(x.target.value)}
                placeholder="Vorname"
                required
              />

              <input
                className="rounded-lg border-2 p-2 mt-2"
                type="text"
                id="name"
                value={lastName}
                onChange={(x) => setLastName(x.target.value)}
                placeholder="Nachname"
                required
              />

              <input
                className="rounded-lg border-2 p-2 mt-2"
                type="text"
                id="name"
                value={email}
                onChange={(x) => setEmail(x.target.value)}
                placeholder="E-Mail-Adresse"
                required
              />
            </label>
            <label>
              <p className="font-bold mt-4">Fähigkeiten</p>
              <div className="space-x-2 text-sm flex justify-center">
                {vue ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setVue(!vue)}
                  >
                    {" "}
                    Vue.js{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setVue(!vue)}
                  >
                    {" "}
                    Vue.js{" "}
                  </button>
                )}
                {react ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setReact(!react)}
                  >
                    {" "}
                    React{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setReact(!react)}
                  >
                    {" "}
                    React{" "}
                  </button>
                )}

                {angular ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setAngular(!angular)}
                  >
                    {" "}
                    Angular{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setAngular(!angular)}
                  >
                    {" "}
                    Angular{" "}
                  </button>
                )}
                {node ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setNode(!node)}
                  >
                    {" "}
                    Node.js{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setNode(!node)}
                  >
                    {" "}
                    Node.js{" "}
                  </button>
                )}
                {nest ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setNest(!nest)}
                  >
                    {" "}
                    Nest.js{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setNest(!nest)}
                  >
                    {" "}
                    Nest.js{" "}
                  </button>
                )}
                {typeScript ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-white bg-red-600"
                    onClick={(x) => setTypeScript(!typeScript)}
                  >
                    {" "}
                    TypeScript{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setTypeScript(!typeScript)}
                  >
                    {" "}
                    TypeScript{" "}
                  </button>
                )}
                {sapui5 ? (
                  <button
                    form="editForm"
                    className="rounded-lg border-1 p-1 text-white bg-red-600"
                    onClick={(x) => setSapui5(!sapui5)}
                  >
                    {" "}
                    SAPUI5{" "}
                  </button>
                ) : (
                  <button
                    form="editForm"
                    className="rounded-lg border-2 p-1 text-gray-400"
                    onClick={(x) => setSapui5(!sapui5)}
                  >
                    {" "}
                    SAPUI5{" "}
                  </button>
                )}
              </div>
            </label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            form="editModal"
            className="rounded-lg bg-red-600 p-2 w-full font-bold text-white"
          >
            {" "}
            Mitarbeiter hinzufügen
          </button>
          <button
            onClick={handleClose}
            className="rounded-lg border-2 border-red-600 bg-white font-bold  p-2 w-full text-red-600"
          >
            {" "}
            Abbrechen
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddEmployee;
